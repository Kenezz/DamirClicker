let damir = document.querySelector('.damir-value')
let parsedDamir = parseFloat(damir.innerHTML)


let gpc = 1;
let gps = 0

let damirImgContainer = document.querySelector('.damir-img-container')

let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")



const upgrades  = [
    {
        name: 'clicker',
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        damirMultiplier: 1.01,
        costMultiplier: 1.10,

    },

    {
        name: 'mark',
        cost: document.querySelector(".mark-cost"),
        parsedCost: parseFloat(document.querySelector(".mark-cost").innerHTML),
        increase: document.querySelector(".mark-increase"),
        parsedIncrease: parseFloat(document.querySelector(".mark-increase").innerHTML),
        level: document.querySelector(".mark-level"),
        damirMultiplier: 1.025,
        costMultiplier: 1.10,

    }


]
console.log(upgrades[0])


function incrementDamir(event) {
    damir.innerHTML = Math.round(parsedDamir +=gpc)

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${Math.round(gpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left ${x}px; font-size: 15px; pointer-events: none;`
    damirImgContainer.appendChild(div)

    div.classList.add('fade-up')

    console.log(div)

    timeout(div)

}


const timeout = (div) => {
    setTimeout(() => {
        div.remove()
    }, 800)
    

}



function buyUpgrade(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u
    })
    if (parsedDamir >= mu.parsedCost) {
        damir.innerHTML = Math.round(parsedDamir -= mu.parsedCost)
        mu.level.innerHTML ++
        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.damirMultiplier).toFixed(2))
        mu.increase.innerHTML = mu.parsedIncrease
        gpc += mu.parsedIncrease

        mu.parsedCost *= mu.costMultiplier
        mu.cost.innerHTML = Math.round(mu.parsedCost)

        if (mu.name === 'clicker') {
            gpc += mu.parsedIncrease
        } else {
            gps += mu.parsedIncrease
        }
    }
    
  

}





function save () {
    localStorage.clear()

    upgrades.map((upgrade) => {
        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrade.level.innerHTML),
            parsedCost: upgrade.parsedCost,
            parsedIncrease: upgrade.parsedIncrease
        }) 

        localStorage.setItem(upgrade.name, obj)

    })

    localStorage.setItem('gpc', JSON.stringify(gpc))
    localStorage.setItem('gps', JSON.stringify(gps))
    localStorage.setItem('damir', JSON.stringify(parsedDamir))


}

function load () {
    upgrades.map((upgrade) => {
        const savedValues = JSON.parse(localStorage.getItem(upgrade.name))

        console.log(upgrade.name, savedValues)

        upgrade.parsedCost = savedValues.parsedCost
        upgrade.parsedIncrease = savedValues.parsedIncrease

        upgrade.level.innerHTML = savedValues.parsedLevel
        upgrade.cost.innerHTML = Math.round(upgrade.parsedCost)
        upgrade.increase.innerHTML = upgrade.parsedIncrease

    })

    gpc = JSON.parse(localStorage.getItem('gpc'))
    gps = JSON.parse(localStorage.getItem('gps'))
    parsedDamir = JSON.parse(localStorage.getItem('damir'))

    damir.innerHTML = Math.round(parsedDamir)




}



setInterval(() => {
    parsedDamir += gps
    damir.innerHTML = Math.round(parsedDamir)
    gpcText.innerHTML  = Math.round(gpc)
    gpsText.innerHTML = Math.round(gps)
}, 1000)






