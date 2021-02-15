const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
// import { request, gql } from 'graphql-request'
const {request, gql} = require('graphql-request')

async function getImages(){
    // const file = fs.createWriteStream("file.jpg");
    // const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
    // response.pipe(file);
    // });

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

    console.log(res)
}

getImages()