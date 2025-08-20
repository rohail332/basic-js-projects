let name = prompt("Enter you name.")
if(!name || name.trim() === ""){
    name = "guest"
}
const Greetings = document.querySelector(".greet")
const ti = new Date().getHours();
let mess = "";
if (ti < 12 ){
    mess = `Good Morning, ${name}`
}
else if ( ti < 17){
    mess = `Good afternoon, ${name}`
}
else if(ti < 21){
    mess = `Good Evening, ${name}`
}
else{
    mess = `Good Night, ${name}`
}
Greetings.textContent = mess;