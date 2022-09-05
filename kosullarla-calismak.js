// ******** Kosullarla Calismak ******

let userName = prompt("Kullanici Adinizi Giriniz:")
//  eğer kullanici bilgisi varsa ekrana ismini yazdir
// eger (userName.length > 0) {console.log(userName)} degilse {console.log("bilgi yok")}
// if (userName.length > 0) {console.log(userName)} else {console.log("bilgi yok")}

if (userName) {   // if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz ${userName}`)
} else {
    console.log("Bilgi Yok")
}