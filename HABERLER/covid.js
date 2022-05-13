//   DENİZ KARTAL 


const countrysSelectELement = document.querySelector(".country_options");
let currentCountry;
const chartDiv = document.querySelector(".chart_div")


function displayChart(data) {

    const canvas = document.createElement('canvas');
    canvas.setAttribute("id", "myChart");
    chartDiv.appendChild(canvas);
    const dailyCases = data.map((day, index) => {

        if (index) return Math.abs(day.Confirmed - data[index - 1].Confirmed);
        else day.Confirmed;
    });
    const labeldata = data.map((day) => {

    })

    const ctx = document.getElementById('myChart');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(day => day.Date),
            datasets: [{
                label: 'Daily Cases',
                data: dailyCases,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}


function getCovidData(country) {
    fetch("https://api.covid19api.com/total/dayone/country/" + country)
        .then((repsonse) => repsonse.json())
        .then(data => {
            chartDiv.innerHTML = "";
            displayChart(data.slice(data.length - 10, data.length));
        })




}

function getCountries() {

    fetch("https://api.covid19api.com/countries")
        .then((repsonse) => repsonse.json())
        .then(countries => {
            countries.forEach(country => {
                const countryName = country.Country;
                const option = document.createElement("option");
                option.setAttribute("value", countryName);
                option.innerHTML = countryName;
                countrysSelectELement.appendChild(option);

            });


            currentCountry = countrysSelectELement.children[0].value;
            getCovidData(currentCountry);
        })

}
getCountries();
countrysSelectELement.addEventListener("click", () => {
    const currentIndex = countrysSelectELement.selectedIndex;
    const countrySelected = countrysSelectELement.children[currentIndex].value;
    currentCountry = countrySelected;
    getCovidData(countrySelected);

});

// Arama kısmı
let covid = {

    fetchcovid: function (country) {
        fetch("https://corona.lmao.ninja/v2/countries/" + country + "?yesterday=true&strict=true&query")
            .then((repsonse) => repsonse.json())

            .then((data) => data.message == undefined ? this.displayCovid(data) : alert("Lütfen ülke adını ingilizce olarak giriniz !!"));
    },
    displayCovid: function (data) {
        const { country } = data;
        const { cases } = data;
        const { deaths } = data;
        const { todayDeaths } = data;
        const { todayCases } = data;


        document.querySelector(".cases").innerText = " Toplam Vaka Sayısı: " + cases;
        document.querySelector(".country").innerText = "Ülke Adı: " + country;
        document.querySelector(".total-death").innerText = "Toplam Ölüm Sayısı: " + deaths;
        document.querySelector(".today-case").innerText = "Günlük Vaka: " + todayCases;
        document.querySelector(".death").innerText = "Günlük Ölüm : " + todayDeaths;

        if (todayCases == 0) {
            document.querySelector(".today-case").innerText = "Günlük Vaka Sayısı :Henüz girilmedi";
        }
        if (todayDeaths == 0) {
            document.querySelector(".death").innerText = "Günlük Ölüm Sayısı : Henüz girilmedi";
        }
    },
    search: function () {
        this.fetchcovid(document.querySelector(".covid-search").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    covid.search();
});
document.querySelector(".search").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        covid.search();
    }

});
covid.fetchcovid("Belarus");


