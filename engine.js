var email= document.querySelector("#email");
var check= document.querySelector(".button");
var output= document.querySelector(".output");
var erase= document.querySelector(".clear");




email.addEventListener('click',()=>{
    output.innerHTML="";
});

erase.addEventListener('click',()=>{
    email.value="";
});



check.addEventListener('click',()=>{
        var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(pattern.test(email.value)){
            output.style.color="#33cc33";
            output.innerHTML="Email is vaild !!"
        }
        else{
            output.style.color="#ff3300";
            output.innerHTML="Email is invaild !!"
        }  
});



