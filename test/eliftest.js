
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


	
	var pictures = ["https://media.istockphoto.com/photos/happy-new-year-2022-text-holiday-graphic-with-gold-fireworks-in-sky-picture-id1333992332?b=1&k=20&m=1333992332&s=170667a&w=0&h=Do_l9Ygrl4DOe50kpjOzpW54nei9r4n8XXsamMrg31Y=", "testimg/resim2.mp4", "https://images.unsplash.com/photo-1534841645203-8843b9ac9737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
	var messages = ["HARİKA BİR SENE GEÇİRECEKSİN !!!", "ÜMİTSİZLİĞE KAPILMA BELKİ BU SEFER GÜZEL GEÇER ", "2021 SANA TEKMEYİ VURMUŞ!"];
	var score;

	if (correct == 0 || correct < 3) {
		score = 2;
	}

	if (correct > 3 && correct < 7) {
		score = 1;
	}

	if (correct == 7) {
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "İŞTE SENİN BU SENEN:";
	document.getElementById("picture").src = pictures[score];
}
	
