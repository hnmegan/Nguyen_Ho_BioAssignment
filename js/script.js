(() => {
	console.log('fired!');

	let personName = document.querySelector(".nameCon"),
		bioContainer = document.querySelector(".detailsCon"),
		bioButton = document.querySelectorAll("#meetUp button");

	const bioDetails = 

		  ["Megan grew up thinking she would be a lawyer but fell in love with media design on the way. Well, that’s life. She loves yellow and also a very cheerful person to work with ( most of the time). Megan is also a perfectionist. That’s stressful but also means your projects are best taken care of.", 

		  "Interactive Media Design student at Fanshawe College. Aspires to be a developer/designer or a bubble tea shop owner. Loves soft toys, pancakes, bubble tea, and pillows. Dislikes public attention, back pain, migraines, and waking up anytime before 9AM."];
		  activePerson = ["MEGAN NGUYEN", "DAFFODIL HO"];
		  imageSource = [
		  ["images/Meg1.jpg", "images/Meg2.jpg", "images/Meg3.jpg", "images/Meg4.jpg"],
		  ["images/daf1.jpg", "images/daf2.jpg", "images/daf3.jpg", "images/daf4.jpg"]
		  ];
		  
	function showBioDetail() {
		arrayIndex = this.dataset.arrayref;
		bioContainer.textContent = bioDetails[arrayIndex];
		personName.textContent = activePerson[arrayIndex];

		document.getElementById("photo").src = imageSource[arrayIndex][3];

		let imageIndex = 0;
		setInterval(function(){
			if (imageIndex === imageSource[arrayIndex].length){
				imageIndex = 0;
			}
			document.getElementById("photo").src = imageSource[arrayIndex][imageIndex];
			imageIndex++;
		}, 1000);
	}

	bioContainer.textContent += "Young and passionate woman who love creativity and new projects. We have been working together since 2019. Media artists specialise in website developing and designing.";
	personName.textContent += "CREATIVITY IS INTELLIGENCE HAVING FUN";

	bioButton.forEach(button => button.addEventListener("click", showBioDetail));


})();