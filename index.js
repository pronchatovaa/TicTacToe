var win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var arrayX=[];
var arrayO=[];
for (var i=0;i<9;i++) {
    document.getElementById("game").innerHTML+="<div class='block' data-id=" + i + "></div>";
}
var count=0;
document.getElementById("game").onclick=function(event){
    if (event.target.className=="block" && event.target.innerText.length==0) {
     if (count%2==0) {
     event.target.innerText="x";  
     arrayX.push(Number(event.target.dataset.id)) ;
    } else {event.target.innerText="o";
    arrayO.push(Number(event.target.dataset.id)) ;
}
    count++;   
    }
    checkWinner();
    
}
function checkWinner(){
//  const blocks=document.getElementsByClassName("block");
//  for (let j=0;j<blocks.length;j++) {
//     if (blocks[j].innerText=="x") {
//         arrayX.push(j);
//     }
//     if (blocks[j].innerText=="o") {
//         arrayO.push(j);
//     }
//  }
//  console.log({arrayX, arrayO});
console.log({x: arrayX, o: arrayO, win});

for (let j=0;j<win.length;j++) {
    if (win[j].every(item => arrayX.indexOf(item) > -1)) {
        alert("Х подебил")
        resetGame()
    };
    if (win[j].every(item => arrayO.indexOf(item) > -1)) {alert("O подебил"); resetGame()}
}
}
function resetGame(){
    arrayX=[];
    arrayO=[];
    count=0;
    const blocks=document.getElementsByClassName("block");
    for (let k=0;k<blocks.length;k++) {
       blocks[k].innerText=""; 
    }
}