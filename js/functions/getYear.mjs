export let year = new Date().getFullYear()
export function getYear(id) {
    let yearContainer = document.getElementById(id)
    yearContainer.innerHTML = year
    return yearContainer
}
getYear("copyRightYear")