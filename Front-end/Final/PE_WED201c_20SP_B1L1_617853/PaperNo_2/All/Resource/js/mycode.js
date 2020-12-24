function show(){
    var x= document.getElementById("team");
    var y = document.getElementById("myform");
    var z = document.getElementById("showmore");

    if(x.style.display == "none"){

        x.style.display = "block";
        y.style.display = "block";
        z.innerHTML = "SHOW LESS";
    }
    else{
        x.style.display = "none";
        y.style.display = "none";
        z.innerHTML = "SHOW MORE";


    }  
}


function check(){
    var x = 0;
    var e = document.getElementById("email").value;
    var c1 =document.getElementById("USA").checked;
    var c2= document.getElementById("UK");
    var cap = document.getElementsByTagName("input").value;
    
    if(e==""||e==null||e==""||e==null){
        alert("Please fill your email  ");
        alert(c1);
    }
    else{
        x+1;
    }

   
    

   



}