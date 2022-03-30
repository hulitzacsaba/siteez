import PastebinAPI from "pastebin-ts";

function uploadToPB(title) {
  const pastebin = new PastebinAPI({
    api_dev_key: "cd6da9178167d6520a6e69e1c5c070c4",
  });

  let code = pastebin.createPasteFromFile({
    file: "./temp/" + title + ".html",
    title: title,
    format: "html5",
    privacy: 0,
    expiration: "1M",
  });

  return code;
}

export { uploadToPB };
