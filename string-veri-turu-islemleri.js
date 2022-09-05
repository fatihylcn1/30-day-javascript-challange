// ********** String Veri Turu Islemlerı *********

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log( email.length )


// ILK karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName.charAt(1))


// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)


// String icinde istediğimiz bilgiyi aramak ve yerini bulmak -> Search
console.log(email.search("@"))
console.log(email[15])

email.search('olmayan') // olmayan bir şey aratılırsa -1 gelir

// belli bir yere kadar al -> slice: (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1 )
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.'))    // sadece gmail kısmını aldık
)

// bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)


// istediğim bilgi var mi ? -> includes :
email.includes('eohunwqeıowq')  //false
email.includes('@') // true


// istediğim bilgiyle basladi mi ? bitti mi ->  startsWidth, endswitdh :
console.log(
    email.endsWith('kodluyoruz.org')
)


// Ilk harflerini buyuk yapmak
firstName = "FIRSTNAME"
lastName = "LASTNAME"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)