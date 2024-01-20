var initial=""; 
var input=document.querySelector("#buttons ");
var data1=document.querySelector("#data1");
var data2=document.querySelector("#data2");

input.addEventListener("click",function(dets){
    if (dets.target.innerHTML=='=') {
        data1.innerHTML="";
        data2.innerHTML=eval(initial);  
    }
    else{
        var int=dets.target.innerHTML;
        document.querySelector("#data2").innerHTML=int;
        initial+=int;
        document.querySelector("#data1").innerHTML=initial;
    }
});
