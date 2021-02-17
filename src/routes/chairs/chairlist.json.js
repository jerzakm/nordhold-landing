import { request, gql } from 'graphql-request'
import {activeLocales} from '../../constants/config'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'


    const productList = {}

    for(const locale of activeLocales) {

        //Product Query
        const productQuery = gql`
            query getChairs{
                products(locales: [en]) {
                name, series, slug, price,
                testimonials{
                    text,rating,date, author, source
                },
                productVariants{
                    color{hex},colorName, symbol, ean,
                    images(first: 1, locales: [en]){
                    id
                    }
                }
                }
            }
            `
        productList[locale] = await request(url, productQuery)

    }



	if (productList !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(productList));
	} else {
		next();
	}
}