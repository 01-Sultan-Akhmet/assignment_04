function change_size() {
    document.getElementsByTagName("img")[1].style.width = "350px";
    document.getElementsByTagName("img")[1].style.height = "350px";
}
function mouseOver(){
    document.getElementById("ul").style.color = "red";
}
// function mouseOut(){
//     document.getElementById("ul").style.color = "black";
// }
function change_img() {
document.getElementsByTagName("img")[1].src = "New_logo_SDU.jpg";
document.querySelectorAll(" ");
}

function changebyclass(){
    document.getElementsByClassName("story2")[0].innerHTML = "My curriculum";
}
function changebytag() {
    for (var i = 1; i < 7; i++) {
        document.getElementsByTagName("h" + i)[i].innerHTML = "Questions"
    }
}