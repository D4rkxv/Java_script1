// if (confirm("podejmij decyzje!")){
//     alert("wybrano: OK");

// }else {
//     alert("Wybrano: anuluj")
// }

// var imie = prompt("podaj imie", "uszatek")
// alert("twoje imie" + " " +  imie)

// function myFunction1(){
//     alert(document.getElementById("aLERT").value)

// }
// console.log("Hello World!")
// let imie1 = 'ok'
// console.log(imie1)

// let num = 12
// let num2 = 122

// alert(num + num2)

// const liczba = 36.60

// let x=99
// let zmienna='sprawdzam'
// console.log(typeof x)
// console.log(typeof zmienna)

// alert(`x to ${typeof x} a zmienna to ${typeof zmienna}`)

// let a = 'lubie '
// let b = 'male '
// let c = 'kotki '
// let d = 'w ' 
// let e = 'piwnicy'
// console.log(a + b + c + d + e )

// let okok = "okok"
// alert(okok)
//  okok = 1
//  alert(okok)

//  const ok = 12
//  const ko = 23
//  const ll = 332
//  const plo = 1

//  alert(ok + ko + ll + plo)
//  alert(ok - ko - ll - plo)
//  alert(ok * ko * ll * plo)
//  alert(ok / ko / ll / plo)
function calculator(){
 var licz = parseInt(prompt("podaj liczbe", ""))
 var licz1 = parseInt(prompt("podaj 2 liczbe", ""))
 var znak = prompt("jaki znak", "")
 if(znak == '*'){
    alert(licz * licz1)
 }else if(znak == '+'){
    alert(licz + licz1 )
 }else if(znak == '-'){
    alert( licz - licz1)
 }else if(znak == '^'){
    alert(licz * licz + licz1 * licz1)
 }else if(znak == '%'){
    alert( licz % licz1)
 }else if(znak !== '*', '-', '+', '^', '%'){
    console.error("zły znak");
    alert("zły znak!!")
 }
}
//  const car1 = {name:'Audi', model:'a4'}
//  const car2 = {name:'Audi', model:'a4'}
//  const car3 = {name:'Audi', model:'a4'}

//  console.table([car1, car2, car3])