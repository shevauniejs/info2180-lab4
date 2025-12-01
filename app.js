$(document).ready(function(){
    console.log("Loaded");
    let btn = $("#charSub");
    let name = $("input");
	let got = $("#result");

    let btnFunc = function(){
        console.log("clicked");
        let value = name.val()
        $.ajax({url:"superheroes.php",method:"GET", data:{character: value}}).done(successFunc).fail(failFunc);
	}

    let successFunc = function(uptd){
        got.html("");
        got.html(uptd);
    }

    let failFunc = function(){
        got.html("");
        got.html("Error w/ php");
    }
    
    btn.on("click",(btnFunc));

})
