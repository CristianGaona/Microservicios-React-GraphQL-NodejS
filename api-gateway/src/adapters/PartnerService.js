import got from "got";
const PARTNER_SERVICE_URI = "http://192.168.1.108:8069/api";

const httpheaders = {
    'access_token': 'access_token_32214da9c5063b4ab6b8b754d6be626da74c3238'
}

export default class PartnerService{
    
    static async fetchPartner(){
        const body = await got.get(`${PARTNER_SERVICE_URI}/res.partner`,{headers:httpheaders}).json();
        //console.info("holas")
        //console.info(body.data);
        
        return body.data;
    }
}