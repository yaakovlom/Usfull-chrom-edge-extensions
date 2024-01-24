var currentUrl = window.location.href;
var elementToClick;

function clickOnElement(elementToclick) {
    if (elementToclick) {
        elementToclick.click();
    } else {
        console.log("Failed to skip ad", elementToclick);
    }
}

if (currentUrl.includes("kore.co.il")) {
    elementToClick = document.querySelector("div.skipad.hidden");
    clickOnElement(elementToClick)
} else if (currentUrl.includes("jdn.co.il")) {
    for (var elementToClick of document.querySelectorAll("a.undefined.is-active")) {
        if (! elementToClick.parentElement.parentElement.parentElement.parentElement.classList.contains("is-muted")) {
            clickOnElement(elementToClick.parentElement.lastChild);
            console.log("Clicked on", elementToClick);
        }
    }
}