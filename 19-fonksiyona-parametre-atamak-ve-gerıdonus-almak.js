// ******** Fonksiyonlara Parametreler Atamak Ve Fonksiyondan Gerıdonus Almak *********

// Temel Kurallar:
//1: Bir Fonksiyon Bir veya Birden fazla parametre alabilir veya hic almayabilir
//2: Bir fonksiyon disari bilgi gönderebilir(return) veya göndermeyebilir
//3: Mumkunse fonksiyonun bağımlılıklarını azaltmak gerekir

 let firsName = "Lorem"

function greetings(firsName="", lastName="") {   // default parametre aliyor
     // console.log(`Merhaba ${firsName ? firsName : ""}`)
     console.log(`Merhaba ${firsName}`)
     console.log(`Merhaba ${firsName} ${lastName}`)
    } 

console.log(firsName) //Degisken
greetings() // Fonksiyona parametre gondermedik ??
greetings("Parametre")

function greetings2(firsName, lastName) {
    let info = `Merhaba ${firsName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ????
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

lethtmlInfo = `<span style="color:red">Color Redddddd</span>`

domIdWriteInfo('greeting', lethtmlInfo)