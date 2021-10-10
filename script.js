/*
todo:
    set close/open to work based off of link
    apply to all

    so im trying to iterate through both of them but its messed up so thats why its not working
*/

//#region modal stuff

/*
apply for all thought process:
    - have a key value pair for each modal
    - work through key value pair, doing the same process for each
        - for each key val in modals
            - for each key val in each obj
            run process
*/

modal_dicts = {
    tt: {
        modal: document.getElementById("tt_modal"),
        btn: document.getElementsByClassName("tt_open"),
        close: document.getElementById("tt_close")
    },

    twit: {
        modal: document.getElementById("twit_modal"),
        btn: document.getElementsByClassName("twit_open"),
        close: document.getElementById("twit_close")
    },

    cssi: {
        modal: document.getElementById("cssi_modal"),
        btn: document.getElementsByClassName("cssi_open"),
        close: document.getElementById("cssi_close")
    },

    graduation: {
        modal: document.getElementById("graduation_modal"),
        btn: document.getElementsByClassName("graduation_open"),
        close: document.getElementById("graduation_close")
    },

    napalearns: {
        modal: document.getElementById("napalearns_modal"),
        btn: document.getElementsByClassName("napalearns_open"),
        close: document.getElementById("napalearns_close")
    }
}



for(let topic in modal_dicts){
    for(let element in modal_dicts[topic]){
        for(let btn of modal_dicts[topic]["btn"]){
            btn.onclick = function(){
                console.log(modal_dicts[topic]["modal"])
                modal_dicts[topic]["modal"].style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }

        document.addEventListener('keydown', (event) => {
            if(event.keyCode == 27){
                modal_dicts[topic]["modal"].style.display="none";
                document.body.style.overflow = "visible";
            }
        })

        modal_dicts[topic]["close"].onclick = function(){
            modal_dicts[topic]["modal"].style.display = "none";
            document.body.style.overflow = "visible";
        }
        
        document.addEventListener('mousedown', (event) => {
            if(event.target == modal_dicts[topic]["modal"]){
                modal_dicts[topic]["modal"].style.display="none";
                document.body.style.overflow = "visible";
            }
        })
    }
}
// var tt_modal = document.getElementById("tt_modal")
// var tt_btn = document.getElementsByClassName("tt_open")
// var tt_close = document.getElementById("tt_close");


// window.onmousedown = function(event){
//     if(event.target == tt_modal){
//         tt_modal.style.display = "none";
//         document.body.style.overflow = "scroll";

//     }
// }


// var twit_modal = document.getElementById("twit_modal")
// var twit_btn = document.getElementsByClassName("twit_open")
// var twit_close = document.getElementById("twit_close");

// for(let element of twit_btn){
//     element.onclick = function(){
//         twit_modal.style.display = "block";
        
//         new Glide('.glide').mount();
//         document.body.style.overflow = "hidden";
//     }
// }


// document.addEventListener('keydown', (event) => {
//     if(event.keyCode == 27){
//         twit_modal.style.display="none"
//         document.body.style.overflow = "scroll";
//     }
// })

// twit_close.onclick = function(){
//     console.log('test')
//     twit_modal.style.display = "none";T
//     document.body.style.overflow = "scroll";
// }

// window.onmousedown = function(event){
//     if(event.target == twit_modal){
//         twit_modal.style.display = "none";
//         document.body.style.overflow = "scroll";

//     }
// }


// //#endregion