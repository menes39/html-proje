// DENİZ KARTAL // 

let haber = {
    apiKey: 'apikey 5haKhVGDPDlumCW4poUQMy:4hSGB3dOjjmUFK7DjaQAwf',
    fetchHaber: function () {
        fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general&apiKey=0fQOT6QH9Tr6ibUwCuAjpN:7efySjuSyHOQ5vgEl1pnk7")
            .then((response) => response.json())
            .then((data) => this.displayHaber(data))


    },
    displayHaber: function (data) {
        const { description } = data.result[0];
        const { image } = data.result[0];
        const { url } = data.result[0];
        const { source } = data.result[0];
        document.getElementById("description").innerText = description;
        document.getElementById("source").innerText = source;
        document.getElementById("image").src = image;
        document.getElementById("url").href = url;
    },



};


let haber2 = {
    apiKey: 'apikey 5haKhVGDPDlumCW4poUQMy:4hSGB3dOjjmUFK7DjaQAwf',
    fetchHaber: function () {
        fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general&apiKey=0fQOT6QH9Tr6ibUwCuAjpN:7efySjuSyHOQ5vgEl1pnk7")
            .then((response) => response.json())
            .then((data) => this.displayHaber(data))


    },
    displayHaber: function (data) {
        const { description } = data.result[1];
        const { image } = data.result[1];
        const { url } = data.result[1];
        const { source } = data.result[1];
        document.getElementById("description1").innerText = description;
        document.getElementById("source1").innerText = source;
        document.getElementById("image1").src = image;
        document.getElementById("url1").href = url;
    },



};
let haber3 = {
    apiKey: 'apikey 5haKhVGDPDlumCW4poUQMy:4hSGB3dOjjmUFK7DjaQAwf',
    fetchHaber: function () {
        fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general&apiKey=0fQOT6QH9Tr6ibUwCuAjpN:7efySjuSyHOQ5vgEl1pnk7")
            .then((response) => response.json())
            .then((data) => this.displayHaber(data))


    },
    displayHaber: function (data) {
        const { description } = data.result[2];
        const { image } = data.result[2];
        const { url } = data.result[2];
        const { source } = data.result[2];
        document.getElementById("description2").innerText = description;
        document.getElementById("source2").innerText = source;
        document.getElementById("image2").src = image;
        document.getElementById("url2").href = url;
    },



};
let haber4 = {
    apiKey: 'apikey 5haKhVGDPDlumCW4poUQMy:4hSGB3dOjjmUFK7DjaQAwf',
    fetchHaber: function () {
        fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general&apiKey=0fQOT6QH9Tr6ibUwCuAjpN:7efySjuSyHOQ5vgEl1pnk7")
            .then((response) => response.json())
            .then((data) => this.displayHaber(data))


    },
    displayHaber: function (data) {
        const { description } = data.result[3];
        const { image } = data.result[3];
        const { url } = data.result[3];
        const { source } = data.result[3];
        document.getElementById("description3").innerText = description;
        document.getElementById("source3").innerText = source;
        document.getElementById("image3").src = image;
        document.getElementById("url3").href = url;
    },



};

haber.fetchHaber();
haber2.fetchHaber();
haber3.fetchHaber();
haber4.fetchHaber();