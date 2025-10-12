{/* <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

  (function(){
    emailjs.init("dVnTx75e2Jb_ZLQ57"); // your public key
  })();

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent default form submission
    console.log("Sending values:", this.Fname.value, this.Lname.value, this.email.value, this.sub.value, this.message.value);
    const btn = this.querySelector("button");
    btn.innerText = "Sending...";

    // Send email using EmailJS
    emailjs.send("service_5sxvlqs", "template_dbd6b1r", {
      Fname: this.Fname.value,
      Lname: this.Lname.value,
      email: this.email.value,
      sub: this.sub.value,
      message: this.message.value

    }).then(() => {
      document.getElementById("alert-success").style.display = "block";
      document.getElementById("alert-error").style.display = "none";
      btn.innerText = "Send Message";
      this.reset();
    }).catch(() => {
      document.getElementById("alert-error").style.display = "block";
      document.getElementById("alert-success").style.display = "none";
      btn.innerText = "Send Message";
    });
  }); */}


  // Initialize EmailJS with your user ID
  (function() {
    emailjs.init("dVnTx75e2Jb_ZLQ57"); // Replace with your public key
  })();

  // Add event listener for form submit
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    // Get form values by name attribute
    var firstName = document.querySelector('[name="Fname"]').value;
    var lastName = document.querySelector('[name="Lname"]').value;
    var email = document.querySelector('[name="email"]').value;
    var subject = document.querySelector('[name="sub"]').value;
    var message = document.querySelector('[name="message"]').value;

    // Combine first and last name
    var fullName = firstName + " " + lastName;

    // Template parameters (match EmailJS template fields)
    var templateParams = {
      from_name: fullName,
      from_email: email,
      subject: subject,
      message: message
    };

    // Send email
    emailjs.send("service_5sxvlqs", "template_dbd6b1r", templateParams)
      .then(function(response) {
        document.getElementById("alert-success").style.display = "block";
        document.getElementById("alert-error").style.display = "none";
        // Reset the form
        document.getElementById("contact-form").reset();
      }, function(error) {
        document.getElementById("alert-error").style.display = "block";
        document.getElementById("alert-success").style.display = "none";
        console.error("EmailJS Error:", error);
      });
  });

  // Optional: close alert button
  document.querySelectorAll(".closeAlert").forEach(function(btn) {
    btn.addEventListener("click", function() {
      this.parentElement.parentElement.style.display = "none";
    });
  });

