import fetch from 'node-fetch';
import { APIKey, APISecret, username } from '../config/Cryptrack.js';
export const addDigitalStamp = async (req, res, next) => {
    try {
        console.log('shubhank');
        // const url = 'https://cryptrack-saewf.herokuapp.com/send';
        const url = 'http://localhost:3001/send'
        let jsonBody = { ...req.body, msg: req.body.content, content: '' };
        console.log('jaa raha hai : ', jsonBody);
        const res = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: APIKey,
                apisecret: APISecret,
                username: username,
            },
            body: JSON.stringify(jsonBody)
        });
        console.log('res = ', res);
        next();
    } catch (err) {
        console.log(err);
    }
};
