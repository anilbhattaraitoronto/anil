"use strict"
import { blogs } from '/js/data/blogs.mjs'

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


export function switchPages(navId, pageClass, linkClass) {
    let nav = document.getElementById(navId)
    let navLinks = Array.from(nav.children)


    nav.addEventListener('click', (event) => {
        let targetItem = event.target
        let targetIndex = navLinks.indexOf(targetItem)

        if (targetItem.parentElement === nav && targetIndex !== -1) {

            // let linkClass = navLinks[targetIndex].getAttribute('class')
            navLinks[targetIndex].classList.add('active')
            displayPage(pageClass, linkClass, 'active', targetIndex)
        }
    })
}


export function displayItem(id, posts, postIndex = 0) {
    let itemContainer = document.getElementById(id)
    let postItem = `
        <article class="item">
            <p class="itemPostedOn"> ${posts[postIndex].postedOn}</p> 
            <h4 class="itemTitle">${posts[postIndex].title}</h4>
            <div class="itemContent">${posts[postIndex].content}</div>
        </article>
        `
    itemContainer.innerHTML = postItem

}

export function renderTitles(id, titles) {
    let titleContainer = document.getElementById(id)
    titles.forEach(title => {
        let postTitle = ` <h4 class="titleLink"> ${title} </h4>`
        titleContainer.innerHTML += postTitle
    })
}

export function iterateItem(navId, id, posts, activeClass) {
    let nav = document.getElementById(navId)
    if (nav.children !== null) {

        nav.addEventListener('click', (event) => {
            Array.from(nav.children).forEach(link => {
                link.classList.remove(activeClass)
            })
            let targetLink = event.target
            targetLink.classList.add(activeClass)
            let targetIndex = Array.from(nav.children).indexOf(targetLink)
            displayItem(id, posts, targetIndex)
        })

    }


}