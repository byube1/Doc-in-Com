function show(){
    var x = document.getElementById("detail");
    var y = document.getElementById("change");
    if(x.style.display === "none"){
        x.style.display = "block";
        y.innerHTML = "Hide";
    }
    else{
        x.style.display = "none";
        y.innerHTML = "Learn Mode";
    }
    
}