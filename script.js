$(".hint").hide();
$(".go").click(function(){
    $(".hint").show();
    
});
$(".solve").click(function(){
   var answer = $(".run").val(); 
   if(answer==="mom"){
    $(".cookie").show();
    $("p").text("you were right");
   }
   else{
       $("p").text("WRONG!!!!");
       }
    });