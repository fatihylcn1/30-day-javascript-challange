// ********** Liste içerisindeki son elemana ulasmak veya eleman eklemek ******

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."


let firstChild = document.querySelector("ul#list>li:first-Child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olsuturdugumuz Oge"

// ulDOM.append(liDOM) // En sona ekler
ulDOM.prepend(liDOM)