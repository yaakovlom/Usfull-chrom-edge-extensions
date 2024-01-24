function removeFirstDiv() {
    var skipAdElement = document.querySelector("a.fp-sticky.fp-icon");
    if (skipAdElement) {
        skipAdElement.click()
    }
}

setInterval(removeFirstDiv, 500);