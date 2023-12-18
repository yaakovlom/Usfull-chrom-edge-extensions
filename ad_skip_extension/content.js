console.log("start ")
var skipAdElement = document.querySelector("div.skipad.hidden");
if (skipAdElement) {
    skipAdElement.click()
    // skipAdElement.classList.remove('hidden');
}
else {
console.log("cannot find element", skipAdElement)
}