const fileLoc = "\"https://hectormata.github.io/resume.github.io/Data/buttonsCount.json\"";
var obj = {
    table:[]
};

obj.table.push({emailCount:0, githubCount:0, linkedinCount:0});

var json = JSON.stringify(obj);

var fs = require("fs");
fs.writeFile(fileLoc, json, "UTF-8", callback);

fs.readFile(fileLoc, "UTF-8", function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push({emailCount:1,githubCount: 2, linkedinCount:3}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(fileLoc, json, "UTF-8", callback); // write it back
    }
});

document.getElementById("emailButton").addEventListener("click", function () {

    fs.readFile(fileLoc, "UTF-8",function(err,content){
        if(err) throw err;
        var parseJson = JSON.parse(content);
        for (i=0; i <11 ; i++){
            parseJson.table.push({emailCount:i, githubCount:i*i,linkedinCount:i++})
        }
        fs.writeFile(fileLoc,JSON.stringify(parseJson),function(err){
            if(err) throw err;
        })
    });

});
