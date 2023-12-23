//getelementById and getelementByName
    // let element= document.getElementById("myTitle");
    // element.style.backgroundColor= "lightgreen";
    // let fruits=document.getElementsByName("fruits");
    // // console.log(fruits[1]);
    // fruits.forEach(fruit=>{
    //     if(fruit.checked){
    //         console.log(fruit.value);
    //     }
    // })

//getelementByTagName
    // let vegetables= document.getElementsByTagName("li");
    // vegetables[2].style.backgroundColor="lightgreen";
//getElementByClassName
    // let desserts=document.getElementsByClassName("desserts");
    // desserts[1].style.backgroundColor="lightgreen";
//querySelector =allows to get elements with any (classname,id,tag,attribute)
    // let element1=document.querySelector("#mytitle")//for id use #
    // let element2=document.querySelector(".desserts")//for class use . ,querySelector selects only first use ,querySelectorAll to select all
    // let element3=document.querySelector("li")//for selecting with tag
    // let element4=document.querySelector("[for]");//selects first element with for attribute
    // let elements=document.querySelectorAll("li");
    // elements.forEach(element=>{
    //     element.style.backgroundColor="red";
    // })

//DOM traversal
        // .firstElementChild
        // .lastElementChild
        // .parentElement
        // .nextElementSibling
        // .previouslementsibling
        // .children[]
        // Array.from(.children)

    // let element=document.body;
    // let child=element.firstElementChild;
    // child.style.backgroundColor="lightgreen";

    // let element=document.querySelector("#vegetables");
    // let parent=element.parentElement;
    // parent.style.backgroundColor="lightgreen";

    // let element=document.querySelector("#vegetables");
    // let sibling=element.nextElementSibling;
    // sibling.style.backgroundColor="lightgreen";

    // let element=document.querySelector("#fruits");
    // let child=element.lastElementChild;
    // child.style.backgroundColor="lightgreen";
    
    // let element=document.querySelector("#fruits");
    // let child=element.children[1];
    // child.style.backgroundColor="lightgreen";

    // let element=document.querySelector("#dessert");
    // let childrens=Array.from(element.children);
    // console.log(childrens);
    // childrens.forEach( child => {
    //     child.style.backgroundColor="lightgreen";
    // })

// add/change HTML elements
        //.innerHTML (vulnerable to XSS attacks)
        //.textContent(more secure)
    //using innerHTML
        // const nametag=document.createElement("h1");
        // nametag.innerHTML=window.prompt("Enter your name");//vulnerable because input can be entered that activates malicious script
        // document.body.append(nametag);

    //using textcontent
        // const nametag=document.createElement("h2");
        // nametag.textContent=window.prompt("Enter your name");//input is parsed as text only. so more secure
        // document.body.append(nametag);
        
    // const mylist=document.querySelector("#fruits");
    // const listitem=document.createElement("li");
    // listitem.textContent="mango";
    // mylist.append(listitem);
    // mylist.prepend(listitem);
    // mylist.insertBefore(listitem,mylist.getElementsByTagName("li")[3]);

//add/change css properties
    // const title=document.getElementById("mytitle");
    // title.style.backgroundColor="rgb(200,255,200)";//properties are written in camelCase unlike css
    // title.style.fontFamily="consolas";
    // title.style.textAlign="center";
    // title.style.border="2px solid";
    // title.style.display="block";

//events-action that user or browser does
    // const element=document.getElementById("mybutton");
    // element1.onclick=dosomething;
    // function dosomething1(){
    //     alert("You did something");
    // }
    // const element=document.body
    // element2.onload=dosomething;
    // const element3=document.getElementById("mytext");
    // element3.onchange=dosomething
    // const element4=document.getElementById("mydiv");
    // element4.onmouseover=dosomething2;
    // element4.onmouseout=dosomething3;
    // function dosomething2(){
    //     element4.style.backgroundColor="red";
    // }
    // function dosomething3(){
    //     element4.style.backgroundColor="lightgreen";
    // }
    // element4.onmousedown=dosomething3;
    // element4.onmouseup=dosomething2;

//.addeventlistener (event,function,useCapture)
        //can add many event handlers to one element
        //even same event can invoke different functions

    // const innerDiv=document.getElementById("innerdiv");

    // innerDiv.addEventListener("mouseover",changered)
    // innerDiv.addEventListener("mouseout",changegreen)

    // function changered(){
    //     innerDiv.style.backgroundColor="red";
    // }
    // function changegreen(){
    //     innerDiv.style.backgroundColor="lightgreen";
    // }

    // const outerDiv=document.getElementById("outerd

    // innerDiv.addEventListener("click",changeblue)
    // outerDiv.addEventListener("click",changeblue)//useCapture=true allows it to handle the event first,if 2 elements are listening for the same event
    // function changeblue(){
    //     alert(`you selected ${this.id}`);
    //     this.style.backgroundColor="blue";
    // }

//show/hide html elements 
    // const mybutton=document.querySelector("#mybutton");
    // const myImg=document.querySelector("#myimage");
    // // mybutton.addEventListener("click",()=>{
    // //     if(myImg.style.display=="none"){//if hidden
    // //         myImg.style.display="block"
    // //     }
    // //     else{
    // //         myImg.style.display="none"
    // //     }
    // // })
    // mybutton.addEventListener("click",()=>{
    //     if(myImg.style.visibility=="hidden"){
    //         myImg.style.visibility="visible"
    //     }
    //     else{
    //         myImg.style.visibility="hidden"
    //     }
    // })

//detecting keypress
    // // window.addEventListener("keydown",event=>console.log(event.key));
    // let x=0;
    // let y=0;
    // const mydiv=document.getElementById("mydiv");
    // window.addEventListener("keydown",move);
    // function move(event){
    //     switch(event.key){
    //         case "ArrowDown":
    //             y+=20;
    //             mydiv.style.top=y +"px";//keep gap above top by y pixels
    //             break;
    //         case "ArrowUp":
    //             y-=20;
    //             mydiv.style.top=y +"px";
    //             break;
    //         case "ArrowLeft":
    //             x-=20;
    //             mydiv.style.left=x +"px";
    //             break;
    //         case "ArrowRight":
    //             x+=20;
    //             mydiv.style.left=x +"px";
    //             break;
    //         default:
    //             break;
    //         }              
    //     }  

//simple animation
    // const mybutton=document.getElementById("mybutton");
    // const myAnimation=document.getElementById("mydiv");
    // mybutton.addEventListener("click",begin);
    // function begin(){
    //     let timerID = null;
    //     let degrees=0;
    //     let scaleX=1;//100%
    //     let scaleY=1;
    //     let x=0;
    //     let y=0;
    //     timerID=setInterval(frame,5);
    //     function frame(){
    //         if(y>=500 || x>=500 || scaleX<0.01 || scaleY<0.01){
    //             clearInterval(timerID);
    //         }
    //         else{
    //             y+=0.5;
    //             x+=0.5;
    //             scaleX-=0.002;
    //             scaleY-=0.002;
    //             degrees+=3;
    //             myAnimation.style.top=y+"px";
    //             myAnimation.style.left=x+"px";
    //             myAnimation.style.transform = "rotateZ(" + degrees + "deg) rotateY(" + degrees + "deg) rotateX(" + degrees + "deg) scale(" + scaleX + "," + scaleY + ")";
    //         }
    //     }
    // }

//canvas API- for drawing graphics in games,animation,data visualization
    // let canvas=document.getElementById("mycanvas");//painting +frame
    // let context=canvas.getContext("2d");//painting only
    // //DRAW LINES
    //     // context.strokeStyle="purple";
    //     // context.lineWidth=10;
    //     // context.beginPath();
    //     // context.moveTo(0,0);
    //     // context.lineTo(250,250);
    //     // context.lineTo(250,500);
    //     // context.moveTo(500,0);
    //     // context.lineTo(250,250);
    //     // context.stroke();
    // //DRAW  RANDOM TRIANGLE
    //     // context.strokeStyle="purple";
    //     // context.lineWidth=5;
    //     // context.fillStyle="red";
    //     // context.beginPath();
    //     // let x_init=Math.floor(Math.random() * 501);
    //     // let y_init=Math.floor(Math.random() * 501);
    //     // context.moveTo(x_init,y_init);
    //     // context.lineTo(Math.floor(Math.random() * 501),Math.floor(Math.random() * 501));
    //     // context.lineTo(Math.floor(Math.random() * 501),Math.floor(Math.random() * 501));
    //     // context.lineTo(x_init,y_init);
    //     // context.fill();
    //     // context.stroke();
    // //Draw rectangle
    //     // context.fillStyle="yellow";
    //     // context.strokeStyle="red";
    //     // context.fillRect(20,20,300,250);
    //     // context.strokeRect(20,20,300,250);

    // //Draw circles
    //         //.arc(x,y,r,sAngle,eAngle,counterclockwise)
    //     // context.fillStyle="lightblue";
    //     // context.lineWidth=10;
    //     // context.beginPath();
    //     // context.arc(250,250,100,0,2*Math.PI,true);
    //     // context.stroke();
    //     // context.fill();
    // //Draw text
    //     // context.font="50px MV Boli";
    //     // context.fillStyle="Blue";
    //     // context.textAlign="center"
    //     // context.fillText("You win!!",canvas.width/2,canvas.height/2);

//window object
        //interface used to talk ato qwb browser
        //DOM is property of window

    // console.dir(window);
    // label=document.getElementById("mylabel");
    // label.innerHTML=` Inner Window width=${window.innerWidth} and Inner Window Height=${window.innerHeight}`;
    // label2=document.getElementById("mylabel2");
    // label2.innerHTML=` Outer Window width=${window.outerWidth} and Outer Window Height=${window.outerHeight}`;

    // console.log(window.scrollX);
    // console.log(window.scrollY);
    // console.log(window.location.href);//can set to other link
    // console.log(window.location.hostname);
    // console.log(window.location.pathname);

    // const mybutton=document.querySelector("#mybutton")
    // mybutton.addEventListener("click",()=>window.open("https://google.com"));
    // mybutton.addEventListener("click",()=>window.close());//closes current window
    // mybutton.addEventListener("click",()=>window.print());//closes current window

    // window.alert("Hello");
    // window.confirm("Press OK to continue");
    // let age=window.prompt("Enter your age");
    // if(age<18){
    //     window.alert("you must be 18+ to visit this site");
    //     window.close();
    // }

//cookies
        //small text file stored on computer to remember info about user.
        //data is saved in name-value pairs
    // // console.log(navigator.cookieEnabled);
    // // document.cookie="firstName=Kshitiz; expires=Sun, 1 january 2024 12:00:00 UTC; path=/";
    // // document.cookie="lastName=Poudel; expires=Sun, 1 january 2024 12:00:00 UTC; path=/";
    // // console.log(document.cookie);

    // function setCookie(name,value,daysToLive){
    //     const date=new Date();
    //     date.setTime(date.getTime()+(daysToLive*24*60*60*1000));//in milliseconds
    //     let expires="expires="+date.toUTCString();
    //     document.cookie=`${name}=${value};${expires}; path=/`
    // }

    // // setCookie("email","kshitizpoudel18@gmail.com",365);
    // // console.log(document.cookie);
    // // //to delete a cookie set expiration date to already passed date
    // function deleteCookie(name){
    //     setCookie(name,null,null);
    // }
    // // deleteCookie("email");
    // // deleteCookie("firstName");
    // // deleteCookie("lastName");
    // // console.log(document.cookie);
    // function getcookie(name){
    //     const cDecoded=decodeURIComponent(document.cookie);
    //     const cArray=cDecoded.split(";");
    //     let result=null;
    //     cArray.forEach(element=>{//look for our selected cookie with name passed as argument
    //         if(element.indexOf(name)==0){
    //             result=element.substring(name.length+1);
    //         }
    //         return result;
    //     })
    // }
    // // console.log(document.cookie)
    // // console.log(getcookie("firstName"));
    // // console.log(getcookie("email"));
    // const firstText=document.querySelector("#firstText");
    // const lastText=document.querySelector("#lastText");
    // const submitbtn=document.querySelector("#submitbutton");
    // const cookiebtn=document.querySelector("#cookiebutton");

    // submitbtn.addEventListener("click",()=>{
    //     setCookie("firstName",firstText.value,2);
    //     setCookie("lastName",lastText.value,2);
    // })
    // cookiebtn.addEventListener("click",()=>{//poopulate the fields with cookies
    //     firstText.value=getcookie("firstName");
    //     lastText.value=getcookie("lastName");
    // })
