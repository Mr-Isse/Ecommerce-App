const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const Close=document.getElementById("Close");



// imges Change
var MianImge=document.getElementById("MianImge");
var SmallImage=document.getElementsByClassName("smallImge");
    SmallImage[0].onclick = function(){
        MianImge.src= SmallImage[0].src;
    }
    SmallImage[1].onclick = function(){
        MianImge.src= SmallImage[1].src;
    }
    SmallImage[2].onclick = function(){
        MianImge.src= SmallImage[2].src;
    }
    SmallImage[3].onclick = function(){
        MianImge.src= SmallImage[3].src;
    }

//Email checkers    
const emailText=document.getElementById("email");
const submitBtn=document.getElementById("Submitbtn");
const Output=document.getElementById("outPut");

function email(){
    if(emailText.value==""){
    alert("Please Enter your email address")
    } else{
    Output.textContent=`Registration Successfully!`
    Output.style.color='green'
}
}
submitBtn.addEventListener("click",email)

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active')
    })
}

if(Close){
    bar.addEventListener("click",()=>{
        nav.classList.remove('active')
    })
}

