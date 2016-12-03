import './ajoutPost.html';

$(function () {
	var $button, $input, $result;
	$button = $('.calendar');
	$input  = $('.calendar-input');
	$result = $('.result');
	$button.on('click', function () {
		return $input.databox('open');
	});
	$input.on('change', function () {
		return
		$result.text($input.databox('getTheDate'));
	});
}.call(this));