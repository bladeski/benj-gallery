let imagemin = require("imagemin"),
    webp = require("imagemin-webp"),
    outputFolder = "./public/images",
    PNGImages = "./public/images/*.png",
    JPEGImages = "./public/images/*.jpg";

imagemin([PNGImages], outputFolder, {
    plugins: [webp({
        loassless: true
    })]
});

imagemin([JPEGImages], outputFolder, {
    plugins: [webp({
        quality: 65
    })]
});