const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const sharp = require('sharp');
const {request, gql} = require('graphql-request')

const sizes = [100, 200, 400, 600, 800, 1000, 1200, 1400]

async function getImages(){

    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'

    const query = gql`
        query getVariants{
            assets(locales:[en]){
            url,
            id
            }
        }
    `
    const res = await request(url, query)

    for(const img of res.assets){
        console.log(img.url)
        const file = fs.createWriteStream(`graphImages/${img.id}.jpg`);
        const request = await https.get(img.url, function(response) {
        response.pipe(file);
        });
    }

    processDirectory('graphImages')

    function processDirectory(dir){
        const dirContent = fs.readdirSync(dir)
        for(const entry of dirContent){
            const isDir = fs.statSync(`${dir}/${entry}`).isDirectory()
            if(!isDir){
                processImage(dir,entry)
            }
        }
    }

    function processImage(dir,file){
        const fileName = file.split('.')[0]

        for(const size of sizes){
            console.log(`processing ${dir}/${file} size: ${size}`)
            const newDir = `${dir}`
            if (!fs.existsSync(`${newDir}`)){
                fs.mkdirSync(`${newDir}`);
            }
            sharp(`${dir}/${file}`)
                .resize(size)
                .webp({quality: 90})
                .toFile(`${newDir}/${fileName}_${size}.webp`, (err, info) => { if(err) console.log(err) });

            sharp(`${dir}/${file}`)
                .resize(size)
                .jpeg({quality: 90})
                .toFile(`${newDir}/${fileName}_${size}.jpg`, (err, info) => { if(err) console.log(err) });
        }
    }
}

getImages()