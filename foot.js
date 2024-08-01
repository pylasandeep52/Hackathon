document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace the following URL with the URL to your backend endpoint
    var url = 'https://your-backend-url.com/send-message';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, message: message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('contact-form').reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
});
