let puissanceGrid = document.getElementById("grid");
let playButtons = document.getElementById("PlayButtons");
let winMsg =  document.getElementById("winMsg");
let currentPlayer=1;
let Victoire = document.createElement("img");
let rows=6;
let columns=7;
let player = document.getElementById("player");
let youWin = document.createElement("h1");
let rejouer = document.createElement("button");
let spantest = document.createElement("span");
rejouer.classList.add("btn");
rejouer.classList.add("btn-primary");
rejouer.innerHTML="Rejouer";

rejouer.appendChild(spantest);
for(let i=0;i<7;i++)
{
    let button=document.createElement('button');
    button.setAttribute("column",i);
    button.className="buttonFill";

    puissanceGrid.append(button);
    button.addEventListener("click",(event)=>{
        let my_column=document.querySelectorAll("li[column=\'"+i+"\']");
        let buttonList=document.querySelectorAll("button");
        let valid_cell;
        for(let i=my_column.length-1;i>=0;i--)
        {
            if(my_column[i].getAttribute("filled")==0)
            { 
                valid_cell=my_column[i];
                if (currentPlayer==1){    
                    my_column[i].style.backgroundColor ="red";
                } else {
                    
                my_column[i].style.backgroundColor ="yellow";
                }
                break;
            }
        }
        
        valid_cell.setAttribute("filled",currentPlayer);
        let isWin = checkWin();
        
        if(isWin===true)
        {
            
            let buttonFill = document.querySelectorAll("button");
            for (buttons of buttonFill){
                buttons.style.visibility="hidden";
            }
            puissanceGrid.style.background="transparent";
            for (let i =0;i<6;i++){
                for (let j=0;j<7;j++){
                    array[i][j].style.backgroundColor="transparent";
                }
            }
            



            if (currentPlayer===1){
                youWin.innerHTML="Les rouges ont gagné !"
                youWin.style.color="red";
                Victoire.src="ressources/khabibWin.gif";
                winMsg.appendChild(Victoire);
                winMsg.appendChild(youWin);
            }else {
                youWin.innerHTML="Les jaunes ont gagné !"
                youWin.style.color="yellow";
                Victoire.src="ressources/mcgregorWin.gif";
                winMsg.appendChild(Victoire);
                winMsg.appendChild(youWin);
            }
            winMsg.appendChild(rejouer);
        } 
        
        let buttonFill = document.querySelectorAll(".buttonFill");
        if(currentPlayer===2)
        {
            currentPlayer=1;
            player.style.color = "red";
            player.innerHTML = "Au tour des rouges.";
            buttonFill.forEach(function(mybutton)
            {
                mybutton.style.background="red";
            });
        }
        else
        {
            player.style.color = "yellow";
            player.innerHTML = "Au tour des jaunes.";
            currentPlayer=2;
            buttonFill.forEach(function(mybutton)
            {
                mybutton.style.background="yellow";
            });
        }
    });
}
    rejouer.addEventListener("click", (event) => {
        
        let buttonFill = document.querySelectorAll("button");
        winMsg.removeChild(Victoire);
        winMsg.removeChild(youWin);
        winMsg.removeChild(rejouer);
        puissanceGrid.style.background="blue";
        for (let i =0;i<6;i++){
            for (let j=0;j<7;j++){
                array[i][j].style.backgroundColor="grey";
                array[i][j].setAttribute("filled", 0);

            }
        }
        for (buttons of buttonFill){
            buttons.style.visibility="visible";
        }
    });

let array=[];
for(let i=0;i<6;i++)
{
    array.push([]);
    for(let j=0;j<7;j++)
    {
        let li=document.createElement('li');
        li.setAttribute("row",i);
        li.setAttribute("column",j);
        li.setAttribute("filled",0);
        puissanceGrid.append(li);
        array[i][j]=li;
    }
}


function checkWin()
{   
    /* check rows*/
    for(let i=0;i<rows;i++)
    {
        let combo=0;
        for(let j=0;j<columns;j++)
        {
            if(array[i][j].getAttribute("filled")==currentPlayer)
            {
                combo+=1;
            }
            else
            {
                combo=0;
            }
            
            if(combo===4)
            {
                return true;
            }

        }
    }

    /* check column */
    for(let i=0;i<columns;i++)
    {
        let combo=0;
        for(let j=0;j<rows;j++)
        {
            
            if(array[j][i].getAttribute("filled")==currentPlayer)
            {
                combo+=1;
            }
            else
            {
                combo=0;
            }
            
            if(combo===4)
            {    
                return true;
            }
        }
    }
    for (let i =rows-1;i>2;i--){
        combo = 0;
        let k = i;
        for(let j = 0; j< columns-3; j++){
            if (array[k][j].getAttribute("filled")==currentPlayer
                && array[k-1][j+1].getAttribute("filled")==currentPlayer
                && array[k-2][j+2].getAttribute("filled")==currentPlayer
                && array[k-3][j+3].getAttribute("filled")==currentPlayer){
                    return true;
                    
            } 
        }
    }
    for (let i =rows-1  ; i>2;i--){
        combo = 0;
        let k = i;
        for(let j = columns-1; j>3; j--){
            if (array[k][j].getAttribute("filled")==currentPlayer
                && array[k-1][j-1].getAttribute("filled")==currentPlayer
                && array[k-2][j-2].getAttribute("filled")==currentPlayer
                && array[k-3][j-3].getAttribute("filled")==currentPlayer){
                    return true;

                } 
        }
    }
    return false;
}