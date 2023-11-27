document.getElementById('textInput').addEventListener('input', function () {
    const inputText = this.value;
    fetch('/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: inputText,
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('hexOutput').textContent = data.hex;
      document.getElementById('asciiOutput').textContent = data.ascii;
      document.getElementById('binaryOutput').textContent = data.binary;
    })
    .catch(error => console.error('Error:', error));
  });