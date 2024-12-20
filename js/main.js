var preloaderAnimation = bodymovin.loadAnimation({
    container: document.getElementById("preloaderAnimation"),
    path: 'img/preloader.json',
    render: 'svg',
    loop: false,
    autoplay: true,
    name: 'preloader Animation'
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 50,
})

sr.reveal('.services__skill, .projects__card', { duration: 1000 })
sr.reveal('.footer__links, .footer__copy', { origin: 'bottom' })

window.addEventListener('load', function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = 'none';
        sr.reveal('.home__perfil, .contact__mail', { origin: 'right' })
        sr.reveal('.home__name, .home__info', { origin: 'left' })
        sr.reveal('.nav__logo', { origin: 'top' })
        sr.reveal('.about__container,.about__image, .about__info, .contact__social, .contact__data', { origin: 'left', duration: 1500 })
        if (window.innerWidth >= 1150) {
            sr.reveal('.nav__list', { origin: 'top' })
        }
    }, 4500);
});


const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_awl3cce', 'template_iv3pqzz', '#contact-form', 'Dy4thOMBgbhReAnYZ')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message Sent Successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Service Error Please Try Again! ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const projectCards = document.querySelectorAll(".projects__card");

projectCards.forEach(card => {
    const video = card.querySelector(".project__video");
    const projectImage = card.querySelector(".projects__img");

    const playVideo = () => {
        if (video) {
            video.style.display = "block";
            video.play();
            projectImage.style.display = "none";
        }
    };

    const stopVideo = () => {
        if (video) {
            video.pause();
            projectImage.style.display = "block";
            video.style.display = "none";
        }
    };

    card.addEventListener('mouseenter', playVideo);
    card.addEventListener('mouseleave', stopVideo);
});

$(window).mousemove(function (event) {

    $('.cursor').css({
        left: event.pageX,
        top: event.pageY
    })

})

$('.link--cs')
    .on('mouseenter', function () {
        $('.cursor').addClass('focus')
    })
    .on('mouseleave', function () {
        $('.cursor').removeClass('focus')
    })