//  ****** number  *****
//number veri turu tanimlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
     "KDV Oran,:",  tax, 
     "KDV Tutari",  priceTax, 
     "Fiyat:", total
    )

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constractor ıcıne bilgi gonderildi:", Number("111"))


// arttirma ve azaltma islemleri:


let counter = 320
counter = counter + 1   // uzun yöntem
counter += 1;
counter ++;     // 1 Arttır
console.log(counter)

counter --;     // 1 Azalt
counter -= 1;
console.log(counter)

counter *= 10;  // 10 ile çarp
console.log(counter)

counter /= 2;  // 2 ile böl
console.log(counter)



// islem onceligi:


console.log( 2 + 3 * 10)    //50 ????????
console.log( (2 + 3) * 10)  //50 ????????


// mod(kalan) alma %:
// sayi tek mi cift mi?:

console.log( 17 % 2)     // 0 ise cift, 1 ise tek

// 8 urun ala koliye tum urunler sigiyor mu ?

console.log("Koli Kalan Urun Orngei:",  18 % 8)


// us alma **:

console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)


// asagi yuvarlama islemi -> Math.floor:

console.log("Asagi Yuvarlama:",  Math.floor(1.9) )   // -> 1


//yukari yuvarlama islemi -> Math.ceil:

console.log("Yukari Yuvarlama:",  Math.ceil(1.3) )  // -> 2



// yakina yuvarlama islemi -> Math.round:

console.log("Yakina Yuvarlama:", Math.round(1.5) ) // 1.4 -> 1 , 1.5 -> 2

