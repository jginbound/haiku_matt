$(document).ready(function(){
	console.log('ready');
	var randomNumber = Math.floor(Math.random()* 2) + 1;
	if(randomNumber==1) {
		$('.two').append('<img src="http://whiteraverrafting.com/wp-content/uploads/2013/07/rick-rolled-links-header.jpg" />');
		$('.one').append('<p>a friend to code with</p> <p>from the vast desert of Maan</p> <p>Angular 4 life</p>');
	} else {
		$('.two').append('<p>a friend to code with</p> <p>from the vast desert of Maan</p> <p>Angular 4 life</p>');
		$('.one').append('<img src="http://whiteraverrafting.com/wp-content/uploads/2013/07/rick-rolled-links-header.jpg" />');
	}

	
	console.log(randomNumber);
	// create random events that trigger this//
		// create an array that stores images within cards//
		//those images will be pulled within the cards at random// 

	
		console.log('hi');
	

	// click on button transform happens//
	$('.click-item-one').click(function(){
		$('.card-one').css({'transform': 'rotateY(180deg)'});
	});
	$('.click-item-two').click(function(){
		$('.card-two').css({'transform': 'rotateY(180deg)'});
	});
});