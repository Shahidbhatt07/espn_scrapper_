const request = require("request");
const cheerio = require("cheerio");

function getAllMatch(url){
//    console.log("from allMatch.js",url); 
    request(url, cb);
}

function cb(err, res, body){
    if (err){
        console.error("error", err);
    } else {
        handleHTML(body);
        }
}

function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool(`a[data-hover="Scorecard"]`);
    // console.log(anchorElem.html());
    let relativeLink = anchorElem.attr("href");
    console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com"+ relativeLink;
    console.log(fullLink);
}  


module.exports = {
    getAllMatch: getAllMatch,
};