import fs from "fs";

function writeThisMf(body, title) {
  const path = "./temp/" + title + ".html";
  const tempArray = fs
    .readFileSync("./temp/filledParamTemplate" + title + ".txt", "utf-8")
    .split("\n");

  let line = "";

  const bodyPos = tempArray.indexOf("<body>");

  for (let index = 0; index < tempArray.length; index++) {
    const element = tempArray[index];

    if (index == bodyPos + 1) {
      line += "\n" + body;
    } else{
      line += "\n" + element;
    }
  }

  fs.writeFile(path, line, {flag: "w"}, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

export { writeThisMf };
