/**
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById(lightboxID).classList.remove('hidden');
	document.getElementById('lightbox-overlay').classList.toggle('hidden');
}

function unhideLightbox1() {
	unhideLightbox('doggo1');
}

document.getElementById('picture-1').onclick = unhideLightbox1
document.getElementById('picture-2').onclick = function () {unhideLightbox('doggo2')}
document.getElementById('picture-3').onclick = function () {unhideLightbox('doggo3')}

function closeLightbox(lightboxID) {
	document.getElementById(lightboxID).classList.add('hidden');
	document.getElementById('lightbox-overlay').classList.toggle('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes