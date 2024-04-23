//your JS code here. If required.
let body=document.getElementByTagName("body");
let p1=document.createElement("p");
p1.setAttribute("id","counter");
p1.textContent="0";
body.appendChild(p1);
let btn=document.createElement("button");
btn.textContent="Increment";
btn.setAttribute("id","incrementBtn");
btn.addEventListener("click",myfunc);
let i=0;
function myfunc(){
	i++;
	p1.textContent=i;
}
