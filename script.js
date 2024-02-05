document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform login verification
  if (username === 'hanif' && password === '123456') {
    alert('Login successful!');
    // Perform further actions or redirect to another page
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
