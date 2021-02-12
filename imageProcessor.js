const sharp = require('sharp');
const fs = require('fs');
const path = require('path')

const sizes = [200, 500, 800, 1200]

processImages()

function processImages(){
    const mainImageDir = 'static/img/skadi'
    processDirectory(mainImageDir)
}

function processDirectory(dir){
    const dirContent = fs.readdirSync(dir)
    for(const entry of dirContent){
        const isDir = fs.statSync(`${dir}/${entry}`).isDirectory()
        if(isDir){
            processDirectory(`${dir}/${entry}`)
        } else {
            const ext = path.extname(`${dir}/${entry}`)
            if(['.jpg','.png'].includes(ext.toLocaleLowerCase())) {
                processImage(dir,entry)
            }
        }
    }
}

function processImage(dir,file){
    const fileName = file.split('.')[0]


    for(const size of sizes){
        if (!fs.existsSync(`${dir}/${size}`)){
            fs.mkdirSync(`${dir}/${size}`);
        }
        sharp(`${dir}/${file}`)
            .resize(size)
            .webp({quality: 90})
            .toFile(`${dir}/${size}/${fileName}.webp`, (err, info) => { if(err) console.log(err) });

        sharp(`${dir}/${file}`)
            .resize(size)
            .jpeg({quality: 90})
            .toFile(`${dir}/${size}/${fileName}.jpg`, (err, info) => { if(err) console.log(err) });
    }
}