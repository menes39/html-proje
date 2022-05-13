//Feyza Alnıaçık

const liste =[
            "zaratma/zar1.png",
            "zaratma/zar2.gif",
            "zaratma/zar3.gif",
            "zaratma/zar4.gif",
            "zaratma/zar5.gif",
            "zaratma/zar6.gif"
            ]
 
        document.querySelector("#zarAt").onclick=function(){
            let uzunluk = liste.length;
            let zar1 = liste[Math.floor(Math.random()*uzunluk)];
            let zar2 = liste[Math.floor(Math.random()*uzunluk)];
            
            document.querySelectorAll(".zar")[0].src=zar1;
            document.querySelectorAll(".zar")[1].src=zar2;
        }
 