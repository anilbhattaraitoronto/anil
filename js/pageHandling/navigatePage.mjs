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


export function renderItem(id, posts) {
    let itemContainer = document.getElementById(id)

    posts.forEach(item => {
        let postItem = `
        <article class="item">
            <p class="itemPostedOn"> ${item.postedOn}</p> 
            <h4 class="itemTitle">${item.title}</h4>
            <div class="itemContent">${item.content}</div>
        </article>
        `
        itemContainer.innerHTML += postItem
    })

}

export function renderTitles(id, titles) {
    let titleContainer = document.getElementById(id)
    titles.forEach(title => {
        let postTitle = ` <h4 class="titleLink"> ${title} </h4>`
        titleContainer.innerHTML += postTitle
    })
}