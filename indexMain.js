let boxes= document.querySelectorAll(".box");
rotationalAngle=0;
let tank = document.createElement('p');
tank.innerHTML='Tank';
let titan = document.createElement('p');
titan.innerHTML='Titan';

function turnLeft(){
rotationalAngle-=90;
}
const sleep = async (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('slept.')
        },time);
    })


}
let rio1=document.createElement('span');

rio1.innerHTML='<img src="image2/triangle1.jpeg" hieght="65" width="65">';
let bullet;
let topPosition;
let maxSpeed;
let maxTop;
let element=document.getElementById("element");
let selectedItem=null;
let canon1=document.getElementById('Canon1');
let canon2=document.getElementById('Canon2');
//Selection
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        
        element.children[i].children[j].addEventListener('click',(event)=>{
              console.log(event.target);  
              //remove selection
        if(selectedItem){
            selectedItem.classList.remove('selected');
        }
        removingHighlights();
        
        //select the clicked value
        selectedItem=event.target;
        selectedText=event.target.innerHTML;
        console.log(selectedText);
        selectedItem.classList.add('selected');
        console.log("box is selected ");
        console.log(i,j);
       
        let clickedElement=element.children[i].children[j].id;
        if((clickedElement=='Tank1' || clickedElement=='Riochet1'|| clickedElement=='Titan1' ||clickedElement=='SemiRiochet1' || clickedElement=='Canon1' )){
            let name;
            if(selectedItem.matches('.mark')){
                name=selectedItem
            }
            else if(selectedItem.matches('.rio')){
                name=selectedItem;
            }
            else{
              name=selectedItem.children[0];
            }
            //firstRow
         if(i===0 && j!==0 && j!==7  ){
            for(let k=i;k<=i+1;k++){
                for(let l=j-1;l<=j+1;l++){
                        let block=element.children[k].children[l].id;
                        
                      if(block!='Tank1'&& block!='Titan1' && block!='Riochet1' && block!='SemiRiochet1' && block!='Canon1'){
                       element.children[k].children[l].classList.add('selected');
                       if(Array.from(document.getElementsByClassName('selected')).length != 0){
                          Array.from(document.getElementsByClassName('selected')).forEach(highlight=>{
                            highlight.addEventListener('click',(e)=>{
                                console.log(event.target);
                                bulletDown();
                              
                                e.target.setAttribute('id',`${clickedElement}`);
                                e.target.append(name);
                               
                                event.target.removeAttribute('id',`${element.children[i].children[j].id}`);
                                e.target.classList.add('Red');
                                event.target.classList.remove('Red');
                                event.target.innerHTML=''
                                
                                
                            })
                          })
                       }
                      }
                    
                }
            }
         }
       
         if(i===0 && j===0){
            {
                for(let k=i;k<=i+1;k++){
                    for(let l=j;l<=j+1;l++){
                        let block=element.children[k].children[l].id;
                        if(block!='Tank1'&& block!='Titan1' && block!='Riochet1' && block!='SemiRiochet1' && block!='Canon1'){
                         element.children[k].children[l].classList.add('selected');
                         if(Array.from(document.getElementsByClassName('selected')).length != 0){
                            Array.from(document.getElementsByClassName('selected')).forEach(highlight=>{
                              highlight.addEventListener('click',(e)=>{
                                  console.log(e.target);
                                  console.log(event.target);
  
                                  e.target.setAttribute('id',`${clickedElement}`);
                                e.target.append(name);
                               
                                event.target.removeAttribute('id',`${element.children[i].children[j].id}`);
                                e.target.classList.add('Red');
                                event.target.classList.remove('Red');
                                event.target.innerHTML=''
                                
                                  
                              })
                            })
                         }
                        }
                        
                    }
                }
             }
         }
         if(i===0 && j===7){
            {
                for(let k=i;k<=i+1;k++){
                    for(let l=j-1;l<=j;l++){
                        let block=element.children[k].children[l].id;
                        if(block!='Tank1'&& block!='Titan1' && block!='Riochet1' && block!='SemiRiochet1' && block!='Canon1'){
                         element.children[k].children[l].classList.add('selected');
                         if(Array.from(document.getElementsByClassName('selected')).length != 0){
                            Array.from(document.getElementsByClassName('selected')).forEach(highlight=>{
                              highlight.addEventListener('click',(e)=>{
                                  console.log(e.target);
                                  console.log(event.target);
  
                                  e.target.setAttribute('id',`${clickedElement}`);
                                  e.target.append(name);
                                 
                                  event.target.removeAttribute('id',`${element.children[i].children[j].id}`);
                                  e.target.classList.add('Red');
                                  event.target.classList.remove('Red');
                                  event.target.innerHTML=''
                                  
                                  
                              })
                            })
                         }
                        }
                    }
                }
             }
         }
         if(i>0 && i<7 &&j>0 && j<7){
               
            for(let k=i-1;k<=i+1;k++){
                for(let l=j-1;l<=j+1;l++){
                    let block=element.children[k].children[l].id;
                    if(block!='Tank1'&& block!='Titan1' && block!='Riochet1' && block!='SemiRiochet1' && block!='Canon1'){
                     element.children[k].children[l].classList.add('selected');
                     if(Array.from(document.getElementsByClassName('selected')).length != 0){
                        Array.from(document.getElementsByClassName('selected')).forEach(highlight=>{
                          highlight.addEventListener('click',(e)=>{
                          e.target.setAttribute('id',`${clickedElement}`);
                          e.target.append(name);
                              event.target.innerHTML=''
                              event.target.removeAttribute('id',`${clickedElement}`);
                              e.target.classList.add('Red');
                              event.target.classList.remove('Red');
                              
                          })
                        })
                     }
                    }

                }
            }
        
     }

        }
        else{
            removingHighlights();
        }
        
       
        if((clickedElement=='Tank2' || clickedElement=='Riochet2'|| clickedElement=='Titan2' ||clickedElement=='SemiRiochet2' || clickedElement=='Canon2' )){
            if(i===7 && j!==0 && j!==7){
                for(let k=i-1;k<=i;k++){
                    for(let l=j-1;l<=j+1;l++){
                            let block=element.children[k].children[l].id;
                          if(block!='Tank2'&& block!='Titan2' && block!='Riochet2' && block!='SemiRiochet2' && block!='Canon2'){
                            console.log(element.children[k].children[l].id);
                            element.children[k].children[l].innerHTML='<div class="selected"></div>';
                            element.children[k].children[l].addEventListener('click',()=>{
                                removingHighlights();
                                bulletUp();
                                element.children[k].children[l].style.backgroundColor="rgb(203, 124, 19)";
                                element.children[k].children[l].setAttribute('id',`${clickedElement}`);
                                element.children[k].children[l].innerHTML=element.children[i].children[j].innerHTML;
                                element.children[i].children[j].innerHTML=' ';
                                element.children[i].children[j].removeAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].classList.add('Blue');
                                element.children[k].children[l].style.backgroundColor=" rgb(4, 52, 100)";
                                element.children[i].children[j].classList.remove('Blue');
                                console.log(element.children[k].children[l].id);
                            })
                          }
                        
                    }
                }
             }
             if(i===7 && j===0){
                for(let k=i-1;k<=i;k++){
                    for(let l=j;l<=j+1;l++){
                            let block=element.children[k].children[l].id;
                          if(block!=='Tank2'&& block!=='Titan2' && block!=='Riochet2' && block!=='SemiRiochet2' && block!=='Canon2'){
                            console.log(element.children[k].children[l].id);
                            element.children[k].children[l].innerHTML='<div class="selected"></div>';
                            element.children[k].children[l].addEventListener('click',()=>{
                                removingHighlights();
                                bulletUp();
                                element.children[k].children[l].style.backgroundColor="rgb(203, 124, 19)";
                                element.children[k].children[l].setAttribute('id',`${clickedElement}`);
                                element.children[k].children[l].innerHTML=element.children[i].children[j].innerHTML;
                                element.children[i].children[j].innerHTML=' ';
                                element.children[i].children[j].removeAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].classList.add(' Blue');
                                element.children[k].children[l].style.backgroundColor=" rgb(4, 52, 100)";
                                element.children[i].children[j].classList.remove('Blue');
    
                            })
                          }
                        
                    }
                }
             }
             if(i===7 && j===7){
                for(let k=i-1;k<=i;k++){
                    for(let l=j-1;l<=j;l++){
                            let block=element.children[k].children[l].id;
                          if(block!='Tank2'&& block!='Titan2' && block!='Riochet2' && block!='SemiRiochet2' && block!='Canon2'){
                            console.log(element.children[k].children[l].id);
                            element.children[k].children[l].innerHTML='<div class="selected"></div>';
                            element.children[k].children[l].addEventListener('click',()=>{
                                bulletUp();
                                removingHighlights();
                                element.children[k].children[l].style.backgroundColor="rgb(203, 124, 19)";
                                element.children[k].children[l].setAttribute('id',`${clickedElement}`);
                                element.children[k].children[l].innerHTML=element.children[i].children[j].innerHTML;
                                element.children[i].children[j].innerHTML=' ';
                                element.children[i].children[j].removeAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].classList.add('Blue');
                                element.children[k].children[l].style.backgroundColor=" rgb(4, 52, 100)";
                                element.children[i].children[j].classList.remove('Blue');
                                console.log(element.children[k].children[l].id);
                            })
                          }
                        
                    }
                }
             }
             if(i>0 && i<7 &&j>0 && j<7){
               
                for(let k=i-1;k<=i+1;k++){
                    for(let l=j-1;l<=j+1;l++){
                        let block=element.children[k].children[l].id;
                          if(block!='Tank2'&& block!='Titan2' && block!='Riochet2' && block!='SemiRiochet2' && block!='Canon2'){
                            console.log(element.children[k].children[l].id);
                            element.children[k].children[l].innerHTML='<div class="selected"></div>';
                            element.children[k].children[l].addEventListener('click',()=>{
                                bulletUp();
                                removingHighlights();
                                element.children[k].children[l].style.backgroundColor="rgb(203, 124, 19)";
                                element.children[k].children[l].setAttribute('id',`${clickedElement}`);
                                element.children[k].children[l].innerHTML=element.children[i].children[j].innerHTML;
                                element.children[i].children[j].innerHTML=' ';
                                element.children[i].children[j].removeAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].classList.add('Blue');
                                element.children[k].children[l].style.backgroundColor=" rgb(4, 52, 100)";
                                element.children[i].children[j].classList.remove('Blue');
                                console.log(element.children[k].children[l].id);
                            })
                          }
                    }
                }
            
         }

           
           
        }
      
      
     
        
        })
    }
}



function removingHighlights(){
let highlighted=document.getElementsByClassName("selected");
Array.from(highlighted).forEach((box)=>{
    box.classList.remove('selected');
})
}
let rotation1 = 0;
let rotation2 = 0;

const RightBtn=document.getElementById("right");
const LeftBtn=document.getElementById("left");
const RightBtn1=document.getElementById("right2");
const LeftBtn1=document.getElementById("left2");
RightBtn1.addEventListener('click',()=>{
    if(selectedItem){
      if(rotation2 < 180){
        selectedItem.style.transform =`rotate(${rotation2+90}deg)`;
        if(rotation2!=180){
            rotation2+=90;
        }
      }
      else{
        rotation2=90;
      }
      console.log("element is rotated");
      console.log(rotation2+"rotation2");
    }
    else{
        console.log("No item is selected");
    }
});
//selecting our elements
function selectingElement(){
    for(let i=0 ; i<8 ;i++){
        for(let j=0;j<8;j++){
            let selectedElement=element.children[i].children[j];
            let block = element.children[i].children[j].id;
            if(block=='Tank1' || block=='Titan1' || block=='Canon1' || block=='Riochet1' || block=='SemiRiochet1'){
               selectedElement.addEventListener('click',()=>{
                for(let k=i-1;k<=i+1;k++){
                    for(let l=j-1;l<=j+1;l++){
                        let current= element.children[k].children[l].id;
                       if(k!==i || l!==j){
 if(current!='Tank1'|| current!='Titan1' || current!='Canonn1'|| current!='Riochet1' || current1!='SemiRiochet1'){
                            console.log(element.children[k].children[l].id);
                            element.children[k].children[l].innerHTML='<div class="selected"></div>';
                            element.children[k].children[l].addEventListener('click',()=>{
                                removingHighlights();
                                bulletDown();
                                element.children[k].children[l].style.backgroundColor="rgb(203, 124, 19)";
                                element.children[k].children[l].setAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].innerHTML=element.children[i].children[j].innerHTML;
                                element.children[i].children[j].innerHTML=' ';
                                element.children[i].children[j].removeAttribute('id',`${element.children[i].children[j].id}`);
                                element.children[k].children[l].classList.add('Red');
                                element.children[k].children[l].style.backgroundColor="rgb(202, 31, 31)";
                                element.children[i].children[j].classList.remove('Red');
                                
                            })
                        }
                    }
                }
               }
               }
               )
            }
        }
    }
}


RightBtn.addEventListener('click',()=>{
    
    if(selectedItem){

      if(rotation1 < 450){
        selectedItem.style.transform = `rotate(${rotation1+90}deg)`;
        if(rotation1!=450){
            rotation1+=90
        }
        else{
            rotation1=0;
        }
        console.log("item rotated right");
        console.log(rotation1);
      }
     else{
        rotation1 = 0;
     }
     
    }
  
})

LeftBtn.addEventListener('click',()=>{
    if(selectedItem){
        selectedItem.classList.toggle('rotatedLeft');
        console.log("item rotated left");
    }
    else{
        console.log("No item is selected")
    }
})


async function bulletUp(){
  bullet = document.createElement('div');
  bullet.classList.add('ball');
  for(let i=0 ;i<8 ;i++){
    for(let j=0;j<8;j++){
        if(element.children[i].children[j]=== canon2){
            console.log(i,j);
            for(let k=i; k>=0;k--){
                await sleep(100);
                element.children[k].children[j].append(bullet);
                if(k==0){
                    element.children[k].children[j].removeChild(bullet);
                    winPlayer.innerHTML = "Blue Wins"
                   element.append(winPlayer);
                  }
                if(element.children[k].children[j].id=='Riochet1' ){
                    element.children[k].children[j].removeChild(bullet);
                    if(rotation1==90 || rotation1==450){
                        bulletRight(element.children[k].children[j].id);
                    }
                    else if(rotation1==180){
                        bulletLeft(element.children[k].children[j].id);
                    }
                    else{
                        break;
                    }
                    break;
                }
                
            }
        }
    }
  }
}

async function bulletDown(){
    console.log("down")
    bullet = document.createElement('div');
    bullet.classList.add('ball');
    for(let i=0 ;i<8 ;i++){
      for(let j=0;j<8;j++){
          if(element.children[i].children[j]=== canon1){
              console.log(i,j);
              for(let k=i; k<8;k++){
                  await sleep(100);
                 
                    element.children[k].children[j].append(bullet);
                 
                 
                  if(element.children[k].children[j].id=='Riochet1' ){
                    element.children[k].children[j].removeChild(bullet);
                    if(rotation1==0 || rotation1==360){
                        bulletRight(element.children[k].children[j].id);
                    }
                    else if(rotation1==270){
                        bulletLeft(element.children[k].children[j].id);
                    }
                    else{
                        break;
                    }
                    break;
                }
                if(element.children[k].children[j].id=='Riochet2' ){
                    element.children[k].children[j].removeChild(bullet);
                    bulletRight(element.children[k].children[j].id);
                }
                 if(k==7){
                     element.children[k].children[j].removeChild(bullet);
              }
               
          }
      }
    }
  }
}

async function bulletLeft(id){
    console.log('left');
    bullet = document.createElement('div');
    bullet.classList.add('ball');
    for(let i=0 ; i<8; i++){
        for(let j=0;j<8;j++){
           if(element.children[i].children[j].id==id ){
            console.log(i,j);
            for(let k=j ; k>=0 ; k--){
                await sleep(100);
                element.children[i].children[k].append(bullet);
                if(element.children[i].children[k].id=='Riochet2'){
                    element.children[i].children[k].removeChild(bullet);
                    bulletUp1('Riochet2');
                    break;
                }
                if(k==0){
                    element.children[i].children[k].removeChild(bullet);
                  }
            }
           }
        }
    }

}
async function bulletRight(id){
    console.log('left');
    bullet = document.createElement('div');
    bullet.classList.add('ball');
    for(let i=0 ; i<8; i++){
        for(let j=0;j<8;j++){
           if(element.children[i].children[j].id==id ){
            console.log(i,j);
            for(let k=j ; k<8 ; k++){
                await sleep(100);
                if(element.children[i].children[k].id != 'SemiRiochet1'){
                    element.children[i].children[k].append(bullet);
                }
                if(element.children[i].children[k].id == 'SemiRiochet1' ){
                    element.children[i].children[k-1].removeChild(bullet);
                    if(rotation2==90){
                        bulletDown1('SemiRiochet1');
                    }
                    else if(rotation2==0 || rotation2==180){
                        bulletUp1('SemiRiochet1');
                    }
                    
                }
                if(k==7){
                    element.children[i].children[k].removeChild(bullet);
                  }
            }
           }
        }
    }

}

async function bulletUp1(id){
  bullet = document.createElement('div');
  bullet.classList.add('ball');
  for(let i=0 ;i<8 ;i++){
    for(let j=0;j<8;j++){
        if(element.children[i].children[j].id== id){
            console.log(i,j);
            for(let k=i; k>=0;k--){
                await sleep(100);
                element.children[k].children[j].append(bullet);
                if(k==0){
                    element.children[k].children[j].removeChild(bullet);
                }
                if(element.children[k].children[j].id=='Riochet2' ){
                    element.children[k].children[j].removeChild(bullet);
                    bulletRight('Riochet2');
                }
                if(element.children[k].children[j].id=='SemiRiochet2'){
                    element.children[k].children[j].removeChild(bullet);
                    bulletLeft('SemiRiochet2');
                }
                
            }
        }
    }
  }
}

async function bulletDown1(id){
    console.log("down")
    bullet = document.createElement('div');
    bullet.classList.add('ball');
    for(let i=0 ;i<8 ;i++){
      for(let j=0;j<8;j++){
          if(element.children[i].children[j].id== id){
              console.log(i,j);
              for(let k=i; k<8;k++){
                  await sleep(100);
                 
                    element.children[k].children[j].append(bullet);
                 
                 
                  if(element.children[k].children[j].id=='Riochet1' ){
                    element.children[k].children[j].removeChild(bullet);
                    if(rotation1==0 || rotation1==360){
                        bulletRight(element.children[k].children[j].id);
                    }
                    else if(rotation1==270){
                        bulletLeft(element.children[k].children[j].id);
                    }
                    else{
                        break;
                    }
                    break;
                }
                if(element.children[k].children[j].id=='Riochet2' ){
                    element.children[k].children[j].removeChild(bullet);
                    bulletRight(element.children[k].children[j].id);
                }
                if(element.children[k].children[j].id=='SemiRiochet2'){
                    element.children[k].children[j].removeChild(bullet);
                    bulletLeft('SemiRiochet2');
                }
             
              }
          }
      }
    }
  }
