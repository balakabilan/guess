let num=document.getElementById("num");

let btn=document.getElementById("btn");
const ans=39;
function cl(){
    if(num.value ==ans){
        alert("youre right");
        
    }
  else if(num.value <ans){
        alert("guessed low");
        num.value=null;
        
    }
else{
    alert("guessed high");
    num.value=null;
} 

}
btn.addEventListener("click",function(){
    cl();
})