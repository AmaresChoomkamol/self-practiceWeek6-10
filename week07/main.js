// const html1 = document.documentElement
// const firstNode = document.firstChild
// const firstElementChild = document.firstElementChild
// const lastNode = document.lastChild
// const lastElementChild = document.lastElementChild

// console.log(document);
// console.log(html1);
// console.log(firstNode);
// console.log(firstElementChild);
// console.log(lastNode);
// console.log(lastElementChild);

// const body = document.body
// if (body.nodeType === Node.ELEMENT_NODE){
//     alert("body is an element")
// }

// console.log(document.body)
// console.log(document.body.nodeName)
// console.log(document.body.nodeType)
// console.log(document.body.nodeValue)

// if (document.body.nodeType === Node.ELEMENT_NODE)
//   console.log(`body is an element node type`)
// if (document.body.nodeType === Node.ATTRIBUTE_NODE)
//   console.log(`body is an attribute node type`)
// if (document.body.nodeType === Node.TEXT_NODE)
//   console.log(`body is a text node type`)

// const divElement = document.getElementById('exampleElement')

// // div childNode
// const divChild = divElement.childNodes //return NodeList data type
// console.log(`length: ${divElement.childNodes.length}`);
// divChild.forEach((child) => {
//     console.log(child.nodeName);
//     console.log(child.nodeType);
//     console.log(child.nodeValue);
// })

// // div children
// const divChildren = divElement.children //return HTMLCollection data type
// console.log(`length: ${divElement.children.length}`);
// Array.from(divChildren).forEach((child) => {
//     console.log(child.nodeName);
//     console.log(child.nodeType);
//     console.log(child.nodeValue);
// })

// const x = document.createElement("p") // <p></p>

// const body = document.body

// body.appendChild(x)
// const y = "Hello"
// x.append(y)

// create <p>INT141</p> as a child of <div id="subject">

// 1. create <p> element
// const divElement = document.getElementById("subject")
// const pElement = document.createElement("p")

// // 1.5 create attribute id
// // const idAttr = document.createAttribute('id')
// // idAttr.value = "int141"
// // pElement.setAttributeNode(idAttr)
// pElement.setAttribute("id","int141")
// pElement.setAttribute("style","color:red")
// pElement.setAttribute("name","core")


// // 2. create text node then 3. append to <p> child
// // const pText = document.createTextNode("INT141")
// // x.appendChild(pText)
// pElement.textContent = "INT141"

// // 4. append <p> with text node to div element
// divElement.appendChild(pElement)


// //get attribute value of id
// console.log(pElement.getAttribute('id')); //int141
// console.log(pElement.attributes[0]);
// console.log(pElement.attributes[0].ownerElement);

// const pAttributes = pElement.attributes //get all attributes
// for(let i = 0;i<pAttributes.length;i++){
//     const name = pAttributes[i].name // get attribute name
//     const value = pAttributes[i].value // get attribute value
//     if (pAttributes[i].name === "id")console.log(name,value);
// }


// let el = document.getElementById("demo")
//  console.log(el.innerHTML)
//  // "<b>Hello</b> world“(ตัวหนาจริง)

//  console.log(el.innerText)
//  // "Hello \n world" (ไม่มี hidden)

//  console.log(el.textContent)
//  // "Hello hidden world"

// const pElement = document.createElement('p')
// // divElement.innerHTML("<i>Sample Content</i>") // ใช้สำหรับมี tag html 
// // divElement.textContent("<i>Sample Content</i>") // ใช้สำหรับมีแค่ text ล้วน
// pElement.innerHTML = "<i>Sample Content</i>"
// document.body.appendChild(pElement)


// const ULelement = document.getElementById("drink")
// const lielement = ULelement.childNodes

// console.log(lielement);

// for(let i = 0; i< lielement.length;i++){
//     console.log(lielement.item(i));
// }

let el = document.getElementById("drink")
const allDrinks = el.children //child element
Array.from(allDrinks).forEach((drink) => console.log(drink))

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)

console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)
 