import  HerokuService from "#root/adapters/HerokuService";

const HerokuResolver = async () =>{
    return await HerokuService.fetchHeroku();

    
};

export default HerokuResolver;