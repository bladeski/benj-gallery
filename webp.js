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
            quality: 30,
        }),
    ],
})
    .then(() =>
        imagemin([pngImages], {
            destination: outputFolder,
            plugins: [
                pngToJpeg({
                    quality: 30,
                }),
            ],
        })
    )
    .then((files) => {
        return new Promise((res, rej) => {
            if (files.length === 0 || !files) {
                res();
                return;
            }

            let counter = 0;
            files.forEach((file) => {
                const newPath =
                    file.destinationPath.substr(
                        0,
                        file.destinationPath.lastIndexOf('.')
                    ) + '.jpg';
                fs.rename(file.destinationPath, newPath, (e) => {
                    e && rej(e);
                    counter++;
                    console.log(counter);
                    console.log(files.length);
                    if (counter === files.length) {
                        res();
                    }
                });
            });
        });
    })
    .then(() =>
        imagemin([jpgImages, pngImages], {
            destination: outputFolder,
            plugins: [
                webp({
                    quality: 30,
                }),
            ],
        })
    )
    .catch((e) => console.log(e));
