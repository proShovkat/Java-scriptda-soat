const sec = document.querySelector('.s')
const min = document.querySelector('.m'),
      hour = document.querySelector('.h'),
      digitHour = document.querySelector('.hours'),
      digitMinute = document.querySelector('.minutes')

const stopWatchBtn = document.querySelector('.stopwatch__btn')

function clock() {
    const time = new Date(),
        getSeconds = time.getSeconds(),
        getMinutes = time.getMinutes(),
        getHours = time.getHours()

    digitMinute.innerHTML =  getMinutes > 9 ? `${getMinutes}` : `0${getMinutes}`,
    digitHour.innerHTML = getHours > 9 ? `${getHours}` : `0${getHours}`

    resetTime(getSeconds, sec)
    resetTime(getMinutes, min)
    resetTime(getHours, hour, 30)
    
    setTimeout(() => clock(), 1000)
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
      tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }

        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}

stopWatchBtn.addEventListener('click', () => {
    if(stopWatchBtn.textContent === 'start') stopWatchBtn.textContent = 'stop'
    else if(stopWatchBtn.textContent === 'stop') stopWatchBtn.textContent = 'local'
    else stopWatchBtn.textContent = 'start'
})


function resetTime(value, dom, multiplier = 6){
    if(value === 0){
        dom.style = `transform: rotate(0deg);transition: 0s`
    } else dom.style = `transform: rotate(${value * multiplier}deg);transition: 1s linear`
}