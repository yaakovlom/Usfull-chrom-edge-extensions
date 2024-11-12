var currentUrl = window.location.href;
var elementToClick;

function clickOnElement(elementToClick) {
    if (elementToClick.click) {
        elementToClick.click();
    }
}

if (currentUrl.includes("kore.co.il")) {
    for (elementToClick of document.querySelectorAll("#adSkipButton")) {
        if (elementToClick) {
            elementToClick.className="vast-skip-button enabled"
            clickOnElement(elementToClick);
        }
    }
} else if (currentUrl.includes("jdn.co.il")) {
    for (elementToClick of document.querySelectorAll("a.undefined.is-active")) {
        if (elementToClick && ! elementToClick.parentElement.parentElement.parentElement.parentElement.classList.contains("last-video")) {
            clickOnElement(elementToClick.parentElement.children[1]);
            }
    }
}
