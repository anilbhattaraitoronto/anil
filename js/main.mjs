import { getYear } from '/js/functions/getYear.mjs'
import { displayPage, switchPages, renderItem, renderTitles } from '/js/pageHandling/navigatePage.mjs'
import { blogs, blogTitles } from '/js/data/blogs.mjs'



loadApp('masthead')
function loadApp(mastheadId) {
    let masthead = document.getElementById(mastheadId)
    masthead.addEventListener('click', (event) => {
        displayPage('mainPage', 'mainLink', 'active', 0)
    })
    renderItem('blogContainer', blogs)
    renderTitles('blogNav', blogTitles)

    displayPage('mainPage', 'mainLink', 'active', 0)
    displayPage('item', 'titleLink', 'active', 0)

    switchPages('mainNav', 'mainPage', 'mainLink')
    switchPages('coreNav', 'mainPage', 'mainLink')
    switchPages('blogNav', 'item', 'titleLink')

    hideShowSideMenu('projectTitleMenu', 'projectTitleContainer')
    hideShowSideMenu('blogTitleMenu', 'blogTitleContainer')
}


function hideShowSideMenu(menuId, sideNavId) {
    let projectTitleMenu = document.getElementById(menuId)
    let projectTitleContainer = document.getElementById(sideNavId)

    projectTitleMenu.addEventListener('click', () => {
        projectTitleContainer.classList.toggle('animatedMenu')
    })
    projectTitleContainer.addEventListener('click', (e) => {
        projectTitleContainer.classList.toggle('animatedMenu')

    })
}




