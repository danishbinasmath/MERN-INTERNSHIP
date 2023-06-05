function changeData() {
    var main = document.getElementById("main");
    console.log(main.innerHTML)
    var linktag = document.getElementById("linkpage");
    var button = document.getElementById("linkbutton")
    if (main.innerHTML === "Page 1") {
        main.innerHTML = 'Page 2'
        linktag.innerHTML = 'Page 3'
        button.innerHTML = "Next"
    } else if (main.innerHTML === "Page 2") {
        main.innerHTML = 'Page 3'
        linktag.innerHTML = 'Page 2'
        button.innerHTML = "Previous"
    } else if (main.innerHTML === "Page 3") {
        main.innerHTML = 'Page 2'
        linktag.innerHTML = 'Page 3'
        button.innerHTML = "Next"
    }

}