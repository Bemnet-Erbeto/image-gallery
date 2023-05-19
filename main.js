window.onload = main

const imagePaths = [
    "images/axp-photography-6-lkhMzoE3Y-unsplash.jpg",
    "images/axp-photography-6BWKj8xw130-unsplash.jpg",
    "images/axp-photography-evqYZXPm3Tg-unsplash.jpg",
    "images/axp-photography-M851tcu5Sro-unsplash.jpg",
    "images/axp-photography-oEoIo2WtUJ0-unsplash.jpg",
    "images/axp-photography-qyHHsgW3kpU-unsplash.jpg",
    "images/axp-photography-z86xmjz_NZw-unsplash.jpg",
    "images/mikita-yo-NKkXmFmTB4E-unsplash.jpg"
]

const albumNames = [
    {
        folder:"summer-2022"}
        , "winter-2022", "trees"]


function main () {
    //loadImages()
    poulateAlbumDropdown()
}

function poulateAlbumDropdown() {
    const selectElement = document.querySelector("#album-choice")
    selectElement.onchange = loadImages
    for (const album of albums) { 
        // Example: <option Value = "album.folder">album.name</option>

        //1. create a new empty element by tage name:
        
        const option = document.createElement("option")

        // 2. customize the new element
        option.value = album.folder
        option.innerText = album.name

        // 3. Add it to a branch wehich is aleardy on the page
        selectElement.append(option)


    }


}
function loadImages () {
    const parentElement = document.querySelector("main")
     
    for (const path of imagePaths) {
        // <img scr= "insert-image-path-here">

        // 1,create the empty element by tag name:
        const imageElement = document.createElement("img")

        // 2, customize the element (in this case, setting the "src" attribute):
        imageElement.setAttribute("src",path)
        imageElement.classList.add("gallery-image","img-fluid","img-thumbnail", )

        // Add it to an existing branch on the DOM tree:
        parentElement.append(imageElement)

        
    }
    console.log(parentElement)
}
