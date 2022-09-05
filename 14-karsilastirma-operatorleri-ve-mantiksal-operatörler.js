// ******** Karsilastirma Operatorleri ve Mantiksal Operatorler *****

let price = "0"
let user = "guest"


// == Eşitse
console.log ("== :", price == 1) 
console.log ("==:", price == 100)



// === Hem değeri hem de türü eşitse
console.log("===", price === 1 )
console.log("===", price === 100 )


// != eşit Değilse
console.log(user !=  "guest")


// < Küçükse
console.log("price < 100", price < 100)



// <= küçük veya esitse
console.log("price <= 100", price <= 100)



// > büyükse
console.log("price > 200", price > 200)



// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)



// && ve
price = 0
console.log ( price > 0  && user != "guest") //false


// || veya
console.log ( price > 0 || user != "guest") // true


// ! degil (tersi)
user = "guest"
price = 1
console.log ( price > 0  && !user == "guest") // false