var platform = require("platform");

console.log("Name:" + platform.name);
console.log("Version:" + platform.version); 
console.log("Layout:" + platform.layout);
console.log("OS:" + platform.os);
console.log("Description:" + platform.description);


var info = platform.parse("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0");
console.log("Name:" + info.name);
console.log("Version:" + info.version); 
console.log("Layout:" + info.layout);
console.log("OS:" + info.os);
console.log("Description:" + info.description);