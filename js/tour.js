const tourContents = document.querySelectorAll('#tour-wrap #tour-contents')
const tourTabs = document.querySelectorAll('#tour-tab li')

tourContents[0].classList.add('tour-on')

tourTabs[0].addEventListener('click', () => {
    tourTabs[1].classList.remove('tour_on')
    tourTabs[0].classList.add('tour_on')
    tourContents[1].classList.remove('tour-on')
    tourContents[0].classList.add('tour-on')
})

tourTabs[1].addEventListener('click', () => {
    tourTabs[0].classList.remove('tour_on')
    tourTabs[1].classList.add('tour_on')
    tourContents[0].classList.remove('tour-on')
    tourContents[1].classList.add('tour-on')
})