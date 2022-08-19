let style = document.createElement("style");
style.id = "styleId";
let div = document.createElement("div");
div.id = "container";
let divTop = div.appendChild(document.createElement("div"));
divTop.id = "containerTop";
let p = divTop.appendChild(document.createElement("p"));
p.id = "containerTopP";
p.appendChild(document.createTextNode("To Do List"));
let input = divTop.appendChild(document.createElement("input"));
input.id = "containerTopInput";
input.setAttribute("placeholder", "Type your list");
input.setAttribute("type", "text");
let button = divTop.appendChild(document.createElement("button"));
button.id = "containerTopButton";
button.innerHTML = "Add List";
let clear = divTop.appendChild(document.createElement("i"));
clear.className = "fa-solid fa-ban";
let ul = div.appendChild(document.createElement("ul"));
ul.id = "divUl";

// divTop.id = "topPlace";
// let topPlace = document.querySelector("#topPlace");
style.innerHTML = `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color: gray;
        display:flex;
        align-item:center;
        justify-content:center;
    }
    #container{
        width:600px;
        min-height:800px;
        margin-top:30px;
        background-color:whitesmoke;
        box-shadow: 0 0 10px black;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
    }
     #containerTop{
        width:600px;
        height: 180px;
        background-color:#38A0BF;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        align-content:space-around;
        justify-content: space-evenly;
     }
     #containerTopP{
        width:600px;
        height:60px;
        font-size:48px;
        font-weight:bold;
        color:#BF5B31;
        text-align:center;
        text-shadow: 1px 1px 2px black;
     }
     #containerTopInput{
        width: 300px;
        height: 60px;
        border:none;
        outline:none;
        border-radius: 20px;
        border: 1px solid #BF410F;
        font-size: 22px;
        color: #BF410F;
        font-weight:bold;
        text-align:center;
        transition: all .5s ease-in-out;
     }
     #containerTopInput:focus::placeholder{
        color:transparent;
        padding-left:100px;
        transition: all .5s ease-in-out;
     }
     #containerTop i{
        width:60px;
        height:60px;
        border-radius:20px;
        background-color:#BF410F;
        text-align:center;
        line-height:60px;
        cursor:pointer;
        font-size:24px;
        color:white;
        text-shadow:0px 1px 2px red;
     }
     #containerTopButton{
        width: 200px;
        height: 60px;
        background-color: #BF410F;
        text-align:center;
        line-height:60px;
        color: whitesmoke;
        cursor:pointer;
        font-size:22px;
        border-radius:20px;
        font-weight:bold;
     }
    #divUl{
    min-height: 600px;
    width: 600px;
    background-color:#38A0BF;
    display:flex;
    flex-direction:column;
    align-item:flex-start;
    justify-content:flex-start;
    font-size: 30px;
    font-weight: bold;
    color:red;
    text-shadow:0 1px 1px black;
    text-align:center;
    }
    li{
        width:600px;
        height:40px;
        background-color:#B5BF9D;
        border-bottom: 1px solid white;
        list-style:none;
        line-height:40px;
        padding-left: 10px;
        font-size: 22px;
        color:#BF410F;
        font-weight:bold;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
    }
    i{
        margin-right: 10px;
        font-weight:bold;
        color:red;
        cursor:pointer;
    }
`
document.head.append(style);
document.body.append(div);


button.addEventListener("click", ()=>{
    if(input.value == 0){
        ul.innerHTML = "Please write something";
        setTimeout(()=>{
            ul.innerHTML = "";
        }, 2000)
    }else{
        let li = ul.appendChild(document.createElement("li"));
        li.innerHTML = input.value;
        let close = li.appendChild(document.createElement("i"));
        close.setAttribute("class", "fa-solid fa-xmark");
        close.addEventListener("click", ()=>{
            li.remove();
        })
        // input.value = null;
        clear.addEventListener("click", ()=>{
            li.remove();
        })
    }
})