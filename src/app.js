//import domtoimage from '../node_modules/dom-to-image/dist/dom-to-image.min.js';
document.addEventListener("DOMContentLoaded", function () {
    const htmlContent = document.getElementById("html-content");
    const convertButton = document.getElementById("convert-button");
    const outputImage = document.getElementById("output-image");
    convertButton.addEventListener("click", function () {
    domtoimage.toJpeg(htmlContent, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
    });
});


// Get references to the form and preview div
const form = document.getElementById('htmlForm');
const preview = document.getElementById('preview');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the HTML code entered by the user
    const htmlCode = document.getElementById('htmlCode').value;

    // Set the preview div's innerHTML to display the entered HTML code
    preview.innerHTML = htmlCode;
});