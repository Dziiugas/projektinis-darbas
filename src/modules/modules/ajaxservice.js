const ajaxservice = (city)=>{
    const url = "https://api.meteo.lt/";
    return fetch (`${url}v1/places/${city}/forecasts/long-term`)
        .then(response=>response.json())
        
    }
export default ajaxservice