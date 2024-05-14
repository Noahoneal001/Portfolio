// dropdownDeployed keeps track of whether the drop down is open or not
let dropdownDeployed = false

document.addEventListener(`DOMContentLoaded`, () => {



    addListener(`portfolioButtonHeader`, `click`, (eventData) => {

        if (!dropdownDeployed) {
            document.getElementById(`dropdown`).style.height = `200px`
            dropdownDeployed = true
        }
        else {
            document.getElementById(`dropdown`).style.height = `0px`
            dropdownDeployed = false
        }

    })

    document.addEventListener(`click`, (eventData) => {

        if (!eventData.target.matches(`.dropdownPart`)) {
            document.getElementById(`dropdown`).style.height = `0px`
            dropdownDeployed = false
        }

    })

})

function getById(id) {
    return document.getElementById(id)
}

function addListener(id, event, code) {
    getById(id).addEventListener(event, (eventData) => { code(eventData) })
}