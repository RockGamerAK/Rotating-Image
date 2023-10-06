window.addEventListener('scroll', go)
window.addEventListener('resize', go)

function go(e) {
    let scrollPos = document.querySelector('main').scrollTo*1.5
    document.querySelector('img').style.rotate = `${(scrollPos/windowHeight)*360}deg`
}