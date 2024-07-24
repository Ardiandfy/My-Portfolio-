document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerHTML = '<p style="color: green;">Terima kasih, pesan Anda telah terkirim!</p>';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerHTML = '<p style="color: red;">Harap isi semua bidang.</p>';
    }
});
