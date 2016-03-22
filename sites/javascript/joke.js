var thesejokes = ["ADAM: What if there was no google? JACK: Good question. Google it! ", "QUESTION: Why wasn't the teddy bear hungry. ANSWER: He was stuffed.", "RANDOM PERSON: Doctor there's an invisible man in the waiting room! DOCTOR: Tell him I can't see him right now.", "Keep rolling your eyes little man. Maybe you will find a brain back there.", "QUESTION: Why did the tomato blush? ANSWER: Because it saw the salad dressing!", "QUESTION: Why is the longest human nose record only 11 inches long? ANSWER: Because if it were 12 inches long, it would be a foot!", "STUDENT: Teacher, can I go to the bathroom? TEACHER: I don't know, can you!", ];

var button = document.getElementById("joke");

button.addEventListener("click", function() {
  var randomjoke = Math.floor(Math.random() * thesejokes.length);
  document.getElementById("jokes").innerHTML = thesejokes[randomjoke];
});
