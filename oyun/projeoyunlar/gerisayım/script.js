//Mehmet enes korkmaz
const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const bitis = new Date(2023, 9, 29, 0, 00, 00);

  const simdi = new Date();

  const diff = bitis - simdi;

  const gunler = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const saatler = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const dakikalar = Math.floor((diff / (1000 * 60)) % 60) + "";
  const saniyeler = Math.floor((diff / 1000) % 60) + "";

  countdown.innerHTML = `
    <div data-content="gunler">${gunler.length === 1 ? `0${gunler}` : gunler}</div>
    <div data-content="saatler">${saatler.length === 1 ? `0${saatler}` : saatler}</div>
    <div data-content="dakikalar">${
      dakikalar.length === 1 ? `0${dakikalar}` : dakikalar
    }</div>
    <div data-content="saniyeler">${
      saniyeler.length === 1 ? `0${saniyeler}` : saniyeler
    }</div>
`;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Here We Go!!!</h1>";
  }

  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);

    const divs = document.querySelectorAll(".countdown div");

    divs.forEach((div) => {
      div.innerHTML = "00";
    });
  });
}, 1000);
