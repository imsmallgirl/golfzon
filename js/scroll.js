

// golf-brands scroll event

const golfBrands = document.querySelector('#golf-brands .container')
const golfScreens = document.querySelector('#golfzon-screens .container')
const golfCourse = document.querySelector('#new-course .container')
const midBanner = document.getElementById('mid-banner')
const golfApp = document.querySelector('#golfzon-app .container')
const golfTour = document.querySelector('#golfzon-tour .container')
const golfEvent = document.querySelector('#golfzon-event .container')

const scrollEvent = () => {
    if(scrollY >= 110){
        golfBrands.classList.add('scroll')
    }else {
        golfBrands.classList.remove('scroll')
    };

    if(scrollY >= 300) {
        golfScreens.classList.add('scroll')
    }else {
        golfScreens.classList.remove('scroll')
    }

    if(scrollY >= 1200) {
        golfCourse.classList.add('scroll')
    }else{
        golfCourse.classList.remove('scroll')
    }
    if(scrollY >= 1910) {
        midBanner.classList.add('scroll')
    }else{
        midBanner.classList.remove('scroll')
    }

    if(scrollY >= 2210) {
        golfApp.classList.add('scroll')
    }else {
        golfApp.classList.remove('scroll') 
    }

    if(scrollY >= 3340) {
        golfTour.classList.add('scroll')
    }else {
        golfTour.classList.remove('scroll')
    }

    if(scrollY >= 3965) {
        golfEvent.classList.add('scroll')
    }else{
        golfEvent.classList.remove('scroll')
    }

}

window.addEventListener('scroll', scrollEvent);

