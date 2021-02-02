// user click: add fade to name

// function fadeOnClick(element) {
//     console.log("this should be my name", element);
//     element.className += "animate__animated animate__fadeIn"
// }

// function hideOnHover(element) {
//     console.log("this should be photo", element)
//     element.className += "animate__animated animate__fadeOut"
// }


// function revealPostHover(element) {
//     element.className += "animate__animated animate__fadeIn"
// }

function reveal(id,id2) { 
    const x = document.getElementById(id); 
    if (x.style.display == "none") { 
        x.style.display = "flex"; } 
    else { x.style.display = "none"; 
    } 

    const y = document.getElementById(id2); 
    if (y.style.display == "none") { 
        y.style.display = "flex"; } 
    else { y.style.display = "none"; 
    } 
}
