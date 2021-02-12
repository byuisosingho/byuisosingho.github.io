const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const options = {weekday: 'long', month: 'long',day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);


fetch('https://api.openweathermap.org/data/2.5/forecast?q=preston&units=imperial&appid=3173e41ddba4b1687393846173784698')
    .then((data) => data.json())
    .then((preston) => generateHtml(preston))
   
const generateHtml = (data) =>{
    console.log(data)
    var temp = Math.floor(data.list[0].main.temp)
    var temp1 = Math.floor(data.list[5].main.temp)
    var temp2 = Math.floor(data.list[13].main.temp)
    var temp3 = Math.floor(data.list[21].main.temp)
    var temp4 = Math.floor(data.list[29].main.temp)
    var temp5 = Math.floor(data.list[37].main.temp)
    var icon = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    const html = `
        <img src=${icon}></img>     
        <h3>Temp: ${temp}&#8457 </h3>
        <h3>Currently: ${data.list[0].weather[0].main}</h3>
        <h3>Humidity: ${data.list[0].main.humidity}%</h3>
        <h3>WindSpeed: ${data.list[0].wind.speed} mhp</h3>`
    const currentSec = document.querySelector('.current')
    currentSec.innerHTML = html
    const html2=`
        <h2>5 Day Forecast</h2>       
        <tr>
            <th><img src="https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png" alt= "weather icon"></img></th>
            <th><img src="https://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png" alt= "weather icon"></img></th>
            <th><img src="https://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png" alt= "weather icon"></img></th>
            <th><img src="https://openweathermap.org/img/w/${data.list[29].weather[0].icon}.png" alt= "weather icon"></img></th>
            <th><img src="https://openweathermap.org/img/w/${data.list[37].weather[0].icon}.png" alt= "weather icon"></img></th>
        </tr>
        <tr>
            <th>${temp1}&#8457</th>
            <th>${temp2}&#8457</th>
            <th>${temp3}&#8457</th>
            <th>${temp4}&#8457</th>
            <th>${temp5}&#8457</th>
        </tr>`
    const forecast = document.querySelector('.forecast')
    forecast.innerHTML = html2

}   
