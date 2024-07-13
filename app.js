let searchİnput = document.querySelector("#searchİnput")
let searchButton = document.querySelector(".searchButton")
let clearButton = document.querySelector(".clearButton")
let imageWrapper = document.querySelector(".image-wrapper")

run()

function run() {
    searchButton.addEventListener("click", imageGet)
    clearButton.addEventListener("click", clear)
}
function clear() {
    Array.from(imageWrapper.children).forEach((image) => image.remove())
}
function imageGet(e) {
    clear()
    fetch(`https://api.unsplash.com/search/photos?query=${searchİnput.value.trim()}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 4gxbdu2bdKuiGyf1RwEIcW8kFCkzEEJwn_BCWJKpqhg"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((a) => {
                imageWriteUI(a.urls.small)
            })
        })
    searchİnput.value = ""
    e.preventDefault();
}
function imageWriteUI(url) {
    let div = document.createElement("div")
    div.className = "imageClass"
    let img = document.createElement("img")
    img.src = url
    img.width = "400"
    img.height = "400"
    div.appendChild(img)
    imageWrapper.appendChild(div)
}