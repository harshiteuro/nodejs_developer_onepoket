const fs = require('fs');

function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    //split is used to convert it into array of words
    //filter function is iterates and creates a new array where we have added callback function which filters out the non empty words.
    const words = data.split(/\s+/).filter(word => word !== '');  ///\s+/. This regular expression matches one or more whitespace characters (e.g., spaces, tabs, newlines)
    
    const wordCount = words.length;

    console.log(`Total word count: ${wordCount}`);
  });
}

const filename = 'data.txt';
countWordsInFile(filename);
