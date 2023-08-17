export default function urlToBase64(imageUrl, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		var reader = new FileReader();
		reader.onloadend = function () {
			callback(reader.result);
		};
		reader.readAsDataURL(xhr.response);
	};
	xhr.open('GET', imageUrl);
	xhr.responseType = 'blob';
	xhr.send();
}
