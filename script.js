// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

    hamburger.addEventListener("click", () => {
        navUL.classList.toggle("show");
    })


// Password toggle
function password_show_hide() {
    const x = document.getElementById("password");
    const show_eye = document.getElementById("show_eye");
    const hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }
// Confirm password toggle
  var password = document.getElementById('fakePassword');
      var toggler = document.getElementById('toggler');

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
          toggler.classList.add('fa-eye-slash');
        } else {
          toggler.classList.remove('fa-eye-slash');
          password.setAttribute('type', 'password');
        }
      };

      toggler.addEventListener('click', showHidePassword);



//valdation

