let manha = $("#manha");
let tarde = $(".tarde");
let noite = $(".noite");
let animar = $("#animar");
let um = $(".one");
let dois = $(".two");
let tres = $(".three");

function call_one() {
    setTimeout(() => {
        if (manha.hasClass("anim_l_c")) {
            dois.click()
        }
        else if (tarde.hasClass("anim_r_c") || tarde.hasClass("anim_l_c")) {
            tres.click()
        }
        else if (noite.hasClass("anim_r_c") || noite.hasClass("anim_rr_c")){
            um.click()
        }
    }, 5000);
}

function call_two() {
    setTimeout(() => {
        if (manha.hasClass("anim_l_c")) {
            dois.click()
        }
        else if (noite.hasClass("anim_r_c") || noite.hasClass("anim_rr_c")){
            um.click()
        }
        else if (tarde.hasClass("anim_r_c") || tarde.hasClass("anim_l_c")) {
            tres.click()
        } 
    }, 5000);
}

function call_three() {
    setTimeout(() => {
        if (manha.hasClass("anim_l_c")) {
            dois.click()
        }
        else if (tarde.hasClass("anim_r_c") || tarde.hasClass("anim_l_c")) {
            tres.click()
        }
        else if (noite.hasClass("anim_r_c") || noite.hasClass("anim_rr_c")) {
            um.click()
        }
    }, 5000);
}


um.click( () => {
    if (tarde.hasClass("anim_r_c")) {
        manha.removeClass("anim_c_l").toggleClass("anim_l_c")
        tarde.removeClass("anim_r_c").removeClass("anim_l_r").toggleClass("anim_c_r")
        call_two();
    }
    else if(noite.hasClass("anim_r_c")) {
        manha.removeClass("anim_c_l").removeClass("anim_c_ll").toggleClass("anim_l_c")
        tarde.removeClass("anim_c_l").removeClass("anim_r_l").toggleClass("anim_l_r")
        noite.removeClass("anim_r_c").toggleClass("anim_c_r")
        call_two();
    }
    else if (noite.hasClass("anim_rr_c")) {
        manha.removeClass("anim_c_ll").toggleClass("anim_l_c")
        tarde.removeClass("anim_r_l").toggleClass("anim_l_r")
        noite.removeClass("anim_rr_c").toggleClass("anim_c_r")
        call_two();
    }
    else if (tarde.hasClass("anim_l_c")) {
        manha.removeClass("anim_c_l").removeClass("anim_c_ll").toggleClass("anim_l_c")
        tarde.removeClass("anim_r_c").removeClass("anim_l_c").toggleClass("anim_c_r")
        call_two();
    }
})

dois.click( () => {
    if (!manha.hasClass("anim_c_l") && !manha.hasClass("anim_l_c") && !manha.hasClass("anim_c_ll")) {
        manha.toggleClass("anim_c_l")
        tarde.removeClass("anim_l_r").toggleClass("anim_r_c")
        noite.removeClass("anim_rr_c").removeClass("anim_c_r")
        call_three();
    }
    else if (manha.hasClass("anim_l_c")) {
        manha.removeClass("anim_l_c").toggleClass("anim_c_l")
        tarde.removeClass("anim_c_r").removeClass("anim_l_r").toggleClass("anim_r_c")
        noite.removeClass("anim_rr_c").removeClass("anim_c_r")
        call_three();
    }
    else if (noite.hasClass("anim_r_c")) {
        tarde.removeClass("anim_c_l").toggleClass("anim_l_c")
        noite.removeClass("anim_r_c").toggleClass("anim_c_r")
        call_three();
    }
    else if (noite.hasClass("anim_rr_c")) {
        tarde.removeClass("anim_r_l").toggleClass("anim_l_c")
        noite.removeClass("anim_rr_c").toggleClass("anim_c_r")
        call_three();
    }
})

tres.click( () => {
    if (tarde.hasClass("anim_r_c")) {
        tarde.removeClass("anim_r_c").toggleClass("anim_c_l")
        noite.removeClass("anim_c_r").toggleClass("anim_r_c")
        call_one();
    }
    else if (!manha.hasClass("anim_c_l") && !manha.hasClass("anim_l_c") && !manha.hasClass("anim_c_ll")) {
        manha.toggleClass("anim_c_ll")
        tarde.toggleClass("anim_r_l")
        noite.toggleClass("anim_rr_c")
        call_one();
    }
    else if (manha.hasClass("anim_l_c")) {
        manha.removeClass("anim_l_c").toggleClass("anim_c_ll")
        tarde.removeClass("anim_l_r").removeClass("anim_c_r").toggleClass("anim_r_l")
        noite.removeClass("anim_c_r").toggleClass("anim_rr_c")
        call_one();
    }
    else if (tarde.hasClass("anim_l_c")) {
        tarde.removeClass("anim_l_c").toggleClass("anim_c_l")
        noite.removeClass("anim_c_r").toggleClass("anim_r_c")
        call_one();
    }
})

// animar.click(function carousel() {anim();})

// function anim() {
//     if (!tarde.hasClass("anim_r_c") && !noite.hasClass("anim_r_c")) {
//         manha.toggleClass("anim_c_l")
//         tarde.toggleClass("anim_r_c")
//         tarde_noite();
//     }
//     else if (tarde.hasClass("anim_r_c")) {
//             tarde.removeClass("anim_r_c").toggleClass("anim_c_l")
//             noite.toggleClass("anim_r_c")
//         noite_manha();
//     }
//     else if (noite.hasClass("anim_r_c")) {
//         manha.removeClass("anim_c_l").toggleClass("anim_l_c")
//         tarde.removeClass("anim_c_l").removeClass("anim_r_l").toggleClass("anim_l_r")
//         noite.removeClass("anim_r_c").toggleClass("anim_c_r")
//         reset();
//     }
// }

// function tarde_noite() {
//     setTimeout(() => {
//         tarde.removeClass("anim_r_c").toggleClass("anim_c_l")
//         noite.toggleClass("anim_r_c")
//         noite_manha();
//     }, 6000);       
// }

// function noite_manha() {
//     setTimeout(() => {
//         manha.removeClass("anim_c_l").toggleClass("anim_l_c")
//         tarde.removeClass("anim_c_l").toggleClass("anim_l_r")
//         noite.removeClass("anim_r_c").toggleClass("anim_c_r") 
//         reset();
//     }, 6000);
// }

// function reset() {
//     setTimeout(() => {
//         manha.removeClass("anim_l_c")
//         tarde.removeClass("anim_l_r")
//         noite.removeClass("anim_c_r")
//         anim();
//         }, 3000);
// }