let bigArray = [];
for (let i = 0; i < 100; i++) {
    let smallArr = [];
    for (let j = 0; j < 50; j++) {
        smallArr.push(Math.floor(Math.random()*2));
    }
    bigArray.push(smallArr);
}
let pare = document.getElementById('par');
for (let i = 0; i < 100; i++) {
    let node = "<div>";
    for (let j = 0; j <50; j++) {
        if(!bigArray[i][j]){
            node += `<div class="h_w"></div>`;
        }
        if(bigArray[i][j]){
            node += `<div class="h_w_c"></div>`;
        }
    }
    node += "</div>";
    pare.innerHTML += node;
}
function rerender(){
    let str = "";
    for (let i = 0; i < 100; i++) {
        let node = "<div>";
        for (let j = 0; j <50; j++) {
            if(!bigArray[i][j]){
                node += `<div class="h_w"></div>`;
            }
            if(bigArray[i][j]){
                node += `<div class="h_w_c"></div>`;
            }
        }
        node += "</div>";
        str += node;
    }
    pare.innerHTML = str;
}
const direction = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
setInterval(() => {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 50; j++) {
            let cnt = 0;
            for (let k = 0; k < 8; k++) {
                 let row = i + direction[k][0];
                 let col = j + direction[k][1];
                 if(row<100 && row>0 && col>0 && col<50){
                    if(bigArray[row][col]) cnt++;
                 }
            }
            if(cnt > 3){
                bigArray[i][j] = 0;
            }
            if(cnt == 3){
                bigArray[i][j] = 1;
            }
            if(cnt < 2){
                bigArray[i][j] = 0;
            }
        }
    }
    rerender();
}, 250);