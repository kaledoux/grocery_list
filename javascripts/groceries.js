// native DOM
function convertFormDataToJSON(formToConvert) {
	let json = {};
	for (const pair of formToConvert.entries()) {
		json[pair[0]] = pair[1];
	}
	return json;
}

document.addEventListener('DOMContentLoaded', function(e) {
	const form = document.querySelector('form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		let formData = convertFormDataToJSON(new FormData(form)),
			itemName = formData.name,
			quantity = formData.quantity ? formData.quantity : 1;

		const groceryList = document.querySelector('ul');

		let newListItem = document.createElement('li');
		newListItem.innerText = `${quantity} ${itemName}`;

		groceryList.appendChild(newListItem);
		form.reset();
	});
});
// jQuery
$(function() {
	const $form = $('form');

	$form.submit(function(event) {
		event.preventDefault();

		let newListItem = document.createElement('li'),
			groceryItem = $('#name').val(),
			quantity = $('#quantity').val() ? $('#quantity').val() : 1;

		newListItem.innerText = `${quantity} ${groceryItem}`;
		$('ul').append(newListItem);

		$('#name').val('');
		$('#quantity').val('');
	});
});
