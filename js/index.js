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
    if(scrollPosition<deltaHeight && scrollPosition>0){
        window.scrollTo(0,0);
        AddClassToFlowArea("position-one");
        console.log("move to section one")
    }
    if(scrollPosition<deltaHeight*2 && scrollPosition>deltaHeight){
        window.scrollTo(0,deltaHeight); 
        AddClassToFlowArea("position-two");
        console.log("move to section two"); 
    }
    if(scrollPosition<deltaHeight*3 && scrollPosition>deltaHeight*2){
        window.scrollTo(0,deltaHeight*2); 
        AddClassToFlowArea("position-three");
        console.log("move to section three"); 
    }
    if(scrollPosition<deltaHeight*4 && scrollPosition>deltaHeight*3){
        window.scrollTo(0,deltaHeight*3); 
        AddClassToFlowArea("position-four");
        console.log("move to section four"); 
    }
}


function DownScrollMove(scrollPosition,deltaHeight) { 
    if (scrollPosition <= deltaHeight && scrollPosition > 100) {
        window.scrollTo(0, deltaHeight);
        AddClassToFlowArea("position-two");
    }
    if (scrollPosition <= deltaHeight * 2 && scrollPosition > deltaHeight + 100) {
        window.scrollTo(0, deltaHeight * 2);
        AddClassToFlowArea("position-three");
    }
    if (scrollPosition <= deltaHeight * 3 && scrollPosition > deltaHeight * 2 + 100) {
        window.scrollTo(0, deltaHeight * 3);
        AddClassToFlowArea("position-four");
    }
}

function AddClassToFlowArea(className){
    flowArea.classList.toggle(flowArea.classList[0]);
    flowArea.classList.add(className); 
}


