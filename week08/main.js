// //1. query an element node that has id "soup"

// // let getID = document.getElementById("soup")
// // console.log(getID);

// //2. query an element nodes that have class "soup"

// let getClass = document.querySelector(".soup")
// console.log(getClass);

// //3. query any element nodes that have class "meat"

// let getAnyClass = document.querySelectorAll(".meat")
// console.log(getAnyClass);

// // document.getElementById(idValue) //return the first object with ID value
// // document.querySelector(cssSelector) //return the first element that matches selector
// // document.querySelectorAll(cssSelector) //return all elements that matches selector 
// // (NodeList - Arry like (can use for each, if you want to use array functions, 
// // you need to convert array like to array))

// //1. query an element node that has id "soup"
// const soupIdElement = document.getElementById("soup")
// console.log(soupIdElement) //<ul id="soup">

// const soupSelectorElement = document.querySelector("#soup")
// console.log(soupSelectorElement) //<ul id="soup">

// //get NodeList collection
// const soupSelectorAllElement = document.querySelectorAll("#soup")
// console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
// console.log(soupSelectorAllElement.length) //1
// console.log(soupSelectorAllElement[0]) //<ul id="soup">
// soupSelectorAllElement.forEach((ele) => console.log(ele)) //<ul id="soup">

// //2. query an element nodes that have class "vegan"
// const veganElements = document.querySelectorAll(".vegan")
// console.log(veganElements) //NodeList(3) [ li.vegan, li.vegan, li.vegan ]
// //3. query any element nodes that have class "meat"
// const meatElements = document.querySelectorAll(".meat")
// console.log(meatElements) //NodeList(4) [ li.meat, li.meat, li.meat, li.meat ]
// //4.
// const firstVeganElement = document.querySelector(".vegan")
// console.log(firstVeganElement) //<li class="vegan">Vegetable Rolls</li>
// //5.
// const firstMeatElement = document.querySelector(".meat")
// console.log(firstMeatElement) //<li class="meat">Chicken Wings</li>
 
// // access each meat element
// // let beefSoupElement;
// //  meatElements.forEach((ele) => {
// //     const meatElement = ele
// //     if(ele.innerHTML === "Beef Soup")
// //         beefSoupElement = meatElement
// //     //find meat element text value equals to "Beef Soup" <li class="meat">Beef Soup</li> and store in variable;
// // })

// // console.log(beefSoupElement);

// // อีกแบบของ access each meat element
// let beefSoupElement
// meatElements.forEach((ele) => {
//   const meatElement = ele
//   //find meat element that has text value equals to "Beef Soup" <li class="meat">Beef Soup</li> and store in variable beefSoupElement
//   if (meatElement.textContent.trim().includes("Beef Soup")) {
//     beefSoupElement = meatElement
//     console.log(beefSoupElement)
//   }
//   console.log(meatElement)
// })

// let appetizer = document.getElementById("appetizer")
// let children = appetizer.firstElementChild
// while (children){
//     console.log(children);
//     children = children.nextElementSibling
// }

//traverse all children nodes of <ul id="appetizer"> by using sibling relationship
/* <ul id="appetizer">
        <li class="vegan">Vegetable Rolls</li>
        <li class="meat">Chicken Wings</li>
        <li class="meat">Tuna Sandwich</li>
      </ul> */
// const firstUlElement = document.getElementById("appetizer") //<ul id="appetizer">
// const firstLiElement = document.querySelector("ul#appetizer>li.vegan") //  <li class="vegan">Vegetable Rolls</li>
// console.log(firstLiElement)

// //visit all nodes siblings under <ul id="appetizer">
// let currentNode = firstLiElement
// while (currentNode != null) {
//   console.log(currentNode)
//   currentNode = currentNode.nextElementSibling
// }
 
// //getElementsByName
// let getName = document.getElementsByName("fname")
// console.log(getName); //NodeList(2) [input#fname, input#fullname]


//getElementsByTagName - tag name (HTMLCollection)
// let getTag = document.getElementsByTagName("li")
// console.log(getTag); //HTMLCollection(7) [li.vegan, li.meat, li.meat, li.meat, li.vegan, li.meat, li.vegan]
//HTMLCollection does not implement forEach, you must convert to array before you use array functions

// liElements.forEach((ele) => console.log(ele)); //error:getTag.forEach is not a function

//using Array.from to convert HTMLCollection to array
// const liElementsArray = Array.from(getTag)
// liElementsArray.forEach((ele) => console.log(ele))

// //getElementByClassName - class name (HTMLCollection)
// let getElement = document.getElementsByClassName("vegan")
// console.log(getElement); //HTMLCollection(3) [li.vegan, li.vegan, li.vegan]

// //Single Node - getElementById, querySelector
// // Collection nodes (Array-like (NodeList | HTMLCollection)) - 
// // querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName

// console.log(document.forms[0]);


// <ul id="soup">
//         <li class="meat">Spicy Bacon-Corn Soup</li>
//         <!-- 1. remove Vegetable Soup -->
//         <li class="vegan">Vegetable Soup</li>
//         <!-- 2. insertBefore -->
//         <!-- <li class="vegan">Cabbage Soup</li> -->
//          <!-- 3. replace Beef Soup with Pork Soup -->
//         <li class="meat">Beef Soup</li>
//         <li class="vegan">Coconut Soup</li>
//       </ul>

// // ---------------------- 1. remove Vegetable Soup
// // 1. find parent element
// const ulParent = document.getElementById("soup")
// console.log(ulParent);
// // 2. get its children
// const ulChildren = ulParent.children
// let vegetElement = null
// // 3. find element node that satifies condition "Vegetable Soup"
// Array.from(ulChildren).forEach((liEle) =>{
//     if(liEle.textContext.trim()==="Vegetable Soup") 
//         vegetElement = liEle
// })
// // 4. remove element 3.
// ulParent.removeChild(vegetElement)

// // ------------------- 2. insertBefore 

// // 1. find parent element
// const ulParent = document.getElementById("soup")
// console.log(ulParent);
// // 2. get its children
// const newLiElement = document.createElement("li")
// newLiElement.textContent = "Cabbage Soup"
// newLiElement.setAttribute("class", "vegan")
// // 3. find reference node
// let beefElement = null
// const liChildren = ulParent.children
// Array.from (liChildren).forEach((ele) => {
//     if (ele.textContent.trim() === "Beef Soup")
//         beefElement = ele
// })
// //  4. insertBefore
// ulParent.insertBefore(newLiElement, beefElement)

// ---------------3. replace Beef Soup with Pork Soup

//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)

//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Pork Soup"
newLiElement.setAttribute("class", "meat")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. replace
ulParent.replaceChild(newLiElement, beefElement)

