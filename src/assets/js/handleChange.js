

function handleChange(checkbox) {
    if(checkbox.checked == true){
        document.getElementById("comment").removeAttribute("disabled");
    }else{
        document.getElementById("comment").setAttribute("disabled", "disabled");
   }
}