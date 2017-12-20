$(document).ready(function() {
	console.log('doc loaded');
	

	var data = [{
		id: 1,
		text: "Ford"
	}, {
		id: 2,
		text: "Chevrolet"
	}, {
		id: 3,
		text: "Volvo"
	}, {
		id: 4,
		text: "Saab"
	}, {
		id: 5,
		text: "Mercedes"
	}, {
		id: 6,
		text: "Audi"
	}, {
		id: 7,
		text: "Subaru"
	}];

	$('.fancy-select').select2({
		placeholder: 'Select an auto maker',
		data: data,
		width: '100%'
	}).on({
		'select2:select': function(e) {
			// do something with selected item
			// this displays an array with one object representing the item that was selected
			console.log($('.fancy-select').select2('data'));
			var selected_car = $('.fancy-select').select2('data')[0];
			console.log(selected_car);
			var car_id = $('.fancy-select').select2('data')[0].id;
			console.log(car_id);
		}
	});
});