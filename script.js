function myFunction(){
    let gram = document.getElementById("grams").value;
    if(gram==""){
        alert("You can't give blank")
    }
    document.getElementById("KG").innerHTML = gram / 1000+"KG";
   
}