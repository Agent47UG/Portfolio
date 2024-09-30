const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_awl3cce','template_iv3pqzz','#contact-form','Dy4thOMBgbhReAnYZ')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        
        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const video = document.querySelector(".projects__image video");
const video_container = document.querySelector(".projects__card");
const project_image = document.querySelector("#echo_wall_image")

const play_video = (event) => {
    video.style.display = "inline";
    video.play();
    project_image.style.display = "none";
    
};

const stop_video = (event) => {
    video.pause();
    
    project_image.style.display = "inline";
    video.style.display = "none";
};


video_container.addEventListener('mouseenter', play_video);
video_container.addEventListener('mouseleave', stop_video);




const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__perfil, .contact__mail', {origin: 'right'})

sr.reveal('.home__name, .home__info', {origin: 'left'})

sr.reveal('.about__container,.about__image, .about__info, .contact__social, .contact__data', {origin: 'left',duration:1500})

sr.reveal('.services__card, .projects__card', {duration:1000})

sr.reveal('.footer__links, .footer__copy', {origin: 'bottom'})

sr.reveal('.nav__logo', {origin: 'top'})

if(window.innerWidth >= 1150){
    sr.reveal('.nav__list', {origin: 'top'})
}

$(window).mousemove(function(event) { 
  
    $('.cursor').css({
      left: event.pageX,
       top: event.pageY
    })
    
  })
  
  $('.link--cs')
  .on('mouseenter', function() {
    $('.cursor').addClass('focus')
  })
  .on('mouseleave', function() {  
    $('.cursor').removeClass('focus')
  })