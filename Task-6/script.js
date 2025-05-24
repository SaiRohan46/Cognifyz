document.getElementById("registrationForm").addEventListener("submit",function(event){
    event.preventDefault();  
    let errors=[];
    const fullName=document.getElementById("fullName").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const password=document.getElementById("password").value.trim();
    const errorMessages=document.getElementById("errorMessages");
    errorMessages.innerHTML='';
    if (fullName===''){
      errors.push("Full name is required.");
    }
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)){
      errors.push("Please enter a valid email address.");
    }
    const phonePattern=/^[0-9]{10}$/;
    if (!phonePattern.test(phone)){
      errors.push("Phone number must be 10 digits long.");
    }
    if (password.length<6){
      errors.push("Password must be at least 6 characters long.");
    }
    if (errors.length>0){
      errors.forEach(error => {
        errorMessages.innerHTML+=`<p>${error}</p>`;
      });
    } else {
      alert("Form submitted successfully!");
    }
  });
  