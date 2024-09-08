const fs = require('fs');

console.log(1);
////THIS CODE WILL GIVE ERROR SOMETIMES
// the error happens because of the asynchronous nature of the fs module in Node.js. the file operations are being executed in parallel without waiting for the previous ones to complete. This means the file might not have been created yet when the fs.readFile is called, or the file might have been deleted by fs.unlink before it's read or updated.
//CODE:-
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File has been written!');
// });

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.appendFile('example.txt', ' Appending some text!', (err) => {
//     if (err) throw err;
//     console.log('File has been updated!');
// });

// fs.unlink('example.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// })

//Solution: To chain these operations in callbacks to ensure one operation completes before the next starts:
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been written!');

    // Read the file after it has been written
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);

        // Append to the file after reading
        fs.appendFile('example.txt', ' Appending some text!', (err) => {
            if (err) throw err;
            console.log('File has been updated!');

            // Delete the file after appending
            fs.unlink('example.txt', (err) => {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
    });
});

console.log(2);
