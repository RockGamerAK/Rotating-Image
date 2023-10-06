window.addEventListener('scroll', go)
window.addEventListener('resize', go)

function go(e) {
    let scrollPos = document.querySelector('main').scrollTo*1.5
    let mainHeight = document.querySelector('main').scrollTo*1.5
    document.querySelector('img').style.rotate = `${(scrollPos/mainHeight)*360}deg`
}