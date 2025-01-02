const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = parseInt(sizes.value); // Initialize with the default size.

// Event Listeners
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
});

sizes.addEventListener('change', (e) => {
    size = parseInt(e.target.value);
    if (qrText.value.trim()) {
        generateQRCode();
    }
});

downloadBtn.addEventListener('click', (e) => {
    const qrImage = qrContainer.querySelector('img'); // Get the generated QR image.
    if (qrImage) {
        const imgSrc = qrImage.src; // Get the source of the QR image.
        downloadBtn.setAttribute('href', imgSrc); // Set it as the download link.
    } else {
        alert('Please generate a QR Code before downloading!');
        e.preventDefault();
    }
});

// Functions
function generateQRCode() {
    const text = qrText.value.trim();
    if (!text) {
        alert('Enter the text or URL to generate your QR Code');
        return;
    }

    qrContainer.innerHTML = ""; // Clear previous QR Code.
    const qrCode = new QRCode(qrContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: "#000",
        colorLight: "#fff",
    });
}
