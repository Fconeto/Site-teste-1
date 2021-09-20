let manha = $("#manha");
let tarde = $(".tarde");
let noite = $(".noite");
let animar = $("#animar");

animar.click(() => {carManha()})

function reset() {
    manha.delay(3000).animate({ right: 0 }, 1500).delay(3000).animate({ right: 0 }, carManha);
    tarde.delay(3000).animate({ left: 600}, 1500);
    noite.delay(3000).animate({ left: 1200 }, 1500);
}

function carManha() {
    console.log("ok");
    manha.animate({ right: 600 }, 2000, carTarde);
    tarde.animate({ left: 0}, 2000)
    noite.animate({ left: 600 })
}

function carTarde() {
    manha.animate({ right: 1200 });
    tarde.delay(3000).animate({left: -600 }, 2000)
    noite.delay(3000).animate({ left: 0 }, 2000, reset)
}