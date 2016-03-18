$(document).ready(function(){
    $("button").click(function(){
        $("#first").fadeToggle();
        $("#second").fadeToggle("slow");
        $("#third").fadeToggle(2000);
    });
});
