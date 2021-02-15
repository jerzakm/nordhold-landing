import { request, gql } from 'graphql-request'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'


    const article = 'test'

    const query = gql`
        query MyQuery {
            products(where: {type: chair}) {
                id,
            name,
            }
        }
    `

    const graphData = await request(url, query)
    console.log(graphData)



	if (article !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(article));
	} else {
		next();
	}
}