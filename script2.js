// Use to alert user when submitting the contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors" // REQUIRED for Google Forms
    })
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. I will get back to you shortly.",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ef",
        background: "#1f2733",
        color: "#fff"
      }).then(() => {
        form.reset(); // reset ONLY after OK
      });
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ff4d4d"
      });
    });
  });
});
