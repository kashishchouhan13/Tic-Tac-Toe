let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector(".newgame");
let msgContainer=document.querySelector(".message-container");
let msg=document.querySelector(".msg");
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8]
];
let turno=true;
const resetgame=()=>{
    turno=true;
    enableBox();
    msgContainer.classList.add("hide");
};
const enableBox=()=>{
    for(const box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((box) => {
box.addEventListener("click", ()=>{
    if(turno===true){
        box.innerText="O";
        box.style.color="white";
        turno=false;
    }
    else{
        box.innerText="X";
        box.style.color="black";
        turno=true;
    }
   // box.disabled=true;
    checkWinner();
});
})
const showDisabled=()=>{
    for(const box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is${winner}`;
    msgContainer.classList.remove("hide");
    showDisabled();
    
};
const checkWinner=()=>{
    for(pattern of winPattern){
       // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1 !=""&& position2 !=""&&position3 !=""){
            if(position1==position2 && position2==position3){
                showWinner(position1);
            }
        }
    }
};

newBtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


