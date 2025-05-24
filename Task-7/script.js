document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
    let valid=true;
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const message=document.getElementById("message");
    if (name.value.trim()===""){
      name.classList.add("is-invalid");
      valid=false;
    } else{
      name.classList.remove("is-invalid");
    }
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)){
      email.classList.add("is-invalid");
      valid=false;
    } else{
      email.classList.remove("is-invalid");
    }
    if (message.value.trim()===""){
      message.classList.add("is-invalid");
      valid=false;
    } else{
      message.classList.remove("is-invalid");
    }
    if (valid){
      alert("🎉 Your message has been sent successfully!");
      name.value="";
      email.value="";
      message.value="";
    }
  });
  