
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }else{
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll("#nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuBtn.innerHTML =
    '<i class="fa-solid fa-bars"></i>';

  });

});

  AOS.init({
    duration:1000,
    once:true
  });

  // Typing Effect

  const text = [
    "Web Developer",
    "FrontEnd Developer",
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type(){

    if(count === text.length){
      count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
      count++;
      index = 0;
      setTimeout(type,1500);
    }else{
      setTimeout(type,100);
    }

  })();