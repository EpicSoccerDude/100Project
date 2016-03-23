var fortunes = ["Probably", "NEVER EVER!", "Nope", "Yup!!", "Don't even think about it!", "I can't think right now. Try again.", "maybe"];

var button = document.getElementById("fortune");

button.addEventListener("click", function() {
  var fort = Math.floor(Math.random() * fortunes.length);
  document.getElementById("theirfortune").innerHTML = fortunes[fort];
});
