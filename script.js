//#region modal stuff
let modal_dicts = {
    typetester: {
        modal: document.getElementById("tt_modal"),
        btn: document.getElementsByClassName("tt_open"),
        close: document.getElementById("tt_close"),
        link_arg: "typetester",
    },

    twit: {
        modal: document.getElementById("twit_modal"),
        btn: document.getElementsByClassName("twit_open"),
        close: document.getElementById("twit_close"),
        link_arg: "twit",

    },

    cssi: {
        modal: document.getElementById("cssi_modal"),
        btn: document.getElementsByClassName("cssi_open"),
        close: document.getElementById("cssi_close"),
        link_arg: "cssi",
    },

    graduation: {
        modal: document.getElementById("graduation_modal"),
        btn: document.getElementsByClassName("graduation_open"),
        close: document.getElementById("graduation_close"),
        link_arg: "graduation",
    },

    napalearns: {
        modal: document.getElementById("napalearns_modal"),
        btn: document.getElementsByClassName("napalearns_open"),
        close: document.getElementById("napalearns_close"),
        link_arg: "napalearns",
    }
};

const params = new URLSearchParams(window.location.search);
let link_modal = params.get('modal');
console.log(link_modal);
let open_modal_id = null;

let show = function(modal_id, refreshLink=true){ 
    modal_dicts[modal_id]['modal'].style.display = "block";
    document.body.style.overflow = "hidden";

    params.set('modal', modal_dicts[modal_id]['link_arg']);
    if (refreshLink === true){
        window.history.replaceState({}, '', `?${params}`);
    }

    open_modal_id = modal_id;
}

let hide = function(modal_id){
    modal_dicts[modal_id]['modal'].style.display="none";
    document.body.style.overflow = "visible";

    params.delete('modal');
    window.history.replaceState({}, '', `?`);

    open_modal_id = null;
}

if (link_modal){ 
    show(link_modal, false); //opens without refreshing URL
}

//applies onclick events to each of card's elements to open, and onclick events to each 'X' element to close 
for(let modal_id in modal_dicts){
    for(let btn of modal_dicts[modal_id]["btn"]){ // sets any part of modal area to open it
        btn.onclick = function(){
            show(modal_id);
        };
    }

    modal_dicts[modal_id]["close"].onclick = function(){ //closes on X button click button
        hide(modal_id);
    }
}


document.addEventListener('keyup', (event) => { //closes on escape key press
    if(open_modal_id){
        if(event.code === "Escape"){
            hide(open_modal_id);
        }
    }
})
document.addEventListener('mousedown', (event) => { //closes on outside click
    if(open_modal_id){
        if(event.target == modal_dicts[open_modal_id]["modal"]){
            hide(open_modal_id);
        }
    }
})


//#endregion

//#region expand on hover
for (card of document.getElementsByClassName("card")){
    let modal_openers =  card.querySelectorAll(".modal_opener")
    card.addEventListener("mouseover", function(){
        for(let element of modal_openers){
            element.style.transform = "scale(1.02)";
        }
    })

    card.addEventListener("mouseout", function(){
        for(let element of modal_openers){
            element.style.transform = "scale(1)";
        }
    })
}

//#endregion