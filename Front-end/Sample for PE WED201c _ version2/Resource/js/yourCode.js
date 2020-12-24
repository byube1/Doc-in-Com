function Show(){
    var x = document.getElementById("myform");
    var y = document.getElementById("mytext");
    if (x.style.display === "none") {
        y.innerHTML = "Hide Register Form";
        x.style.display = "block";
      } else {
        y.innerHTML = "Show Register Form";
        x.style.display = "none";
      }
}

function checkForm(){
    var x = document.getElementById("t1").value;
    var y = document.getElementById("t2").value;
    
    if(x==""||x==null||y==""||y==null){
        alert("Two text fields are not empty  ");
    }
    else{
        return true;
    }
}