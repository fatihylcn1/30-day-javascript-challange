// DOM Etkinlikleriyle Calismak

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
   console.log("etkinlik denetlendi")
   this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}