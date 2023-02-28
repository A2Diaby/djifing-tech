$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Digital Marketer", "E-Commerce Dev"],
        typeSpeed: 110,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Digital Marketer", "E-Commerce Dev"],
        typeSpeed: 80,
        backSpeed: 10,
        loop: true
    });
    window.onscroll = function() {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        let slideInElements = document.querySelectorAll('.left, .right, .myedu, .services, .skills, .works, .contact');
        for (let slideIn of slideInElements) {
        if (top > slideIn.offsetTop - window.innerHeight + 200) {
        slideIn.style.transform = "translateX(0)";
        slideIn.style.opacity = 1;
        }
        }
        };

        window.addEventListener("load", function() {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            let slideInElements = document.querySelectorAll(
              ".text-1, .text-2, .hire"
            );
            for (let slideIn of slideInElements) {
              if (top > slideIn.offsetTop - window.innerHeight + 200) {
                slideIn.style.transform = "translateX(0)";
                slideIn.style.opacity = 1;
              }
            }
          });
          

        const form = document.querySelector("form");

        form.addEventListener("submit", event => {
            event.preventDefault();
    
            const name = form.elements.name.value;
            const email = form.elements.email.value;
            const subject = form.elements.subject.value;
            const message = form.elements.message.value;
    
            let isValid = true;
    
            if (!name) {
                document.querySelector("#name-error").textContent = "Name is required";
                isValid = false;
            } else {
                document.querySelector("#name-error").textContent = "";
            }
    
            if (!email) {
                document.querySelector("#email-error").textContent = "Email is required";
                isValid = false;
            } else {
                document.querySelector("#email-error").textContent = "";
            }
    
            if (!subject) {
                document.querySelector("#subject-error").textContent = "Subject is required";
                isValid = false;
            } else {
                document.querySelector("#subject-error").textContent = "";
            }
    
            if (!message) {
                document.querySelector("#message-error").textContent = "Message is required";
                isValid = false;
            } else {
                document.querySelector("#message-error").textContent = "";
            }
    
            if (isValid) {
                // Submit form to the server
            }
        });   
});