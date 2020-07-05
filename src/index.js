import "./x.scss"
import "./y.less"
import "./z.styl"
import png from "./assets/1.jpg"

const div = document.getElementById("app")
console.log(div)
console.log(png)
div.innerHTML = `
    <img src="${png}">
`;
const button = document.createElement("button")
button.innerText="懒加载"
button.onclick=()=>{
    const promise = import("./lazy.js")
    promise.then((module)=>{
        module.default()
    },()=>{

    })
}
div.appendChild(button)