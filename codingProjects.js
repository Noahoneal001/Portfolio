let iframeList = [`wizardsdraughts`,`jurassicParkSite`]
let currentIndex = 0
let iframeListEnd = iframeList.length - 1

document.addEventListener(`DOMContentLoaded`, () => {

    addListener(`leftArrow`, `click`, (eventData) => {
        let nextIndex
        let currentIframe = getById(iframeList[currentIndex])

        if (currentIndex <= 0) {
            nextIndex = iframeListEnd
            
        }

    })

});

function getById(id) {
    return document.getElementById(id);
};

function addListener(id, event, code) {
    getById(id).addEventListener(event, (eventData) => {code(eventData)});
};