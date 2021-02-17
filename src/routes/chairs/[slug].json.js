import { request, gql } from 'graphql-request'
import {activeLocales} from '../../constants/config'
const marked = require("marked");

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'

    const { slug } = req.params;

    const productData = {}
    const variableLocales = {}

    for(const locale of activeLocales) {
        variableLocales[locale] = {}

        //Product Query
        const productQuery = gql`
            query MyQuery {
                product(where: {slug: "${slug}"}, locales: [pl]) {
                    id, name, series, slug, price, description,
                testimonials{
                    id, text,rating,date, author, source
                },
                chairSpec{
                    totalHeight, seatHeight, seatWidth, seatDepth, backWidth, backHeight, headrestWidth, headrestHeight, lumbarWidth, lumbarHeight, armrestWidth, armrestLength, adjustableHeadrest, adjustableLumbar,hasFootrest, adjustableBackrestHeight, adjustableBackrestPosition, baseDiameter
                },
                productVariants{
                    id,
                    color{hex},colorName, symbol, ean,
                    images(locales: [en]){
                    id
                    }
                }
                }
            }
            `
        productData[locale] = await request(url, productQuery)
        // TURNS cms markdown to html
        const html = marked(productData[locale].product.description);
        productData[locale].product.description = html

        //Locale Query
        const localeQuery = gql`
            query getLocale{
                localeDictionaries(where: {variable_in:
                [
                    "totalHeight", "seatHeight", "seatWidth", "seatDepth", "backWidth", "backHeight", "headrestWidth", "headrestHeight", "lumbarWidth", "lumbarHeight", "armrestWidth", "armrestLength", "adjustableHeadrest", "adjustableLumbar", "hasFootrest", "adjustableBackrestHeight", "adjustableBackrestPosition", "baseDiameter"
                ]
                }, locales: [${locale}]){
                variable, localizedText
                }
            }
        `
        const localeResponse = await request(url, localeQuery)
        for(const entry of localeResponse.localeDictionaries){
            variableLocales[locale][entry.variable] = entry.localizedText
        }
    }



	if (productData !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({productData, variableLocales}));
	} else {
		next();
	}
}