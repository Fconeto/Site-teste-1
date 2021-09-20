let manha = $("#manha");
let tarde = $(".tarde");
let noite = $(".noite");
let animar = $("#animar");
let um = $(".one");
let dois = $(".two");
let tres = $(".three");

um.click( () => {
    if (tarde.hasClass("anim_r_c")) {
        tarde.toggleClass("anim_r_c").toggleClass("anim_c_r")
        manha.toggleClass("anim_c_l").toggleClass("anim_l_c")
    }
    if(noite.hasClass("anim_r_c")) {
        manha.toggleClass("anim_c_l").toggleClass("anim_l_c")
        tarde.toggleClass("anim_c_l").toggleClass("anim_l_r")
        noite.toggleClass("anim_r_c").toggleClass("anim_c_r")
    }
})

dois.click( () => {
    if (!noite.hasClass("anim_r_c")) {
        tarde.toggleClass("anim_r_c")
        manha.toggleClass("anim_c_l")
    }
    if (manha.hasClass("anim_l_c")) {
        manha.toggleClass("anim_l_c").toggleClass("anim_c_l")
        tarde.toggleClass("anim_c_r").toggleClass("anim_r_c")
        
    }
})

tres.click( () => {
    if (tarde.toggleClass("anim_r_c")) {
        tarde.toggleClass("anim_r_c").toggleClass("anim_c_l")
        noite.toggleClass("anim_r_c")
    }
})



animar.click(function carousel() {anim();})

function anim() {
    manha.toggleClass("anim_c_l")
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
                anim();
                }, 3000);
            }, 6000);
        }, 6000);
}
