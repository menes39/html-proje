// Feyza Alnıaçık



                // hesap makinesi js kodları başlangıcı

// HTML sayfasında gerekli elementlere ulaşılarak seçildi.
let secim = document.querySelector("#box").children;
let sonuc = document.querySelector("#sonuc");
let clean = document.querySelector("#clean");
let hesap = document.querySelector("#hesapla");

// "temizle" ve "hesapla" butonu için ayrı dinleyiciler tanımlandı.
clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);

// Diğer tüm tuşlar için dinleyiciler tanımlandı.
for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) { // "temizle" ve "hesapla" butonları hariç tutuldu.
        secim[i].addEventListener("click", yazdir);
    }
}

// "eval" ile hesaplama yapıldı.
function hesapla() {
    sonuc.innerText = eval(sonuc.innerText);
    if (eval(sonuc.innerText.length) > 8) { // Çıkan sonuç 8 basamaktan büyükse 8 basamak olarak girdirildi.
        sonuc.innerText = eval(sonuc.innerText).toPrecision(8);
    }
}

// "temizle" butonunun işlevi girildi.
function temizle() {
    sonuc.innerText = " ";
}

// Tıklanan tuşlar sonuç ekranını atandı.
function yazdir() {
    if (sonuc.innerText.length < 8) // 8 basamaktan fazla olması engellendi. 
        sonuc.innerText = sonuc.innerText + this.innerText;
}

                // hesap makinesi js kodları sonu




                // sayac js kodları başlangıcı

let counter = document.getElementById('counter');
let incr = document.querySelector('.incr');
let decr = document.querySelector('.decr');

let count = 0;
incr.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});
decr.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});
function updateDisplay(){
    counter.innerHTML = count;
};

// sayac js kodları sonu

function Kronometre(Id, Saniye){
  
    this.gercekSaniye = Saniye || 0;
    this.saniye = Saniye || 0;
    this.interval;
    
    this.baslat = function(){
      this.sayacElem = document.getElementById(Id);
      if ( !this.interval ){
        this.sayac();
        this.interval = setInterval(this.sayac.bind(this), 1000);
      }
    };
    
    this.sayac = function(){
      
      var toplamSaniye = this.saniye;
      var saat = parseInt( toplamSaniye / 3600 ) % 24;
      var dakika = parseInt( toplamSaniye / 60 ) % 60;
      var saniye = toplamSaniye % 60;
      
      this.sayacElem.innerHTML = (saat < 10 ? "0" + saat : saat) + ":" + (dakika < 10 ? "0" + dakika : dakika) + ":" + (saniye  < 10 ? "0" + saniye : saniye);
      
      this.saniye += 1;
      
    };
    
    this.duraklat = function(){
      clearInterval(this.interval);
      this.interval = null;
    };
    
    this.bitir = function(){
      this.duraklat();
      this.sayacElem.innerHTML = '';
      this.saniye = this.gercekSaniye;
    };
    
  }
  
  var Kronometre = new Kronometre('sayac');




                // asal sayı js kodları başlangıcı
var text="";
var sayi=0;
 
function asalHesapla()
{
var sayac=0;
sayi=document.getElementById('sayi1').value;
for(i=2; i<sayi; i++)
 {
	if(sayi%i==0)
	{
	sayac++;
	}
 }
	if(sayac==0)
	{
	text="Asal";
	}
	else
	{
	text="Asal değil.<br/> 1 ve Kendisi hariç <strong>"+sayac+"</strong> adet böleni var";
	}
 document.getElementById('demo').innerHTML = text;
 }

                // asal sayı js kodları sonu




                // dikdörtgen alan/çevre js kodları başlangı
function Hesapla1(){
    var kk=document.getElementById("kisa").value;
    var uk=document.getElementById("uzun").value;
    kk=Number(kk);
    uk=Number(uk);
    var dAlan=kk*uk;
    var dCevre=2*(kk+uk);
    document.getElementById("cevre").innerHTML="Çevre : "+dCevre;
    document.getElementById("alan").innerHTML="Alan : "+dAlan;
}
                
var hspBtn=document.getElementById("btn");
btn.onclick=Hesapla1;

                // dikdörtgen alan/çevre js kodları başlangıcı



// saat js başı
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;
    },1000
);
// saat js sonu



var vize=document.getElementById("txtVize");
var final=document.getElementById("txtFinal");
var btnHesap=document.getElementById("hesap");
	
btnHesap.onclick=function(){
	var durum="";
	var vizeNotu=Number(vize.value);
	var finalNotu=Number(final.value);
	var ortalama=(vizeNotu*0.4)+(finalNotu*0.6);
	if(ortalama>=50 && finalNotu>=40)
	{
		durum="GEÇTİNİZ";
	}
	else if (ortalama>=50 && finalNotu<40)
	{
		durum="Final notu 40'tan küçük! KALDINIZ";
	}
    else if (ortalama>100)
    {
        durum="HATALI NOT GİRDİNİZ."
    }
	else
	{
		durum="Ortalamanız 50'den küçük! KALDINIZ. "
	}
	document.getElementById("lblSonuc").innerHTML="Ortalamanız : "+ortalama+"<BR>"+durum;
}

// hipotenüs hesaplama js kodu başı
function Hesapla()
{
	var k1=Number(document.getElementById("txtKenar1").value);
	var k2=Number(document.getElementById("txtKenar2").value);
	var hipotenus=Math.sqrt((k1*k1)+(k2*k2));
	document.getElementById("sonuc1").innerHTML="Hipotenüs : "+hipotenus;
}
var hesapBtn=document.getElementById("buton");
hesapBtn.onclick=Hesapla;
// hipotenüs hesaplama js kodu sonu

