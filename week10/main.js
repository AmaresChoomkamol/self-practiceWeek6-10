import { CookieUtil } from "./cookieUtil.js"

// console.log(document.cookie)
// document.cookie = `theme=dark;expires=${new Date(2025, 9, 15)}`
// console.log(document.cookie)

// document.cookie = "font-size=14px;max-age=60"
// console.log(document.cookie)

// document.cookie = "theme=light"
// document.cookie = "color=warm"

// console.log(document.cookie)

console.log(CookieUtil.get("theme"))
console.log(CookieUtil.get("color"))

CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
console.log(CookieUtil.get("cartId"))
console.log(document.cookie)

CookieUtil.unset("color")
console.log(document.cookie)

//localStorage
let counter = localStorage.getItem("count")
if (counter === null) localStorage.setItem("count", 1)
else localStorage.setItem("count", ++counter)
alert(counter)
localStorage.removeItem("count")
localStorage.clear()

// let counter = sessionStorage.getItem("count")
// if (counter === null) sessionStorage.setItem("count", 1)
// else sessionStorage.setItem("count", ++counter)
// alert(counter)
sessionStorage.removeItem("count")
sessionStorage.clear()
 