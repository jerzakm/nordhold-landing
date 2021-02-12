const sharp = require('sharp');
const fs = require('fs');
const path = require('path')

const sizes = [100, 200, 400, 600, 800, 1000, 1200, 1400]

processImages()

function processImages(){
    const mainImageDir = 'img'
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
        console.log(`processing ${dir}/${file} size: ${size}`)
        const newDir = `static/${dir}`
        if (!fs.existsSync(`${newDir}`)){
            fs.mkdirSync(`${newDir}`);
        }
        if (!fs.existsSync(`${newDir}/${size}`)){
            fs.mkdirSync(`${newDir}/${size}`);
        }
        sharp(`${dir}/${file}`)
            .resize(size)
            .webp({quality: 90})
            .toFile(`${newDir}/${size}/${fileName}.webp`, (err, info) => { if(err) console.log(err) });

        sharp(`${dir}/${file}`)
            .resize(size)
            .jpeg({quality: 90})
            .toFile(`${newDir}/${size}/${fileName}.jpg`, (err, info) => { if(err) console.log(err) });
    }
}