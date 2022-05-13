
function check(){
	var question0 = document.quiz.question0.value;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;

	if (question0 == "9") {
		correct++;
}
	if (question1 == "dogru") {
		correct++;
}
	if (question2 == "dogru") {
		correct++;
}	
	if (question3 == "dogru") {
		correct++;
	}
	if (question4 == "dogru") {
		correct++;
}
	if (question5 == "dogru") {
		correct++;
}	
	if (question6 == "dogru") {
		correct++;
	}
	if (question7 == "dogru") {
		correct++;
	}
	if (question8 == "dogru") {
		correct++;
}


	
	var pictures = ["testimg/win.jpg", "testimg/meh.jpg", "testimg/lose.jpg"];
	var messages = ["İmkansızdı bu :(", "Sen de herkes gibisin", "Berbatsın aşko"];
	var score;

	if (correct == 0 || correct < 3) {
		score = 2;
	}

	if (correct > 3 && correct < 9) {
		score = 1;
	}

	if (correct == 9) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = correct + " adet doğrun var.";
	document.getElementById("picture").src = pictures[score];
	}
	
