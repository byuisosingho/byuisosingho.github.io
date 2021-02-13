fetch('https://api.openweathermap.org/data/2.5/forecast?q=preston&units=imperial&appid=3173e41ddba4b1687393846173784698')
    .then((data) => data.json())
    .then((preston) => generateHtml2(preston))

const generateHtml2 = (data) =>{
    console.log(data)
    var temp = (data.list[0].main.temp)
    var windspeed = (data.list[0].wind.speed)
    var windchill = 37.74 + (0.6215*temp) - (35.75*(windspeed**0.16))+(0.4275*temp*(windspeed**0.16))
    var floor_wc = Math.floor(windchill)
    var icon = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    const html = `
    <img src=${icon}></img>     
    <h3>Temp: ${temp}&#8457 </h3>
    <h3>Currently: ${data.list[0].weather[0].main}</h3>
    <h3>Humidity: ${data.list[0].main.humidity}%</h3>
    <h3>WindSpeed: ${data.list[0].wind.speed} mhp</h3>
    <h3>Wind Chill: ${floor_wc} F</h3>`
const display_windchill = document.querySelector('.current')
display_windchill.innerHTML = html
}
