const fs = require('fs');
fs.exists('nodeserver.js',(exists) => {
    console.log("มีไฟล์ nodeserver.js มีอยู่จริง");
});
console.log('ว้าววววววว!!');
//fs.rename('nodeserver.js','tmp.js');
//fs.rm('nodeserver.js');