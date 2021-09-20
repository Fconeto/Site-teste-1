let manha = $("#manha");
let tarde = $(".tarde");
let noite = $(".noite");
let animar = $("#animar");
let um = $(".one");
let dois = $(".two");
let tres = $(".three").

animar.click(function carousel() {manha.toggleClass("anim_c_l")
tarde.toggleClass("anim_r_c")
    setTimeout(() => {
        tarde.toggleClass("anim_r_c").toggleClass("anim_c_l")
        noite.toggleClass("anim_r_c")
        setTimeout(() => {
            manha.toggleClass("anim_c_l").toggleClass("anim_l_c")
            tarde.toggleClass("anim_c_l").toggleClass("anim_l_r")
            noite.toggleClass("anim_r_c").toggleClass("anim_c_r")
            setTimeout(() => {
            manha.toggleClass("anim_l_c")
            tarde.toggleClass("anim_l_r")
            noite.toggleClass("anim_c_r")
            carousel();
            }, 3000);
        }, 6000);
    }, 6000);
})


