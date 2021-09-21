let circle = $(".circle");
let b_vertical = $(".barra_vertical");
let b_horizontal = $(".barra_horizontal");

circle.click(() => {b_vertical.toggleClass("rota_1")
b_horizontal.toggleClass("rota_2")
console.log("ok")
setTimeout(() => {
    circle.click()
}, 289);})