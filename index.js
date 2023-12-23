//Intro    
    // console.log('Hello Javascript');
    //console.log("its really good");

    // window.alert('i really like javascript')

    // // This is a comment
    // /* This
    //  is 
    //  mulitline 
    //  comment*/

//variables
    // let age;
    // age="2";
    // age=age+1;
    // student=false

    // let firstname="Kshitiz";
    // console.log("Hello",firstname)
    // console.log("You are ",age, "years old");
    // console.log(student)
    // document.getElementById("p1").innerHTML = "Hello " +firstname;
    // document.getElementById("p2").innerHTML = "You are " + age +"years old";
    // document.getElementById("p3").innerHTML = "Enrolled " + student;

//arithmetic expressions
    // let students =20;
    // students= students * 2;
    // console.log(students);
    // extrastudents=students % 7 ;
    // console.log(extrastudents);


//user inputs 
    // let username=window.prompt("Whats your name?"); //EASy wAY
    // console.log(username);
    // let username;
    // document.getElementById("mybutton").onclick = function(){
    //     username = document.getElementById("mytext").value;
    //     console.log(username);
    // } 

//Type conversion
    // let age =window.prompt("how old are you?");
    // console.log(typeof age)
    // age=Number(age)
    // age +=1;
    // console.log("happy birthday ! you are ",age,"years old");
    // console.log(typeof age)

    // let x;
    // let y;
    // let z;
    // x=Number("3.14");
    // y=String(3.14);
    // z=Boolean("Hi");
    // console.log(x,typeof x);
    // console.log(y,typeof y);
    // console.log(z,typeof z);

//constants
    // const pi=3.14159;

    // let radius;
    // let circumference;
    // radius = window.prompt("Enter the radius of a circle");
    // radius=Number(radius);
    // circumference = 2 * pi * radius;
    // console.log("the circumference is ",circumference);

// Math
    // let x=3.14;
    // let y=5;
    // let z=9;
    // x=Math.round(x);
    // console.log(x);
    // // math.floor(),math.ceil(x),math.pow(x,2),math.sqrt(x),math.abs(x)
    // maximum=Math.max(x,y,z);
    // minimum=Math.min(x,y,z);
    // console.log(maximum,minimum)

//Question 1:find hypotenuse of triangle
    // let a;
    // let b;
    // let c;
    // a= window.prompt("Enter side A");
    // a=Number(a);
    // b=window.prompt("Enter side B");
    // b=Number(b);
    // c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    // console.log(c);

    //Alternate solution

    // let a;
    // let b;
    // let c;
    // document.getElementById("SubmitButton").onclick =function(){
    //     a= document.getElementById("aTextBox").value;
    //     a=Number(a);
    //     b= document.getElementById("bTextBox").value;
    //     b=Number(b);
    //     c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    //     document.getElementById("cLabel").innerHTML = "Side C:" + c ;

    //     console.log(c);
    // }

//counter implementation
    // let count = 0;

    // document.getElementById("decreaseButton").onclick = function(){
    //     count-=1;
    //     document.getElementById("countlabel").innerHTML=count;    
    // }
    // document.getElementById("increaseButton").onclick = function(){
    //     count+=1;
    //     document.getElementById("countlabel").innerHTML=count;
    // }
    // document.getElementById("ResetButton").onclick = function(){
    //     count=0;
    //     document.getElementById("countlabel").innerHTML=count;
    // }

//random number generation:dice roll
    // let x;
    // let y;
    // let z;
    // document.getElementById("rollbutton").onclick = function(){

    //     x = Math.floor(Math.random()*6)+1;
    //     y = Math.floor(Math.random()*6)+1;
    //     z= Math.floor(Math.random()*6)+1;

    //     document.getElementById("xlabel").innerHTML = x;
    //     document.getElementById("ylabel").innerHTML = y;
    //     document.getElementById("zlabel").innerHTML = z;
    // }

//string properties and methods
    // let username = "Kshitiz Poudel";
    // console.log(username.charAt(2));
    // console.log(username.length);
    // console.log(username.indexOf('P'));
    // console.log(username.trim());
    // console.log(username.toUpperCase());
    // console.log(username.toLowerCase());
    // console.log(username.replaceAll("i","a"));

//slice method
    // let fullname="Kshitiz Poudel";
    // let firstname;
    // let lastname;
    // //using space to find first and lastname
    // firstname=fullname.slice(0,fullname.indexOf(" "));
    // lastname=fullname.slice(fullname.indexOf(" ")+1);
    // console.log(firstname);
    // console.log(lastname);

//method chaining-calling one method after another in one continious line of code
    // let username="kshitiz";
    // let letter=username.charAt(0).toUpperCase().trim();
    // console.log(letter);

// IF statements
    // let age=45;
    // if(age>=18 & age<=65){
    //     console.log("you are an adult");
    // }
    // else if(age>65){
    //     console.log("you are a senior citizen")
    // }
    // else{
    //     console.log("you are a child")
    // }

//checking the checkbox and radiobox consitions 
    // document.getElementById("mybutton").onclick=function(){
    //     const mycheckbox=document.getElementById("mycheckbox");
    //     const visaBtn=document.getElementById("visabtn");
    //     const mastercardBtn=document.getElementById("mastercardbtn");
    //     const paypalBtn=document.getElementById("paypalbtn");

    //     if(mycheckbox.checked){
    //         console.log("you are subscribed");
    //     }
    //     else{
    //         console.log("you are not subscribed");
    //     }

    //     if(visaBtn.checked){
    //         console.log("you are paying through visa");
    //     }
    //     else if(mastercardBtn.checked){
    //         console.log("you are paying through mastercard");
    
    //     }
    //     else{
    //         console.log("you are paying through paypal");
    //     }
    // }

//switch case
    // let grade = 65;
    // switch(true){
    //     case grade >= 90:
    //         console.log("you did great");
    //         break;
    //     case grade >=70:
    //         console.log("you dissd good");
    //         break;
    //     case grade>=50:
    //         console.log("you passed barely");
    //         break;
    //     case grade>=30:
    //         console.log("you failed");
    //         break;
    //     default:
    //         console.log(grade,"is not a valid grade")
    // }

//logical operators
    // let temp=16;
    // if(temp>0 && temp <30){
    //     console.log("weather is good");
    // }
    // else{
    //     console.log("weather is bad");
    // }
    // if(temp<=0 || temp>30){
    //     console.log("weather is bad");
    // }
    // else{
    //     console.log("weather is good");
    // }

//not operator
    // let temp =15;
    // sunny=true;
    // if(temp>0){
    //     console.log("its warm outside")
    // }
    // else{
    //     console.log("its cold outside")
    // }
    // if(!(temp>0)){
    //     console.log("its cold outside")
    // }
    // else{
    //     console.log("its warm outside")
    // }

//while loop
    // let username="";
    // while(username=="" || username == null){
    //     username=window.prompt("enter your name");
    // }
    // console.log("Hi",username);

//do while loop
    // let username;
    // do{
    //     username=window.prompt("enter your name");
    // }while(username =="" || username== null)

    // console.log("Hello",username);

//for loop
    // for(let i = 1;i <=10; i+=1){
    //     console.log(i)
    // }

//break and continue statements
    //break=breaks out of loop entirely
    //continue=skip an single iteration of loop 
    // for(let i=1;i<=20;i+=1){
    //     if(i==13){
    //         break;
    //     }
    //     console.log(i);
    // }
    // for(let i=1;i<=20;i+=1){
    //     if(i==13){
    //         continue;
    //     }
    //     console.log(i);
    // }

//nested loops
    // for (let i=1;i<=3;i+=1){
    //     for (let j=1;j<=3;j+=1){
    //         console.log(i,j);
    //     }
    // }
    // let symbol=window.prompt("enter a symbol to use");
    // let row=window.prompt("Enter number of rows");
    // let column=window.prompt("Enter number of columns");
    // for (let i=1;i<=row;i+=1){
    //     for (let j=1;j<=column;j+=1){
    //         document.getElementById("myrectangle").innerHTML +=symbol;
    //     }
    //     document.getElementById("myrectangle").innerHTML +="<br>";
    // }

//functions
    // let username="kshitiz";
    // let age =21 ;
    // function singsong(){
    //     console.log("happy birthday");
    //     console.log("happy birthday",username);
    //     console.log("you are ",age,"years old!");
    // }
    // singsong()

//return statement
    // let area;
    // let width;
    // let height;

    // width=window.prompt("Enter width ");
    // height=window.prompt("Enter width ");
    // function getarea(width,height){
    //     result=width*height;
    //     return result;
    // }

    // area=getarea(width,height);
    // console.log("area is ",area); 

//ternary operator-shortcut for if/else
        //takes 3 operands (a condition with ?,expression if true,expression if false)
    // let adult=checkage(21);     
    // function checkage(age){
    //     return age>=18 ?true :false;
    //
    // console.log(adult); 
    // console.log(checkage(13));

//var vs let
    // for(let i=1;i<=5;i+=1){
    //     //console.log(i)
    // }
    // console.log(i); // doesnt work because i is not defined outside the loop
    //                 //variables defined iwth let keyword have limited scope {}

    // for(var i=1;i<=5;i+=1){
    //     //console.log(i)
    // }
    // console.log(i); // var has scope limited to a function(){}
    // function dosomething(){
    //     for(var j=1;j<=5;j+=1){
    //         //console.log(j)
    //     }
        
    // }
    // console.log(j);//doesnt work again. global variable needed

//template literals-delimited with (`)
    // let username ="kshitiz"
    // let items =5;
    // let total =75;
    // console.log("Hello",username);
    // console.log("You have ", items,"items in your cart");
    // console.log("total price is $",total);
    // //using template literals to print the same thing
    // console.log(`Hello ${username}`);
    // console.log(`you have ${items} items in your cart`);
    // console.log(`total price is $${total}`);
    // //alternately
    // text=`Hello ${username}<br>
    // you have ${items} items in your cart<br>
    // total price is $${total}`
    // // console.log(text)
    // document.getElementById("mylabel").innerHTML=text

//toLocaleString method-returns a string with language sensitive representation
        //number.toLocalestring(locale,{options});
        //'locale' =specify that language (undefined =default)
        //'options'=object with formatting options

    // let mynumber=123456.456;
    // let mynumber2=0.76;
    // mynumber=mynumber.toLocaleString("en-US",{style:"currency",currency:"USD"});
    // console.log(mynumber); //output=$123,456.456
    // mynumber2=mynumber2.toLocaleString(undefined, {style:"percent"})
    // console.log(mynumber2)

//number guessing game
    // const answer = Math.floor(Math.random()*10+1);
    // let guesses=0;
    // document.getElementById("Submitbutton").onclick=function(){
    //     let guess=document.getElementById("guessfield").value;
    //     guesses+=1;
    //     if(answer==guess){
    //         alert(`${answer} is the number. It took you ${guesses} guesses`)
    //     }
    //     else if(guess<answer) {
    //         alert(`too small`)
    //     }
    //     else{
    //         alert('too large')
    //     }
    // }
//convert between celcius and fahrenhiet
    // function tocelcius(temp){
    // return (temp-32)*5/9;
    // }
    // function tofahrenheit(temp){
    // return temp*9/5 +32;
    // }
    // document.getElementById("submitbutton").onclick = function(){
    //     let temp=document.getElementById("myinput").value;
    //     temp=Number(temp);

    //     if(document.getElementById("celciusbutton").checked){
    //         document.getElementById("answer").innerHTML=tocelcius(temp) + "°C";
    //     }
    //     else if(document.getElementById("fahrenheitbutton").checked){
    //         document.getElementById("answer").innerHTML=tofahrenheit(temp)+"°F"
    //     }
    //     else{
    //         document.getElementById("answer").innerHTML="select a unit first"
    //     }
    // }

//arrays-variable to store multiple values
    // let animals=["tiger","dog"];
    // let numbers=[2,5,6,7];
    // animals[2]="lion"; //animals.push("lion")
    // animals.pop();
    // animals.unshift("giraffe")
    // animals.shift()
    // console.log(numbers.length);
    // console.log(animals);
    // console.log(numbers[3]);
    // console.log(numbers.indexOf(6));

//looping through array
    // let prices=[5,10,15,20];
    // for(let i=0;i<prices.length;i+=1){
    //     console.log(prices[i]); //iterate forward
    //     //console.log(prices[prices.length-1 -i]);//iterate backwards
    // }
    // //using
    // for(let price of prices){
    //     console.log(price);
    // }
//sorting array 
    // let fruits=["banana","apple","orange","mango"];
    // fruits=fruits.sort().reverse()
    // for (let fruit of fruits){
    //     console.log(fruit)
    // }
//2d arrays = array of arrays
    // let fruits=["apple","orange","banana"];
    // let vegetables=["carrot","onion","potato"];
    // let meat=["egg","chicken"]
    // let grocerylist=[fruits,vegetables,meat]
    // console.log(grocerylist[1][2])

    // for(let list of grocerylist){
    //     for(let item of list){
    //         console.log(item);
    //     }
    // }

//spread operator
    // let numbers=[2,3,5,6,43,7,7];
    // console.log(numbers);
    // console.log(...numbers) ;//spread operator
    // let username ="kshitiz poudel";
    // console.log(...username); // output =k s h i t i z  p o u d e l
    // //why is it useful? lets find max from an array
    // //let maximium=Math.max(numbers)// doesnt work;
    // let maximum=Math.max(...numbers);//works, max function requires individual arguments not an array
    // console.log(maximum);
    // //another example
    // let class1=["ram","shyam","hari"];
    // let class2=["josh","john","jack"]
    // // class1.push(class2);//isnt what is intended
    // // console.log(class1);
    // console.log(class1.push(...class2));
    // console.log(class1);

//rest parameters=represents indefinite number of parameters
        //packs arguments into an array
    // let a=1;
    // let b=2;
    // let c=3;
    // let d=4;
    // let e=5;
    // function sum(a,b){ //adds only 2 numbers
    //     return a+b;
    // }
    // console.log(sum(a,b));
    // function sum2(...numbers){
    //     let total=0;
    //     for (let number of numbers){ 
    //         total+=number;
    //     }
    //     return total;
    // }
    // //alternative defination=function sum2(x,y,...numbers)-->if 2 parameters are compulsarily needed.
    // console.log(sum2(a,b,e,d));//any number of parameters can be passed now

//callback =a function passed as an argument to another function
    //normal implementation
        //  function sum(x,y){
        //     result =x+y;
        //     return result;
        //  }
        //  function displayconsole(output){
        //     console.log(output);
        //  }
        //  function displayDOM(output){
        //     document.getElementById("mylabel").innerHTML= output;
        //  }
        //  displayconsole(sum(5,6));
        //  displayDOM(sum(7,8));

    //implementation using callbacks
        // function displayconsole(output){
        // console.log(output);
        // }
        // function displayDOM(output){
        // document.getElementById("mylabel").innerHTML= output;
        // }

        // sum(3,5,displayconsole);
        // sum(8,7,displayDOM);

        // function sum(x,y,callback){//parameter can be any name not strictly 'callback
        //     let result=x+y;
        //     callback(result);
        // }
    //callbacks ensures that a function doesnt run before some task is completed.in this case output
    //isn't displayed until sum is computed. thus asynchronous coding can be done and helpful for avoiding errors

//foreach method of arrays - array.forEach()-executes a callback for every array element
    // let students=["kshitiz","jack","henry"];
    // students.forEach(capitalisefirst);
    // students.forEach(print);
    // function capitalisefirst(element,index,array){ //3 arguments(element,index,array) are provided not compulsory to use for 'ForEach'
    //     array[index]=element[0].toUpperCase()+element.substring(1);
    // }
    // function print(element){
    //     console.log(element);
    // }  
    // console.log(students);
 
//map method of arrays = execute callback for each element and creates a new array
    // let numbers =[2,3,4,6,7];
    // function cube(element){
    //     return Math.pow(element,3);
    // }
    // function print(element){
    //     console.log(element);
    // }
    // let cubes=numbers.map(cube);
    // cubes.forEach(print);

//array.filter()=cretaes new array with all elements passing a condition
    // let names=["kshitiz","phil","jack","josh"];
    // function checkname(element){
    //     return element.charAt(0)>"j";
    // }
    // function print(element){
    //     console.log(element)
    // }
    // filtered_names=names.filter(checkname);
    // filtered_names.forEach(print);
//array.reduce  = reduce array to a single value
    // let prices=[4,5,67,5,3];
    // let total=prices.reduce(checkout);
    // function checkout(total,element)
    // {
    //     return total+element;
    // }
    // console.log(`the total is : $${total}`);

//sorting arrays
    // let grades=[100,50,45,87,54,21,23,56,45];
    // function descendingsort(x,y){
    //     return y-x; //In JavaScript, the sort() function can take a compare function as an argument. 
    //     //This compare function determines the sort order. If we don’t provide a compare function, 
    //     //the sort() function sorts elements as strings, which might not work as expected for numbers.
    //     //y - x is positive (i.e., y is larger than x), then y will be sorted before x.
    // }
    // function ascendingsort(x,y){
    //     return x-y;
    // }
    // grades=grades.sort(descendingsort);
    // grades.forEach(print);
    // function print(element){
    //     console.log(element);
    // }

//function expression  = function without name,avoid pollute global scope with random function name.
        //maybe tedious to think new function names everytime
    // const greeting = function(){ //store function within variable
    //     console.log("Hello!");
    // }
    // greeting();
    // let count=0;
    // function increasecount(){
    //     count+=1;
    //     document.getElementById("mylabel").innerHTML=count;
    // }
    // function decreasecount(){
    //     count-=1;
    //     document.getElementById("mylabel").innerHTML=count;
    // }

    // with function expressions
    // let count=0;
    // document.getElementById("decreaseButton").onclick=function(){
    //     count-=1;
    //     document.getElementById("mylabel").innerHTML=count
    // }
    // document.getElementById("increaseButton").onclick=function(){
    //     count+=1;
    //     document.getElementById("mylabel").innerHTML=count
    // }

//arrow function-alternative to function expression
    //with function expression
        // const greeting=function(username){
        //     console.log(`Hello ${username}`);
        // }
        // greeting("Kshitiz");
    //with arrow function
        // const greeting=(username)=>{
        // console.log(`Hello ${username}`);
        // }
        // greeting("Kshitiz");
        // //sorting example
        // let numbers=[2,3,5,43,6,3];
        // function print(element){
        //     console.log(element);
        // }
        // numbers.sort((x,y)=>y-x);
        // numbers.forEach((element) =>{
        //     console.log("hi");
        //     console.log(element);
        // });

//shuffle elements of an array
    // let cards=["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
    // console.log(cards);
    // function shuffle(array){
    //     let length=array.length; 
    //     for(let i=0;i<=(length);i+=1){
    //         let rand1=Math.floor(Math.random()*length);
    //         let rand2=Math.floor(Math.random()*length);
    //         temp=array[rand1];
    //         array[rand1]=array[rand2];
    //         array[rand2]=temp;    
    //     }
    //     return array;
    // };
    // cards=shuffle(cards);
    // cards.forEach(card =>console.log(card));

//nested functions-for better security 
    //normal problematic implementation- any function can be accessed before login
        // `let username="kshitiz";
        // let inbox=0;
        // login();
        //displayusername();
        //displayusername()
        // function login(){
        //     displayusername();
        //     displayinbox();
        // }
        // function displayusername(){
        //     console.log(`welcome ${username}`);

        // }
        // function displayinbox(){
        //     console.log(`you have  ${inbox} new messages`);
        // }`

    //nested implementation
        // let username="kshitiz";
        // let inbox=0;
        // login();
        // function login(){
        //     displayusername();
        //     displayinbox();

        //     function displayusername(){
        //         console.log(`welcome ${username}`);
            
        //     }
        //     function displayinbox(){
        //         console.log(`you have  ${inbox} new messages`);
        //     }
        // }
        // displayinbox();//no access to invoke this

//Map- object that holds key-value pair of any data type
    // const store = new Map([
    //     ["t-shirt",20],
    //     ["jeans",30],
    //     ["socks",20]
    // ]);
    // console.log(store);
    // store.forEach((key,value) => console.log(`${value},${key}`));
    // let cart=0;
    // cart+= store.get("jeans");
    // cart+= store.get("socks");
    // console.log(cart);
    // store.set("hat",40);
    // store.delete("hat");
    // console.log(store);
    // console.log(store.has("pant"));
    // console.log(store.size);

//                      OOP starts                  //

//objects
    // const car={
    //     model:"Mustang",
    //     color:"red",
    //     year:2022,

    //     drive :function(){
    //         console.log("car has moved");
    //     },
    //     brake :function(){
    //         console.log("car has stopped")
    //     }
    // }
    // console.log(car.model);
    // console.log(car.color);
    // console.log(car.year);
    // car.drive();
    // car.brake();

    // const car2={
    //     model:"buggati",
    //     color:"red",
    //     year:2021,

    //     drive :function(){
    //         console.log("car2 has moved");
    //     },
    //     brake :function(){
    //         console.log("car2 has stopped")
    //     }
    // }
    // console.log(car2.model);
    // console.log(car2.color);
    // console.log(car2.year);
    // car2.drive();
    // car2.brake();

//this = reference to a particular object
//       object depends on immediate context
    // const car1={
    //     model:"buggati",
    //     color:"red",
    //     year:2021,

    //     drive :function(){
    //         console.log(`you drive the ${model}`); //doesnt work 
    //     }
    // }
    // const car2={
    //     model:"corvette",
    //     color:"blue",
    //     year:2021,

    //     drive :function(){
    //         console.log(`you drive the ${this.model}`); //works here this.model is referring to car2.model the immediate object
    //     }
    // }
    // const car1={
    //     model:"buggati",
    //     color:"red",
    //     year:2021,

    //     drive :function(){
    //         console.log(`you drive the ${this.model}`); //when we define objects using classes, we cant use car1.model or 
    //                                                     //car2.model using this.model is more general. the object which invoked the function 
    //                                                     // is the 'this' object
    //     }
    // }

    // car2.drive();
    // car1.drive();

    // console.log(this); //here this refers to window object because the immediate context is window
    // this.name="mywindow" //window.name
    // console.log(this);

//class 
    // class player{
    //     score=0;

    //     pause(){
    //         console.log("You paused the game");
    //     }
    //     exit(){
    //         console.log("You exited the game");
    //     }
    // }
    // const player1=new player();
    // console.log(player1.score);
    // player1.score+=1;
    // console.log(player1.score);
    // player1.pause();
    // player1.exit();
    // const player2=new player()
    // console.log(player2.score);
    // player2.exit()

//Constructor-special method accepts arguments and assigns properties
        // if desired attributes value can be set while creating objects no need
        //to set it as a initial value and change it later
    // class Student{
    //     constructor(name,age,gpa){ //constructor
    //         this.name=name;
    //         this.age=age;
    //         this.gpa=gpa;
    //     }
    
    //     Study(){   //other methods
    //         console.log(`${this.name} is studying`);
    //     }
    // }
    // const student1=new Student("bob",30,3.6);
    // console.log(student1.name);
    // console.log(student1.age);
    // console.log(student1.gpa);
    // student1.Study()
    // const student2=new Student("Jill",39,2.9);
    // console.log(student2.name);
    // console.log(student2.age);
    // console.log(student2.gpa);
    // student2.Study()

//Static keyword -->belongs to class itself not to objects
        //static properties=useful for caches,fixed configuration
        //static methods =  useful for utility functions

    // class car{
    //     numberofCars=0;
    //     constructor(model){
    //         this.model=model;
    //         this.numberofCars+=1;

    //     }
    // }
    // const car1=new car("corvette");
    // const car2=new car("BMW");
    // const car3=new car("Mustang");
    // console.log(car1.numberofCars); //1
    // console.log(car1.numberofCars); //1
    // console.log(car1.numberofCars); //1
    //here since each car has its own numberofCars attribute each of them are incremented to 1
    //to count total number of cars we should have something that only the class has and not
    //its objects
    // class car{
    //     static numberofCars=0;
    //     constructor(model){
    //         this.model=model;
    //         car.numberofCars+=1;
    //     }

    //     static startrace(){
    //         console.log("3...2...1...Go!!!");
    //     }
    // }
    // const car1=new car("corvette");
    // const car2=new car("BMW");
    // const car3=new car("Mustang");
    // console.log(car.numberofCars); //3
    // car.startrace();
    // //Math.round() is example of static method. we dont need to create objects
    // //to use it.

//Inheritance-->child class inherits methods and properties from parent class
    // //without inheritance code is repetative.Example below:
    // class Rabbit{
    //     alive =true;
    //     name="rabbit";
    //     eat(){
    //         console.log(`This ${this.name} is eating`)
    //     }
    //     sleep(){
    //         console.log(`This ${this.name} is running`)
    //     }
    //     repeat(){
    //         console.log(`This ${this.name} is repeating`)
    //     }
    // }
    // class Fish{
    //     alive =true;
    //     name="Fish";
    //     eat(){
    //         console.log(`This ${this.name} is eating`)
    //     }
    //     sleep(){
    //         console.log(`This ${this.name} is running`)
    //     }
    //     swim(){
    //         console.log(`This ${this.name} is swimming`)
    //     }
    // }
    // class Hawk{
    //     alive =true;
    //     name="Hawk";
    //     eat(){
    //         console.log(`This ${this.name} is eating`)
    //     }
    //     sleep(){
    //         console.log(`This ${this.name} is running`)
    //     }
    //     Fly(){
    //         console.log(`This ${this.name} is Flying`)
    //     }
    // }
    // //With inheritance
    
    // class Animal{
    //     alive =true;
    //     eat(){
    //         console.log(`This ${this.name} is eating`)
    //     }
    //     sleep(){
    //         console.log(`This ${this.name} is sleeping`)
    //     }
    // }
    // class rabbit extends Animal{
    //     name="Rabbit"

    //     repeat(){
    //         console.log(`This ${this.name} is repeating`)
    //     }
    // }
    // class Fish extends Animal{
    //     name="Fish";

    //     swim(){
    //         console.log(`This ${this.name} is swimming`)
    //     }
        
    // }
    // class Hawk extends Animal{
    //     name="Hawk"

    //     Fly(){
    //         console.log(`This ${this.name} is Flying`)
    //     } 
    // }
    // const rabbit1=new rabbit();
    // const fish1=new Fish();
    // const hawk1=new Hawk();

    // console.log(rabbit1.alive);
    // rabbit1.eat();
    // rabbit1.repeat();
    // rabbit1.sleep();

//super keyword -referes to parent class. used to invoke constructor of parent class
    //without using super
        // class animal{
        // }
        // class rabbit extends animal{
        //     constructor(name,age,runspeed){
        //         this.name=name;
        //         this.age=age;
        //         this.runspeed=runspeed;
        //     }
        // }
        // class fish extends animal{
        //     constructor(name,age,swimspeed){
        //         this.name=name;
        //         this.age=age;
        //         this.swimspeed=swimspeed;
        //     }
        // }
        // class hawk extends animal{
        //     constructor(name,age,flyspeed){
        //         this.name=name;
        //         this.age=age;
        //         this.flyspeed=flyspeed;
        //     }
        // }
        // const rabbit1=new rabbit("rabbit1",1,34);
        // const fish1=new rabbit("fish1",2,20);
        // const hawk1=new rabbit("hawk1",3,40);
        // //doesnt work because if child classes have constructors,we must invoke constructor of parent class(for code reusability)

    //using super
        // class animal{
        //     constructor(name,age){
        //         this.name=name;
        //         this.age=age;
        //     }
        // }
        // class rabbit extends animal{
        //     constructor(name,age,runspeed){
        //         super(name,age)
        //         this.runspeed=runspeed;
        //     }
        // }
        // class fish extends animal{
        //     constructor(name,age,swimspeed){
        //         super(name,age)
        //         this.runspeed=swimspeed;
        //     }
        // }

        // class hawk extends animal{
        //     constructor(name,age,flyspeed){
        //         super(name,age)
        //         this.flyspeed=flyspeed;
        //     }
        // }
        // const rabbit1=new rabbit("rabbit1",1,34);
        // const fish1=new fish("fish1",2,20);
        // const hawk1=new hawk("hawk1",3,40);
        // console.log(rabbit1.age)
        // console.log(hawk1.flyspeed)
    //child class constructor must compulsarily use super to invoke parent constructor

//getters and setters
//getter-binds object property to a function when that property is acccessed
//setters-bind an object property to a fucntion when property is assigned a value
    // class car{
    //     constructor(power){
    //         this._gas=25;
    //         this._power=power;//_is used to denote protected property 
    //     }
    //     get power(){//when power property is accessed it invokes this function and we can also add extra functionality inside it
    //         return `${this._power}hp`;
    //     }
    //     get gas(){
    //         return this._gas
    //     }
    //     set gas(value){
    //         if(value>50){
    //             value=50;
    //         }
    //         else if(value<0){
    //             value=0;
    //         }
    //         this._gas=value; //writable
    //     }
    // }
    // let car1=new car(450);
    // car1.gas=300;
    // console.log(car1.power);
    // console.log(car1.gas);

//objects as arguments
    // class car{
    //     constructor(model,year,color){
    //         this.model=model;
    //         this.year=year;
    //         this.color=color;
    //     }
    // }
    // const car1=new car("Mustang",2020,"red");
    // const car2=new car("Mustang",2021,"blue");
    // const car3=new car("corvette",2022,"black");

    // function displayinfo(automobile){
    //     console.log(automobile.year);
    //     console.log(automobile.color);
    //     console.log(automobile.model);
    // }
    // displayinfo(car1);
    // displayinfo(car2);

    // function changeColor(car,color){
    //     car.color=color;
    // }
    // changeColor(car2,"gold");
    // displayinfo(car2);

//array of objects
    // class car{
    //     constructor(model,year,color){
    //         this.model=model;
    //         this.year=year;
    //         this.color=color;
    //     }
    //     drive(){
    //         console.log(`you drive the ${this.model}`);
    //     }
    // }
    // const car1=new car("Mustang",2020,"red");
    // const car2=new car("Mustang",2021,"blue");
    // const car3=new car("corvette",2022,"black");
    // const car4=new car("ferrari",2022,"yellow");
    // const cars=[car1,car2,car3,car4];
    // console.log(cars[0]);
    // console.log(cars[0].model);
    // cars[0].drive()
    // function startrace(cars){
    //     for(const car of cars){
    //         car.drive()
    //     }
    // }
    // startrace(cars)

//anonymous object-object without name.dont have direct access,typically stored inside array
    // class card{
    //     constructor(value,suit){
    //         this.value=value;
    //         this.suit=suit;
    //     }
    //     drive(){
    //         console.log(`you drive the ${this.model}`);
    //     }
    // }

    // let cards=[new card("A","Hearts"),new card("A","Spades"),new card("A","Diamonds"),new card("A","Clubs"),
    //           new card("2","Hearts"),new card("2","Spades"),new card("2","Diamonds"),new card("2","Clubs")];

    // console.log(cards[1].value +" "+cards[1].suit);
    // cards.forEach(card => console.log(card.value +" "+card.suit));

//error handling -errors are objects with description of something went wrong
    //eg,cant open file,lose connection,typeerror etc.
    //surround dangerous code(code with chances of error with try block)
        // try{
        //     let x=window.prompt("enter a number");
        //     x=Number(x);
        //     if(isNaN(x)) throw "that wasnt a number"
        //     if(x=="") throw "that was empty"
        //     console.log(`${x} is a number`);
        // }
        // catch(error){
        //     console.log(error);
        // }
        // finally{
        //     console.log("this always executes");
        // }

//setTimeout() = invokes a function after number of miliseconds
                //asynchronous function(doesnt pause execution)
    // let item="crytpocurrency";
    // let price=420

    // function firstmessage(){
    //     alert(`Buy this course for $500!!`);
    // }
    // function secondmessage(item,price){
    //     alert(`buy this ${item} for $${price}`);
    // }
    // function thirdmessage(){
    //     alert(`Do it!!`);
    // }
    // let timer1=setTimeout(firstmessage,2000);//function name as callback, number of milliseconds
    // let timer2=setTimeout(secondmessage,4000,item,price);
    // let timer3=setTimeout(thirdmessage,6000);

    // document.getElementById("myButton").onclick=function(){
    //     clearTimeout(timer1); //clear all timeouts if user buys course
    //     clearTimeout(timer2);
    //     clearTimeout(timer3);
    //     alert(`Thanks for buying the course`);
    // }

//setInterval() = invokes a function repeatedly after a number of milliseconds
                //also asynchronous 
    // let count =0;
    // let max =window.prompt("count upto what number?");
    // max=Number(max);
    // function Increasecount(){
    //     count+=1;
    //     console.log(count);
    //     if(count>=max){
    //         clearInterval(mytimer);
    //     }
    // }
    // const mytimer=setInterval(Increasecount,1000)

//Date objects
    // let date=new Date()
    // document.getElementById("mylabel").innerHTML=formatdate(date)+ " "+formattime(date);
    // let year=date.getFullYear();
    // console.log(year)
    // console.log(date);

    // function formatdate(date){
    //     let year=date.getFullYear();
    //     let month=date.getMonth();
    //     let day=date.getDate();
    //     return `${month+1}/${day}/${year}`
    // }
    // function formattime(date){
    //     let hours=date.getHours();
    //     let minutes=date.getMinutes();
    //     let seconds=date.getSeconds();
    //     let AMorPM=hours>=12? "pm" :"am"
    //     hours = (hours % 12) || 12
    //     return `${hours}:${minutes}:${seconds} ${AMorPM}`
    // }

//clock program
    // const mylabel=document.getElementById("mylabel");
    // update();
    // setInterval(update,1000);
    // function update(){
    //     let date=new Date();
    //     mylabel.innerHTML=formattime(date);

    //     function formattime(date){
    //         let hours=date.getHours();
    //         let minutes=date.getMinutes();
    //         let seconds=date.getSeconds();
    //         let amorpm=hours>=12? "pm" :"am";
    //         hours=(hours%12) || 12;
    //         minutes=formatzeroes(minutes);
    //         seconds=formatzeroes(seconds);
    //         // seconds =seconds<10? `0${seconds}`:seconds  //my solution
    //         return `${hours}:${minutes}:${seconds} ${amorpm}`
    //     }
    //     function formatzeroes(time){
    //         time=time.toString();
    //         return time.length<2? "0"+time : time;
    //     }
    // }
    // update();

//synchronous and asynchronous code
//synchronous code-no matter how long it takes ,next instruction will not execute until previous is completed
        //start now ,finish now
    // console.log("start");
    // console.log("this step is synchronous");
    // console.log("end");
//asynchronous code-for tasks that take indeterminate amount of time. other code can keep running
        //start now ,finish sometime later
    // console.log("start");
    // setTimeout(()=>console.log("This is asynchronous"),5000);
    // console.log("end");

//console.time() = starts timer to track how long a operation takes
        //give each timer a unique name.

    // console.time("response time");//unique name for this timer=response time
    // // alert("click the OK button");
    // setTimeout(()=> console.log("hello!"),3000);//doesnt track asynchronous operations
    // console.timeEnd("response time");

//promises-object that encapsulates result of asynchronous operation
        //let asynchronous method return values like synchronous method
        //"i promise you to return something in the future"
    // let  fileLoaded = false;//let this be a asynchronous process
    // const promise =new Promise((resolve,reject)=> {
        //asynchonous code here
    //    if(fileLoaded){
    //         resolve("File Loaded");
    //     }
    //     else{
    //         reject("file Not loaded");
    //     }
    // });
    // promise.then((value)=>console.log(value))//if promise is resolved invoke some method with callback/function expression/arrow_function
    // .catch(error=> console.log(error));

    // const wait= time=>new Promise( resolve =>{
    //     setTimeout(resolve,time);
    // });
    // // promise.then(()=> console.log("thanks for waiting!"));
    // wait(1000).then(()=> console.log("thanks for waiting!"));

//async keyword = makes a function return a promise
    // async function loadfile(){
    //     let fileloaded =false;
    //     if(fileloaded){
    //         return "File loaded";
    //     }
    //     else{
    //         throw "File not loaded";
    //     }
    // }

    // loadfile().then(value => console.log(value))
    // .catch(error=> console.log(error));

//await keyword -makes async function wait for promise
    // async function loadfile(){
    //     let fileloaded=false;
    //     if(fileloaded){
    //         return "file loaded";
    //     }
    //     else{
    //         throw "file NOT loaded"
    //     }
    // }

    // async function startprocess(){
    //     try{
    //     let message=await loadfile();
    //     console.log(message);
    //     let message2=await locatefile();//for multiple asynchronous processes
    //     console.log(message2);
    //     let message3=await closefile();
    //     console.log(message3);
    //     }
    //     catch(error){
    //         console.log(error);
    //     } 
    // }
    // startprocess();

//ES6 modules-reusable file ,can be imported and used
    // // import {pi,getcircumference,getarea} from "./math_utils.js";
    // import * as mathutils from "./math_utils.js";
    // console.log(mathutils.pi);
    // let circumference=mathutils.getcircumference(10);
    // console.log(circumference);
    // let area=mathutils.getarea(10);
    // console.log(area);

//DOM(document object model(API))
    // console.log(document);//displays DOM (html)
    // console.dir(document);//displays properties of DOM
    // console.log(document.title);
    // console.log(document.URL);
    // document.title="Title goes here";
    // document.body.style.backgroundColor="blue";
    // document.getElementById("myDiv").innerHTML="Hello";
