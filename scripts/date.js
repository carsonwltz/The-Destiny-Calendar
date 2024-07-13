function displayDate() {
	const dateDiv = document.getElementById("date");
	const currentDate = new Date();
	const date = currentDate.toDateString();
	dateDiv.textContent = `Current Date: ${date}`;
}
displayDate();
setInterval(displayDate, 1000);
