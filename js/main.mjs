import { year, getYear } from '/js/functions/getYear.mjs'
import { navigatePage, navigate } from '/js/pageHandling/navigatePage.mjs'



loadApp('masthead')
function loadApp(mastheadId) {
    let masthead = document.getElementById(mastheadId)
    masthead.addEventListener('click', () => {
        navigatePage('mainPage', 'mainLink', 'active', 0)
    })
    navigatePage('mainPage', 'mainLink', 'active', 0)
    navigate('mainNav')
    navigate('coreNav')
}


