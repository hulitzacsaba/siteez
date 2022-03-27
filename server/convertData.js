import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import fs from "fs";

let charset = "";

function headerConverter(headerData) {
  const headerArray = headerData.split(",");

  const lang = headerArray[0];
  charset = headerArray[1];
  const title = headerArray[2];
  const noScript = headerArray[3];

  const langParam = '<html lang="' + lang + '">';
  const charsetParam = '<meta charset="' + charset + '">';
  const titleParam = "<title>" + title + "</title>";
  const noScriptParam = "<noscript>" + noScript + "</noscript>";

  const headerParamArray =
    langParam + "," + charsetParam + "," + titleParam + "," + noScriptParam;

  writeParams(headerParamArray, title);
}

function bodyConverter(bodyData) {
  const charsetLow = charset.toLowerCase();
  const result = micromark(bodyData, charsetLow, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });

  return result;
}

function writeParams(headerArray, title) {
  const headerParams = headerArray.split(",");
  const tempArray = fs.readFileSync("./template.txt", "utf-8").split("\r\n");
  const path = "./temp/filledParamTemplate" + title + ".txt";
  let contentArray = "";
  let prevElement;

  tempArray.forEach((element) => {
    switch (prevElement) {
      case "<!DOCTYPE html>":
        contentArray += "\n" + headerParams[0];
        contentArray += "\n" + element;
        break;
      case "<head>":
        contentArray += "\n" + headerParams[1];
        contentArray += "\n" + element;
        break;
      case '<meta name="viewport" content="width=device-width, initial-scale=1.0">':
        contentArray += "\n" + headerParams[2];
        contentArray += "\n" + headerParams[3];
        contentArray += "\n" + element;
        break;
      default:
        contentArray += "\n" + element;
        break;
    }

    prevElement = element;
  });

  fs.writeFile(path, contentArray, {flag : "w"}, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

export { headerConverter, bodyConverter };
