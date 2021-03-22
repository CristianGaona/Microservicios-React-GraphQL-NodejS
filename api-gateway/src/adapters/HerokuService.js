import got from "got";
const HEROKU_SERVICE_URI = "https://heroku-demo-cris.herokuapp.com";

export default class HerokuService{
    static async fetchHeroku(){
        const body = await got.get(`${HEROKU_SERVICE_URI}/api/v1/users`).json();
        //console.info(body)
        return body;
    }
}