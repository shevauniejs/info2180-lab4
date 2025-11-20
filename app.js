document.addEventListener('DOMContentLoaded',function(){
    console.log("Loaded");
    let btn = document.getElementById("charSub");
    
    
    let btnFunc = function(){
        console.log("Button clicked");
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if(httpRequest.status===200){
                let response = httpRequest.responseText;
                alert(response);
            }else{
                alert("There was a problem with the request.");
            }
        }
    }
    
    const httpRequest = new XMLHttpRequest();
    let url = "superheroes.php";
    httpRequest.onreadystatechange = btnFunc;
    httpRequest.open('GET',url);
    httpRequest.send();
    
    
    btn.addEventListener("click", btnFunc);

})
