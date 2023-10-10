//zad 1 
let x = 1;
let y = 2 
let z = 3;
let a = 4;
let b = 5;
let c = x + y + z + a + b
document.write(c + "\n") 
alert(c)
//zad 2 
a = 3 
b = 9 
c = 10
let d = (a+b+c)/3
alert(d)
document.write(d + "\n")
//zad 3 
a = 5
b = 8
document.write(a + "\n")

document.write(b + "\n")

document.write(a + b+ "\n");
document.write(a - b+ "\n");
document.write(a * b + "\n");
document.write(a / b );
//zad 4 
a = Math.sqrt(4)
alert(a + "\n");
//zad 5 
let okok = prompt("Podaj BOK >:)")
alert("Pole kwadratu to: "+ okok * okok)
//zad 6

let pi = Math.PI;
let promien = 10
let srednica = promien * promien
let pole = pi * srednica
alert(pole)
//zad 7
let obw = 2 * pi * promien
alert(obw)
//zad 8
let benzyna = prompt("podaj cene benzyny")
let droga = 360
let spalanie = 0.08
let cena = spalanie * droga * benzyna
alert("cena paliwa" + "\n" + cena)
//zad 9
let benzyna1 = prompt("podaj cene benzyny")
let droga1 = prompt("podaj droge")
let spalanie1 = prompt("ile litrow spala?")
spalanie2 = spalanie1 / 100
let cena1 = spalanie2 * droga1 * benzyna1
alert("cena paliwa" + "\n" + cena1)
//zad 10

let kwota = prompt("ile masz hajsu: ")
let oferta = 0.08
 zysk = kwota * oferta
calosc = kwota + zysk
alert(calosc)

//zad 11

let produkt = prompt("podaj cene produktu: ")
let podatek = 0.23

 aaa = podatek * produkt
bbb = aaa + produkt 
alert(bbb)

//zad 12
let rok = 2023
let trok = prompt("w ktorym roku sie urodziles: ")
alert(rok - trok)