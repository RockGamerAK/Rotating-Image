window.addEventListener('scroll', go)
window.addEventListener('resize', go)

function go(e) {
    let scrollPos = document.querySelector('main').scrollTop*1.5
    let mainHeight = document.querySelector('main').clientHeight
    document.querySelector('img').style.rotate = `${(scrollPos/mainHeight)*360}deg`
}