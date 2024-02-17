let damir = document.querySelector('.damir-value')
let parsedDamir = parseFloat(damir.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let markCost = document.querySelector('.mark-cost')
let parsedMarkCost = parseFloat(markCost.innerHTML)
let markLevel = document.querySelector('.mark-level')
let markIncrease = document.querySelector('.mark-increase')
let parsedMarkIncrease = parseFloat(markIncrease.innerHTML)

let gpc = 1;

function incrementDamir() {
    damir.innerHTML = Math.round(parsedDamir +=gpc)

}

function buyClicker() {
    if (parsedDamir >= parsedClickerCost) {
        damir.innerHTML = Math.round(parsedDamir -= parsedClickerCost)

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }



}

function buyMark() {
    if (parsedDamir >= parsedMarkCost) {
        damir.innerHTML = Math.round(parsedDamir -= parsedMarkCost)

        markLevel.innerHTML ++

        parsedMarkIncrease = parseFloat((parsedMarkIncrease * 1.03).toFixed(2))
        markIncrease.innerHTML = parsedMarkIncrease
        gpc += parsedMarkIncrease

        parsedMarkCost *= 1.18;
        markCost.innerHTML = Math.round(parsedMarkCost)
    }



}