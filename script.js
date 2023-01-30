console.log('HI')
// alert('This is a project which is for only educational purpose :>')
let navBar=document.getElementById('sc')
function slide() {
    navBar.classList.add("active")
}
let hided=document.getElementById("close-navigation")
function hide(){
    navBar.classList.remove("active")
    console.log("ok")
}