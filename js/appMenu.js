const appMenus = document.querySelectorAll('#app-menus dl')
const appImgs = document.querySelectorAll('#app-imgs .app')
const appImg = document.querySelectorAll('#appImgs li')

appMenus.forEach((item,index) => {
    item.addEventListener('click', ()=> {
        appMenus.forEach((item) => {
            item.classList.remove('menu-on')
        })
        item.classList.add('menu-on')
        appImgs.forEach((item) => {
            item.classList.remove('app-show')
        })
        appImgs[index].classList.add('app-show')

    })

})

