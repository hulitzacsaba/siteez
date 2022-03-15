import fs from "fs";

function writeThisMf(header, body, title) {
  const headerArray = header.split(",");
  const trueHeaderArray = [""];
  const path = "./temp/" + title + ".html";

  trueHeaderArray.push("<!DOCTYPE html>\n");
  trueHeaderArray.push(headerArray[0] + "\n");
  trueHeaderArray.push("<head>\n");
  trueHeaderArray.push(headerArray[1] + "\n");
  trueHeaderArray.push(
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
  );
  trueHeaderArray.push(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
  );
  trueHeaderArray.push(headerArray[2] + "\n");
  trueHeaderArray.push(headerArray[3] + "\n");
  trueHeaderArray.push("</head>\n");

  trueHeaderArray.forEach((element) => {
    fs.writeFile(path, element, { flag: "a" }, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

export { writeThisMf };
