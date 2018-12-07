const moduleExportJs = require('./moduleExport');
const moduleExportJs2 = require('./moduleExport2');
const exportsJs = require('./exports');



console.log(moduleExportJs.odd());
console.log(moduleExportJs.even());

console.log("");

console.log(moduleExportJs2.odd());
console.log(moduleExportJs2.even());

console.log("");

console.log(exportsJs.odd());
console.log(exportsJs.even());

console.log("");


console.log("");


console.log(exports);
console.log(module.exports);

console.log(exports===module.exports);