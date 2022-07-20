function myFunction(){
    let gram = document.getElementById("grams").value;
    if(gram==""){
        alert("You need to insert a Number");
    }
    document.getElementById("KG").innerHTML = gram / 1000+"KG";
   
}
