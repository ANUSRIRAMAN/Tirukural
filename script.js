var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","kuralNumber")
input.setAttribute("placeholder","ex:1")
var button=document.createElement("button")
button.innerHTML="search";
button.addEventListener("click",foo);
let final=document.createElement("div")
final.setAttribute("id","content")

div.append(input,button,final)
document.body.append(div)

var details = document.createElement("section");
details.setAttribute("class" , "details");
async function foo(){
   
let res = document.getElementById("kuralNumber").value;

let url=`https://api-thirukkural.vercel.app/api?num=${res}`
let result=await fetch(url);
let result1=await result.json();
console.log(result1)
console.log(result1.line1)
console.log(result1.line2)

    console.log(result1.tam_exp);
   final.innerHTML=`<div class="card"><b>அதிகாரம்</b> : ${result1.sect_tam}<br><br>

   <b>குறள்</b> : ${result1.line1}<br>${result1.line2}<br><br>
   <b>விளக்க உரை</b> : ${result1.tam_exp}<br><br>
   <b>English</b> :  ${result1.eng_exp}<br><br>
   <b>English meaning</b>:  ${result1.eng}<br><br>

   
   
   
   
   
   
   `

}