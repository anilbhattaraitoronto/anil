"use strict"

export function navigatePage(pageClass, linkClass, activeClass, index = 0) {

    let mainPages = Array.from(document.getElementsByClassName(pageClass))
    let mainLinks = Array.from(document.getElementsByClassName(linkClass))
    mainPages.forEach(page => {
        page.style.display = "none"
    })
    mainLinks.forEach(link => {
        link.classList.remove(activeClass)
    })
    mainPages[index].style.display = 'grid'
    mainLinks[index].classList.add(activeClass)
}
export function navigate(navId) {
    let nav = document.getElementById(navId)
    nav.addEventListener('click', (event) => {
        let targetItem = event.target
        let targetIndex = Array.from(nav.children).indexOf(targetItem)
        if (targetIndex !== -1) {
            return navigatePage('mainPage', 'mainLink', 'active', targetIndex)
        }
    })
}





