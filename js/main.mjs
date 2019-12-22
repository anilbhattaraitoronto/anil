import { getYear } from '/js/functions/getYear.mjs'
import { displayPage, switchPages, displayItem, renderTitles, iterateItem } from '/js/pageHandling/navigatePage.mjs'
import { blogs, blogTitles } from '/js/data/blogs.mjs'
import { hideShowSideMenu } from '/js/functions/hideShowSideMenu.mjs'



loadApp('masthead')
function loadApp(mastheadId) {
    let masthead = document.getElementById(mastheadId)
    masthead.addEventListener('click', (event) => {
        displayPage('mainPage', 'mainLink', 'active', 0)
    })
    displayItem('blogContainer', blogs, 0)
    renderTitles('blogNav', blogTitles)

    displayPage('mainPage', 'mainLink', 'active', 0)
    displayPage('item', 'titleLink', 'active', 0)

    switchPages('mainNav', 'mainPage', 'mainLink')
    switchPages('coreNav', 'mainPage', 'mainLink')

    // switchPages('blogNav', 'item', 'titleLink')

    iterateItem('blogNav', 'blogContainer', blogs, 'active')

    hideShowSideMenu('projectTitleMenu', 'projectTitleContainer')
    hideShowSideMenu('blogTitleMenu', 'blogTitleContainer')
}







