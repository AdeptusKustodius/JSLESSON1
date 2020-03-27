


    // let cell = document.body.getElementsByClassName("chess");
    // for (let i = 0; i< cell.length; i++){
    //     let innerHtml1 = "";
        
    //     for (let l = 0; l<8; l++){
    //         innerHtml1+='<ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li></ul>';
    //     }
        
    //     cell[i].innerHTML=innerHtml1;
    // }
    // // for (let i = 0; i< cell.length; i++){
    // //     let innerHtml2= "";
    // //     for (let l = 0; l<1; l++){
    // //         innerHtml2+='<div><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li></ul></div>';
    // //     }
    // //     cell[i].innerHTML=innerHtml2;
    // // }


    function drawBoard(){
        let board = document.querySelector('.chess');
        let block;
        let flag = true; //
        
        for(let i=0; i<8; i++){
            
            for(let j=0; j<8; j++){
                
                if(j==0)
                    flag = !flag;   
                
                block = document.createElement('div');
            
                if(flag)
                    block.className='block black';
                else
                    block.className='block white';
                
                //вывел
                board.appendChild(block);
                
                //поменял с черного на белое
                flag = !flag;
            }
        }
    }
     
    drawBoard();