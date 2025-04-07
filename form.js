document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiryForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
      };
  
      console.log("Form Submitted:", formData);
  
      form.reset();
      alert("Thank you! Your enquiry has been submitted.");
    });
  });
  