/*
The fs (file system) module allows you to interact with files and directories. 
You can 

-> read and write files, 
-> create and delete directories, and 
-> delete files.


this module is known as fs module
*/

//reading files  

// since we know if we want to import a module we have write 
// 'require'
// to access that specific module

// const fs = require('fs');

// // now we will try to read data from a file. for which we will create a text file 
// fs.readFile("./docs/blog1.txt", (error, data) => {
//     if (error) {
//         console.log(error)
//     } 
//     console.log(data.toString());
// });
// // since its an asynchronous task, 
// // we can check by a print. see the last print runs before the data is read here.
// console.log('last line to print');

// writing files
const fs = require('fs');

//const content = 

fs.writeFile('./docs/blog1.txt', 'the blog1 file has been updated', ()=> {
    // file has been updated  
    console.log('file has been written');
})

/* in blog1 file, 
hello, people.
I am sadidur rahman.

has been replaced by the new text. 
the blog1 file has been updated
*/

// now if the file did not existed then 
fs.writeFile('./docs/blog2.txt', 'the blog2 file has been created', ()=> {
    // file has been updated  
    console.log('file has been written');
})

// if the file does not exist then it will create a new one


// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        } 
        console.log('folder has been removed');
    })  
}
// a new folder named assets will be created for this


// deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('file deleted')
    })
} 
else {

    fs.writeFile('./docs/deleteme.txt', 'the deleteme file has been created', ()=> {
        // file has been updated  
        console.log('file has been created');
    })
}
