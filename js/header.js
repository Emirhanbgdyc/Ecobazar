              //? DropDown Yapmamiza yarayan kod
  document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.querySelector("#dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });

  dropdownToggle.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  dropdownToggle.addEventListener("keydown", (e) => {
    if (e.key === "Excape") {
      dropdown.classList.remove("active");
    }
    
  });   

  //? Navbar Renk Degistirme

const navItem = document.querySelectorAll('.nav-item a');


navItem.forEach(item => {
  item.addEventListener('click', () => {
    
    navItem.forEach(nav => nav.style.color = "");
    
  
    item.style.color = "white";
  });
});


});



