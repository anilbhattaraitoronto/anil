"use strict"

export function getYear(id) {
    let year = new Date().getFullYear()
    let yearContainer = document.getElementById(id)
    yearContainer.innerHTML = year
    return yearContainer
}
getYear("copyRightYear")