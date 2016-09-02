jQuery(document).ready(function($) {
	if ($('.floating-labels').length > 0) floatLabels();

	function floatLabels() {
		// console.log("here");
		var inputFields = $('#contact form.floating-labels .cd-label').next();
		console.log(inputFields);
		inputFields.each(function() {
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.keyup(function() {
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		(inputField.val() == '') ? inputField.prev('.cd-label').removeClass('float'): inputField.prev('.cd-label').addClass('float');
	}
});