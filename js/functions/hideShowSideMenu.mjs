export function hideShowSideMenu(menuId, sideNavId) {
    let projectTitleMenu = document.getElementById(menuId)
    let projectTitleContainer = document.getElementById(sideNavId)

    projectTitleMenu.addEventListener('click', () => {
        projectTitleContainer.classList.toggle('animatedMenu')
    })
    projectTitleContainer.addEventListener('click', (e) => {
        projectTitleContainer.classList.toggle('animatedMenu')

    })
}