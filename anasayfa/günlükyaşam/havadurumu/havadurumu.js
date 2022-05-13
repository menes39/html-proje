//Deniz KARTAL

let weather = {
    apiKey: "df102354eee0be04f578070d5b06317b",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Hava durumu " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Nem" + humidity + "%";
        document.querySelector(".wind").innerText = "Rüzgar Hızı" + speed + "km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".weather-search").value);

    }

};
//!!

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

});
weather.fetchWeather("İstanbul");