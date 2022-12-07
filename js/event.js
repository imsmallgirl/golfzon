const eventImgs = document.querySelectorAll('#event-imgs li')
const eventTabs = document.querySelectorAll('#event-tabs li')

eventTabs.forEach((item,index) => {
    item.addEventListener('click' , ()=> {
        eventTabs.forEach((item) => {
            item.classList.remove('event_on')
        })
        item.classList.add('event_on')
        eventImgs.forEach((item) => {
            item.classList.remove('event-off')
        })
        eventImgs[index].classList.add('event-off')
    })
})