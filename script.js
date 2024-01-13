let createDivmain=document.createElement("div");
createDivmain.setAttribute('class','div1');
document.body.append(createDivmain);


let createDiv=document.createElement("div");
createDiv.setAttribute('class','innerdiv1');
createDivmain.append(createDiv);

let createImg=document.createElement("img");
createImg.setAttribute("src"," ");
createDiv.append(createImg);
createImg.src="tom.jpeg"

let createDiv1=document.createElement("div");
createDiv1.setAttribute('class','innerdiv2');
createDivmain.append(createDiv1);


let createbtn1=document.createElement("button");
createbtn1.setAttribute('id', 'btn1');
createbtn1.innerText="PREVIOUS";
createDiv1.append(createbtn1);

let createbtn2=document.createElement("button");
createbtn2.setAttribute('id','btn2');
createbtn2.innerText="NEXT";
createDiv1.append(createbtn2);

let imageCount=1;
let imageName=["tom1.jpg","tom2.jpg","tom3.jpg","tom4.jpg","tom5.jpg","tom6.jpg","tom7.jpg","tom8.jpg","tom9.jpg","tom10.jpg","tom11.jpg","tom12.jpg","tom13.jpg","tom14.jpg","tom15.jpg","tom16.jpg","tom17.jpg","tomje.jpeg"];

btn1.addEventListener("click",previous);
btn2.addEventListener("click",next)

function next()
{
    if(imageCount==imageName.length-1)
    {
        imageCount=1
    }
    else
    {
        createDiv.style.backgroundImage=imageName[imageCount];
        imageCount++
        createImg.src=imageName[imageCount];
            
    }

}


function previous()
{
    if(imageCount==1)
    {
        imageCount=imageName.length-1
    }
    else
    {
       createDiv.style.backgroundImage=imageName[imageCount]
       imageCount--
    createImg.src=imageName[imageCount];
    
    }
   
}

// let i=1


// btn1.addEventListener('click',previousFunction)
// function previousFunction(){

//             if(i==1)
//             {
//                 i=12
//             }
//             else{
//                 maindiv.style.backgroundImage=imgs[i];
//                 i=i>imgs.length ? 1 : i-1;
//                 img1.src=imgs[i];
//             }
// }

        // imageCount=imageCount>imageName.length ? 1 : imageCount+1;
        // imageCount=imageCount>imageName.length ? 1 : imageCount-1;
