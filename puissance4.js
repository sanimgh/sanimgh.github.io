let puissanceGrid = document.getElementById("grid");
let currentPlayer=1;
let rows=6;
let columns=7;


for(let i=0;i<7;i++)
{
    let button=document.createElement('button');
    button.setAttribute("column",i);
    puissanceGrid.append(button);
    button.addEventListener("click",(event)=>{
        let my_column=document.querySelectorAll("li[column=\'"+i+"\']");
        let valid_cell;
        for(let i=my_column.length-1;i>=0;i--)
        {
            if(my_column[i].getAttribute("filled")==0)
            { 
                valid_cell=my_column[i];
                break;
            }
        }
        valid_cell.innerHTML=currentPlayer;
        valid_cell.setAttribute("filled",currentPlayer);
        let isWin = checkWin();

        if(currentPlayer===2)
        {
            currentPlayer=1;
        }
        else
        {
            currentPlayer=2;
        }
    });
}

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
        li.innerHTML=i+ " " +j
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
                alert("win");

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
                alert("win");
                return true;
            }
        }
    }

    /* check left to right diagonals */
    for(let i=0;i<columns;i++)
    {
        for(let j=0;j<columns;j++)
       {
            if(j<rows && (i+j)<columns)
           {
                //console.log(j+" "+(j+i));
                if(array[j][i+j].getAttribute("filled")==currentPlayer)
                {
                    combo+=1;
                }
                else
                {
                    combo=0;
                }
                
                if(combo===4)
                {
                    alert("win");
                    return true;
                }
           } 
       }    
    }

    /* check right to left diagonals*/
    for(let i=columns-1;i>=0;i--)
    {
        for(let j=columns-1;j>=0;j--)
       {
        if((i-j)>=0 && (i-j)<rows)
        {

             if(array[i-j][j].getAttribute("filled")==currentPlayer)
             {
                 combo+=1;
             }
             else
             {
                 combo=0;
             }
             
             if(combo===4)
             {
                 alert("win");
                 return true;
             }
        }  
       }    
    }
    

}

