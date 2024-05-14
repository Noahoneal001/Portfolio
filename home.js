// dropdownDeployed keeps track of whether the drop down is open or not
let dropdownDeployed = false

//Wait for HTML and CSS to finish loading
document.addEventListener(`DOMContentLoaded`, () => {


//this listener handle the opening and closing of the dropdown for the portfolio button
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

//This closes the drop down if you clicked anywhere on the screen that dose not have the class that marks it as part of the drop down
    document.addEventListener(`click`, (eventData) => {

        if (!eventData.target.matches(`.dropdownPart`) && dropdownDeployed) {
            document.getElementById(`dropdown`).style.height = `0px`
            dropdownDeployed = false
        }

    })

})

//functions are made down here to use later
//getById is just a quicker way to get an element by ID
function getById(id) {
    return document.getElementById(id)
}

//addListener is a quicker way to add event listners to an element (NOTE: Only work for elements with IDs)
function addListener(id, event, code) {
    getById(id).addEventListener(event, (eventData) => { code(eventData) })
}