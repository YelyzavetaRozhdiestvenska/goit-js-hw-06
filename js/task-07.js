const inputSlider = document.querySelector(`#font-size-control`);
const inputChangeStyle = document.querySelector(`#text`);

inputSlider.addEventListener(`input`, () => {
    inputChangeStyle.style.fontSize = `${inputSlider.value}px`
});
console.dir(inputChangeStyle);