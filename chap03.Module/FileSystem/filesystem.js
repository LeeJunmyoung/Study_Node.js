const fs = require("fs");
async  function  fileSystem(){


let aaa= await fs.readFileSync('test.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
    
    return data;
});

console.log(aaa.toString());
}

fileSystem();