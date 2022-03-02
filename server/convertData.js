function headerConvert(headerData) {

    const headerArray = headerData.split(',');

    const lang = headerArray[0];
    const charset = headerArray[1];
    const title = headerArray[2];
    const noScript = headerArray[3];

    const langParam = '<html lang="'+lang+'">';
    const charsetParam = '<meta charset="'+charset+'">';
    const titleParam = '<title>'+title+'</title>';
    const noScriptParam = '<noscript>'+noScript+'</noscript>';

    const headerParamArray = langParam+","+charsetParam+","+titleParam+","+noScriptParam;

    return headerParamArray;

}