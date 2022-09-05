//      Let ve const ile Değişken tanımlama:


// var ile değişken tanımlamak:
    //var serverName = "Kodluyoruz.org"
    //console.log(serverName)
 
// let ile değişkeni boş tanımlamak:
 let serverName;
 console.log(serverName)
 
// let ile değişkene bilgi atamak:
 serverName = "https://kodluyoruz.org"
 console.log(serverName)
// let ile değişkene bilgi atayarak tanımlamak:
 let password = "1234";
 console.log(password)
 

// Değişken ataması yapmadan önce kullanmaya çalışmak;
/*
**************HATALI KULLANIM****************
console.log(fullName)
let fullName = "Hakan Yalcinkaya";
*/

let fullName = "Hakan Yalcinkaya";

// let ile tanımlanan değişkeni içindeki bilgiyi degistirmek:
fullName = "Lorem Ipsum Dolo"
console.log(fullName)

// birleştirme veya ekleme işlemi 

fullName + "Yeni eklenen bilgi"
console.log(fullName + " Test Bilgisi")  // ekle ve göster ama değişken eklemedik

fullName = fullName + " Yeni bilgi"
fullName = "2.Bilgi :" + fullName 
console.log(fullName)


fullName = "Sifirlandi"
fullName += " ve yeni bilgi eklendi"
console.log(fullName)


// const ile değişkeni boş tanımlamaya çalışmak :
 //const serverPassword;     //sadece değişken tanımlandi ama içi boş
 
// const ile değişkeni tanımlamak:

const SERVER_PASSWORD = "wej*qjwqejopwqewqeopğkwqoe"
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD)

// NOT: CONST DEĞİŞMEZ TEK BİR ATAMA YAPARIZ SABİT DEĞİŞKEN
// LET İSE SÜREKLİ DEĞİŞTİREBİLECEĞİMİZ BİR DEĞİŞKEN