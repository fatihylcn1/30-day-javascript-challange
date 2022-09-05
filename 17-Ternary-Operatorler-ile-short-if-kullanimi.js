// ******** Ternary operator ile short if kullanimi *******

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunmadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa


info.innerHTML = `${userName.length ? userName : "Kullanici Bilginiz Bulunamadi :("}`