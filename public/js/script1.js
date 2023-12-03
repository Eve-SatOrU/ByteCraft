// // public/app.js
// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const formData = new FormData(this);
  
//     fetch('/update1', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('hexOutput').textContent = data.hex;
//         document.getElementById('asciiOutput').textContent = data.ascii;
//       })
//       .catch(error => console.error('Error:', error));
//   });
// public/js/script1.js
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('/update1', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      updateUI(data);
    })
    .catch(error => console.error('Error:', error));
});

function updateUI(data) {
  document.getElementById('hexOutput').textContent = formatHex(data.hex);
  document.getElementById('asciiOutput').textContent = formatAscii(data.ascii);
}

function formatHex(hexString) {
  // Format the hexadecimal string into rows or columns as needed
  // For example, you can group every 16 characters into a row
  return hexString.match(/.{1,16}/g).join('\n');
}

function formatAscii(asciiString) {
  // Format the ASCII string into rows or columns as needed
  // For example, you can group every 16 characters into a row
  return asciiString.match(/.{1,16}/g).join('\n');
}
