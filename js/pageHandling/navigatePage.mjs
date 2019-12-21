"use strict"

export function displayPage(pageClass, linkClass, activeClass, index = 0) {
    let pages = Array.from(document.getElementsByClassName(pageClass))
    let links = Array.from(document.getElementsByClassName(linkClass))
    pages.forEach(page => {
        page.style.display = 'none'
    })
    links.forEach(link => {
        link.classList.remove(activeClass)
    })
    pages[index].style.display = 'block'
    links[index].classList.add(activeClass)
}


export function switchPages(navId, pageClass) {
    let nav = document.getElementById(navId)
    let navLinks = Array.from(nav.children)
    let linkClass = navLinks[0].getAttribute('class')

    nav.addEventListener('click', (event) => {
        let targetItem = event.target

        if (targetItem.parentElement === nav) {
            let targetIndex = navLinks.indexOf(targetItem)
            navLinks[targetIndex].classList.add('active')
            displayPage(pageClass, linkClass, 'active', targetIndex)

        }
    })
}

switchPages('mainNav', 'mainPage')
switchPages('coreNav', 'mainPage')

