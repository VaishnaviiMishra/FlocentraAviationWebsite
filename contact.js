// Function to send email
function sendEmail() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("Phone").value;
  var city = document.getElementById("City").value;
  var message = document.getElementById("message").value;

  // Validate the inputs
  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  // Use EmailJS to send the email
  emailjs.send("service_t7o87na", "template_grm90wj", {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_city: city,
      message: message
  }).then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
      reset(); // Reset form after successful submission
  }, function(error) {
      console.error("FAILED...", error);
      alert("Failed to send email. Please try again later. Error: " + JSON.stringify(error));
  });
}

// Function to validate email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Reset the form
function reset() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("City").value = "";
  document.getElementById("message").value = "";
}

// Initialize EmailJS
(function(){
  emailjs.init("uqSDmH1-vWVLTLU0n"); // Replace with your EmailJS user ID
})();











