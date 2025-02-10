const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }

  const images = files.map((file) => ({
    src: `/images/${file}`,
    alt: path.basename(file, path.extname(file)),
  }));

  console.log(images);
});