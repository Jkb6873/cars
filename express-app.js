var express = require('express');
var app = express();

var cars = [
	{
		name: 'Subaru Impreza',
		img : 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q1/665058/2017-subaru-impreza-sedan-hatchback-photos-and-info-news-car-and-driver-photo-666915-s-original.jpg',
		desc: [
			"Remote control central locking",
			"Electrically operated front windows",
			"'City mode' power steering",
			"Electrically adjustable door mirrors"
		],
		cost: '18,495.00'
	},{
		name: 'Opel Corsa S',
		img : 'https://s1.cdn.autoevolution.com/images/news/opel-corsa-s-is-a-150-hp-warm-hatch-with-opc-looks-and-recaro-seats-119450_1.jpg',
		desc: [
			"Remote control central locking",
			"Electrically operated front windows",
			"'City mode' power steering",
			"Electrically adjustable door mirrors"
		],
		cost: '18,681.89'
	},{
		name: 'Koenigsegg Agera R',
		img : 'https://www.koenigsegg.com/wp-content/uploads/2014/11/IMG_1666.jpg',
		desc: [
			"Remote control central locking",
			"Electrically operated front windows",
			"'City mode' power steering",
			"Electrically adjustable door mirrors"
		],
		cost: '2,100,000.00'
	},{
		name: 'Toyota Camry',
		img: 'http://st.motortrend.com/uploads/sites/10/2017/01/2018-Toyota-Camry-XSE-rear-three-quarter-in-motion-03.jpg',	
		desc: [
			"Remote control central locking",
			"Electrically operated front windows",
			"'City mode' power steering",
			"Electrically adjustable door mirrors"
		],
		cost: '23,495.00'
	}
];

app.get('/car', function(req, res){
	res.render("list.ejs", {cars: cars});
});

app.get('/car/:num', function(req, res){
	res.render("individual.ejs", {car: cars[req.params.num]});
});

app.listen(3000, function(){
	console.log('Example app listening');
});