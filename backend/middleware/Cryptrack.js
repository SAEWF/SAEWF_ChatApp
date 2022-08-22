import fetch from 'node-fetch';
import { APIKey, APISecret, username } from '../config/Cryptrack.js';
export const addDigitalStamp = async (req, res, next) => {
    try {
        const url = 'http://localhost:8080/send';
        let jsonBody = {...req.body, msg: req.body.content, content: ''};
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
        console.log(res);
        next();
    } catch (err) {
        console.log(err);
    }
};
