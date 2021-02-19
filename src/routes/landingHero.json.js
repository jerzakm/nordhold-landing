import { request, gql } from 'graphql-request'
import {activeLocales} from '../constants/config'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
    // is called [slug].json.js
    const url = 'https://api-eu-central-1.graphcms.com/v2/ckl6dc75d119r01xsby95e3ym/master'


    const landingHero = {}

    for(const locale of activeLocales) {

        //Product Query
        const query = gql`
            query getLandingHero{
                landingHeroes(locales:[${locale}]){
                    header, subHeader, text, url, urlText, image(locales:[en]){
                    id
                    }
                }
            }
            `
        landingHero[locale] = await request(url, query)

    }



	if (landingHero !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(landingHero));
	} else {
		next();
	}
}