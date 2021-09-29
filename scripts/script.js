let menuList = document.querySelector("#menuList");
let col2 = document.querySelector(".col-2");

menuList.style.maxHeight = "0px";

function togglemenu(){
    const width = document.body.clientWidth;

    if(width <= 700) {
        if(menuList.style.maxHeight == "0px"){
            col2.style.transition = "0.3s";
            col2.style.marginTop = "50px";
            menuList.style.maxHeight = "130px";
        } else {
            col2.style.transition = "0.3s";
            col2.style.marginTop = "0px";
            menuList.style.maxHeight = "0px";
        }
    }

}