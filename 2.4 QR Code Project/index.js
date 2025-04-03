// 1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';
inquirer
  .prompt([{
    name: 'url',
    message:'Please enter a URL:',
  }
  ])
  .then((answers) => {
    const url = answers.url;
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile('user_input.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
})
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

// 3. Create a txt file to save the user input using the native fs node module.
