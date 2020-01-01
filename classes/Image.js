'use strict';

const fs = require('fs');
const path = require('path');
const gd = require('node-gd');
const ABS_PATH = path.dirname(process.mainModule.filename);
const TMP_PATH = ABS_PATH + '/tmp';
const FONT_PATH = ABS_PATH + '/font/Roboto-Thin.ttf';
const util = require('util');

fs.readFile = util.promisify(fs.readFile);
fs.unlink = util.promisify(fs.unlink);

class Image {
    constructor({ width, height, text }) {
        this.width = parseInt(width, 10);
        this.height = parseInt(height, 10);
        this.text = text;
    }

    create(response) {
        const destPath = TMP_PATH + '/placeholder.png';
        const img = gd.createSync(this.width, this.height);

        img.colorAllocate(238, 238, 238);
        
        const textColor = img.colorAllocate(0, 0, 0);

        img.stringFT(textColor, FONT_PATH, 24, 0, (this.width / 2) - 12, (this.height / 2) + 12, this.text);

        img.savePng(destPath, 1, async err => {
            if(!err) {
                const file = await fs.readFile(destPath);
                response.set('Content-Type', 'image/png');
                response.send(file);

                await fs.unlink(destPath);
            }
        });

        img.destroy();
    }
}

module.exports = Image;