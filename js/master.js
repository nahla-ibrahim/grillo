// --------------------------nav--------------------------
// -------toggler-------
let toggler = document.querySelector(".navbar .navbar-toggler");
let navClose = document.querySelector(".navbar .navbar-close");
let nav = document.querySelector(".navbar");
toggler.onclick = function(){
  if(navClose.classList.contains("hide")){
    navClose.classList.remove("hide");
    toggler.classList.add("hide") ;
    nav.classList.add ("scrolled");
    
  }else{
    navClose.classList.add("hide");
    toggler.classList.remove("hide");
  }
}
navClose.onclick = function(){
  if(toggler.classList.contains("hide")){
    navClose.classList.toggle("anim");
    setTimeout(() => {
      navClose.classList.add("hide");
      toggler.classList.remove("hide");
      if(window.scrollY <= 0){
        nav.classList.remove ("scrolled")
      }
    }, 200);  
  }else{
    navClose.classList.remove("hide");
    toggler.classList.add("hide");
  }
}

// -----nav active------
let navItems = document.querySelectorAll(".nav-pages .nav-item .nav-link");
let currentpage = window.location.pathname.split("/").pop() || "index.html";
navItems.forEach(item =>{
  let linkhref = item.getAttribute("href");
  if(linkhref === currentpage){
    item.classList.add("active");
    }else{
      item.classList.remove("active");
    }
})
// let lastActiveItem = 0;

// navItems.forEach((item , index) => {
//   item.onclick = function(){
//     navItems.forEach(item =>{
//       item.classList.remove("active");
//       this.classList.add("active");
//       lastActiveItem = index ;
//     });
//   }
// });

// function activeItem(){
//   let oneIsActive = [...navItems].some(item => item.classList.contains("active"));
//   if (!oneIsActive){
//     navItems[lastActiveItem]?.classList.add("active");
//   }
// }


// ----nav background ----
document.addEventListener('scroll',()=>{
  let nav = document.querySelector(".navbar");
  if(window.scrollY > 0){
    nav.classList.add("scrolled");
    nav.style.position = 'sticky'
  }else{
    nav.classList.remove("scrolled");
    nav.style.position = 'fixed'
    if(toggler.classList.contains("hide")){
      nav.classList.add("scrolled");
    }
  }
});

// -------------------sign in modal btn -------------------------------------

let signUp = document.getElementById("signUpModal");
let signIn = document.getElementById("signInModal");
let signUpbtn = document.getElementById("openSignUp");
let signInbtn = document.getElementById("openSignIn");
let navSignInbtn = document.querySelector(".nav-item .btn");
navSignInbtn.addEventListener("click", function(){
    console.log("yes");
    signUp.classList.remove("active");
    signIn.classList.add("active");
    signUpbtn.style.backgroundColor = "transparent";

    signUpbtn.addEventListener("click", function(){
      signUp.classList.add("active");
      signIn.classList.remove("active");
    })
  });

// ----------------------- landing -----------------------
let prevIndex = 0;
let button = document.querySelectorAll(".carousel .carousel-circle button");

button.forEach(btn =>{
  btn.addEventListener('click', function(e){
    button.forEach(btn =>{
      btn.classList.remove("active");
    })
    this.classList.add("active");
    let currentIndex = parseInt(this.getAttribute("data-bs-slide-to"));
    let direction = currentIndex > prevIndex ? 'Right': "Left";
    // let activeItem = document.querySelector(".carousel-item.active");
    let animdivs = document.querySelectorAll(".carousel-item .landing-caption .animate__animated");

    animdivs.forEach(div =>{
      div.classList.remove("animate__slideInRight" , "animate__slideInLeft");
      div.classList.add(`animate__slideIn${direction}`);
      prevIndex = currentIndex;

    })
  })
});

//----------------------menu------------------
let menuButtons =  document.querySelectorAll(".menu-buttons .filter-btn");
let boxes = document.querySelectorAll(".menu .row .boxes");

menuButtons.forEach(btn=>{
  btn.onclick= function(){
    menuButtons.forEach(btn=>{
      btn.classList.remove("active");
      this.classList.add("active");
    });
    let filter = btn.getAttribute("data-filter");
    boxes.forEach(box =>{
      box.classList.remove("animate__animated", "animate__zoomIn");
      if (filter === "all" || box.classList.contains(filter)){
        box.classList.add("active");
        setTimeout(()=>{
          box.classList.add("animate__animated", "animate__zoomIn");
        },10)

      }
      else{
        box.classList.remove("active");
      }
    })
  }
  })



