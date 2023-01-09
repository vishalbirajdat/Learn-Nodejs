// var fs = require("fs");

// // Asynchronous read
// fs.readFile('inpupt.txt', function (err, data) {
// if (err) {
// 	return console.error(err);
// }
// console.log("Asynchronous read: " + data.toString());
// });


// // Synchronous read
// var data = fs.readFileSync('in0put.txt');
// console.log("Synchronous read: " + data.toString());



// var fs = require("fs");

// // Asynchronous - Opening File
// console.log("opening file!");
// fs.open('input.txt', 'r+', function(err, fd) {
// if (err) {
// 	return console.error(err);
// }
// console.log("File open successfully");	
// });


// var fs = require("fs");

// console.log("opening an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
// if (err) {
// 	return console.error(err);
// }
// console.log("File opened successfully!");
// console.log("reading the file");
	
// fs.read(fd,function(err, n, k){
// 	if (err){
// 		console.log(err);
// 	}
// 	console.log(n + " bytes read");
//     console.log(k + " data read")
	
// 	});

//     fs.write(fd, "fd file wriiten", function(err, fw) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(fw);
//         console.log("File written successfully");
//     });
// });


// var fs = require("fs");

// console.log("writing into existing file");
// fs.writeFile('write.txt', 'Geeks For Geeks', function(err) {
// if (err) {
// 	return console.error(err);
// }
	
// console.log("Data written successfully!");
// console.log("Let's read newly written data");
	
// fs.readFile('write.txt', function (err, data) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("Asynchronous read: " + data.toString());
// });
// });
