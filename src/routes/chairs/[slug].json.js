import { request, gql } from 'graphql-request'
const marked = require("marked");

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'

    const { slug } = req.params;

    const dbResponse = {}


    for(const locale of ['en','pl']) {
        const query = gql`
            query MyQuery {
                product(where: {slug: "${slug}"}, locales: [pl]) {
                    id, name, series, slug, price, description,
                testimonials{
                    id, text,rating,date, author, source
                },
                chairSpec{
                    id, totalHeight, seatHeight, seatWidth, seatDepth, backWidth, backHeight, headrestWidth, headrestHeight, lumbarWidth, lumbarHeight, armrestWidth, armrestLength, adjustableHeadrest, adjustableLumbar,hasFootrest, adjustableBackrestHeight, adjustableBackrestPosition, baseDiameter
                },
                productVariants{
                    id,
                    color{hex},colorName, symbol, ean,
                    images(locales: [en]){
                    id,
                    url,
                    fileName
                    }
                }
                }
            }
            `

        dbResponse[locale] = await request(url, query)
        // TURNS cms markdown to html
        const html = marked(dbResponse[locale].product.description);
        dbResponse[locale].product.description = html
    }



	if (dbResponse !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(dbResponse));
	} else {
		next();
	}
}