import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";

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

  return headerParamArray;
}

function bodyConverter(bodyData) {
  const charsetLow = charset.toLowerCase();
  const result = micromark(bodyData, charsetLow, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });

  return result;
}

export { headerConverter, bodyConverter };
