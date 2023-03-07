/* 22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page. */

window.onscroll = function() {updateProgressBar()}; // When the user scrolls, run the updateProgressBar() function
		function updateProgressBar() {
			// Calculate the progress bar percentage
			var scrollPosition = window.scrollY;
			var documentHeight = document.body.scrollHeight - window.innerHeight;
			var percentage = (scrollPosition / documentHeight) * 100;
			// Update the progress bar width
			document.getElementById("progress-bar").style.width = percentage + "%";
		}