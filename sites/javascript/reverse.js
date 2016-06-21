var reverse = function(str) {
  return str.split("").reverse().join("")
}
var update = function() {
  var rs = reverse($("input").val())
  $("h1").html(rs)
}
$("input").on("keyup", update)
