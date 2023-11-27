// public/app.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
  
    fetch('/update1', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('hexOutput').textContent = data.hex;
        document.getElementById('asciiOutput').textContent = data.ascii;
      })
      .catch(error => console.error('Error:', error));
  });
  