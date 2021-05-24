let lastScrollTop = 0;
let flowArea = document.getElementById("flow-area");

window.addEventListener("scroll", function(){ 
   const st = window.pageYOffset || document.documentElement.scrollTop; 
   const scrollPosition = window.scrollY;
   const deltaHeight = document.getElementsByClassName("section-one")["0"].clientHeight; 
   if (st > lastScrollTop){   
        DownScrollMove(scrollPosition,deltaHeight); 
   } else {
       UpScrollMove(scrollPosition,deltaHeight);
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

function UpScrollMove(scrollPosition,deltaHeight){
    if(scrollPosition<deltaHeight-85 && scrollPosition>0){
        window.scrollTo(0,0);
        AddClassToFlowArea("position-one");
        SetScroller(1);
    }
    if(scrollPosition<deltaHeight*2-85 && scrollPosition>deltaHeight){
        window.scrollTo(0,deltaHeight); 
        AddClassToFlowArea("position-two");
        SetScroller(2);
    }
    if(scrollPosition<deltaHeight*3-85 && scrollPosition>deltaHeight*2){
        window.scrollTo(0,deltaHeight*2); 
        AddClassToFlowArea("position-three");
        SetScroller(3);
    }
    if(scrollPosition<deltaHeight*4-85 && scrollPosition>deltaHeight*3){
        window.scrollTo(0,deltaHeight*3); 
        AddClassToFlowArea("position-four");
        SetScroller(4);
    }
}


function DownScrollMove(scrollPosition,deltaHeight) { 
    if (scrollPosition <= deltaHeight && scrollPosition > 85) {
        window.scrollTo(0, deltaHeight);
        AddClassToFlowArea("position-two");
        SetScroller(2);
    }
    if (scrollPosition <= deltaHeight * 2 && scrollPosition > deltaHeight + 85) {
        window.scrollTo(0, deltaHeight * 2);
        AddClassToFlowArea("position-three");
        SetScroller(3);
    }
    if (scrollPosition <= deltaHeight * 3 && scrollPosition > deltaHeight * 2 + 85) {
        window.scrollTo(0, deltaHeight * 3);
        AddClassToFlowArea("position-four");
        SetScroller(4);
    }
}

function AddClassToFlowArea(className){
    flowArea.classList.toggle(flowArea.classList[0]);
    flowArea.classList.add(className); 
}
function SetScroller(position) {
    switch (position) {
        case 1:
            document.getElementById("scr-one").classList.add("selected");
            document.getElementById("scr-two").classList.remove("selected");
            document.getElementById("scr-three").classList.remove("selected");
            document.getElementById("scr-four").classList.remove("selected");
            break;
        case 2:
            document.getElementById("scr-one").classList.remove("selected");
            document.getElementById("scr-two").classList.add("selected");
            document.getElementById("scr-three").classList.remove("selected");
            document.getElementById("scr-four").classList.remove("selected");
            break;
        case 3:
            document.getElementById("scr-one").classList.remove("selected");
            document.getElementById("scr-two").classList.remove("selected");
            document.getElementById("scr-three").classList.add("selected");
            document.getElementById("scr-four").classList.remove("selected");
            break;
        case 4:
            document.getElementById("scr-one").classList.remove("selected");
            document.getElementById("scr-two").classList.remove("selected");
            document.getElementById("scr-three").classList.remove("selected");
            document.getElementById("scr-four").classList.add("selected");
            break;
    }
}

