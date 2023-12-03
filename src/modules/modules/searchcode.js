import ajaxservice from "./ajaxservice";
const searchcode = ()=>{
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchterm = document.querySelector('.city').value;
    const city = document.querySelector('.city').value;
    let searchresponse;
    ajaxservice(searchterm,city)
    .then(result=>searchresponse=result)
    .then(()=>console.log(searchresponse.forecastTimestamps[0]['airTemperature']))
    .then(()=>document.querySelector('.T').textContent=searchresponse.forecastTimestamps[0]['airTemperature'])
    .then(()=>console.log(searchresponse.forecastTimestamps[0]['forecastTimeUtc']))
    .then(()=>document.querySelector('.L').textContent=searchresponse.forecastTimestamps[0]['forecastTimeUtc'])
    .then(()=>console.log(searchresponse.forecastTimestamps[0]['relativeHumidity']))
    .then(()=>document.querySelector('.A').textContent=searchresponse.forecastTimestamps[0]['relativeHumidity'])
    
})
}



export default searchcode