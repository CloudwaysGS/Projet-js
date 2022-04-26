// let countDownBox = document.querySelector(".date");
let daysBox	= document.querySelector(".days");
let hrsBox	= document.querySelector(".hrs");
let minBox	= document.querySelector(".min");
let secBox	= document.querySelector(".sec");
// let countDownDate = new Date("Jan 01, 2023 00:01:00").getTime();



let x = setInterval(function() {
		
		let present = moment();
		let fin = moment("20240403", "YYYYMMDD");
		console.log(fin)
		let distance =fin-present;
		let jour = fin.diff(present,'days')
		const duree = moment.duration(distance,'milliseconds');
		let heure = duree._data.hours;
		let minute = duree._data.minutes;
		let seconde = duree._data.seconds
		daysBox.innerHTML ='-'+jour + "<span>Jours</span>";
		hrsBox.innerHTML = '0-'+heure + "<span>Heures</span>";
		minBox.innerHTML = '0-'+minute + "<span>Minutes</span>";
		secBox.innerHTML = '0-'+seconde + "<span>Secondes</span>";

}, 1000);