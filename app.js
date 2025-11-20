document.addEventListener('DOMContentLoaded',function(){
    console.log("Loaded");
    let btn = document.getElementById("charSub");
    

    let btnFunc = function(){
        $.ajax("superheroes.php")
            .done(function(result){
                alert(result)}).fail(function(result){
                    alert("No");
            });
    }
    
    btn.addEventListener("click", btnFunc);

})
