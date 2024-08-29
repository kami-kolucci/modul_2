import WeatherType from './weather-type'

function weatherCheck(): Promise<WeatherType> {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 10) 
        console.log(randomNum);
        if (randomNum >= 0 && randomNum <= 6) {
            resolve(randomNum as WeatherType)
        }   else {
            reject("Weather forecast could not be determined")
        }
    })
   
}


weatherCheck().then((weather: WeatherType) => {
    console.log(`${WeatherType[weather]}`)
})
.catch((error) => {
    console.log('error');
})



  