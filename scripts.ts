// Slider Handler
window.onload = function(): void {
    const sliderOne = document.getElementsByClassName("tangent-slider-top")[0];
    const sliderTwo = document.getElementsByClassName("tangent-slider-bot")[0];
    sliderOne.addEventListener("click", onSliderTopClick);
    sliderTwo.addEventListener("click", onSliderBotClick);
}


function onSliderTopClick(e: Event): void {
    const target = e.target as Element
    const tangent = document.getElementsByClassName("tangent-title-top")[0];
    const content = document.getElementsByClassName("tangent-content-container-top")[0];
    target.classList.toggle("open");
    content.classList.toggle("open");
    tangent.classList.toggle("open");
}

function onSliderBotClick(e: Event): void {
    const target = e.target as Element
    const tangent = document.getElementsByClassName("tangent-title-bot")[0];
    const content = document.getElementsByClassName("tangent-content-container-bot")[0];
    target.classList.toggle("open");
    content.classList.toggle("open");
    tangent.classList.toggle("open");
}

