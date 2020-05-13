const imagemin = require('imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    pngToJpeg = require('png-to-jpeg'),
    webp = require('imagemin-webp'),
    fs = require('fs'),
    outputFolder = './public/images',
    pngImages = './src/data/images/*.png',
    jpgImages = './src/data/images/*.jpg';

imagemin([jpgImages], {
    destination: outputFolder,
    plugins: [
        imageminMozjpeg({
            quality: 60,
        }),
    ],
});

imagemin([pngImages], {
    destination: outputFolder,
    plugins: [
        pngToJpeg({
            quality: 60,
        }),
    ],
}).then((files) => {
    return new Promise((rej, res) => {
        files.forEach((file) => {
            const newPath =
                file.destinationPath.substr(
                    0,
                    file.destinationPath.lastIndexOf('.')
                ) + '.jpg';
            fs.rename(file.destinationPath, newPath, (e) => e && rej(e));
        });
    });
}).catch(e => console.log(e));

imagemin([jpgImages, pngImages], {
    destination: outputFolder,
    plugins: [
        webp({
            quality: 60,
        }),
    ],
});
