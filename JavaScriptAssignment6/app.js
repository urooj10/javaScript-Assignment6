//****************************** Chap 21 to 25 ******************************     //

// Task 1
// var firstName= prompt("Enter your first name: ");
// var lastName= prompt("Enter your last name: ");
// var fullName=firstName+" "+lastName;
// alert("Hello "+fullName);

// Task 2
// var mobModel=prompt("Enter your favourite mobile phone model: ");
// document.write("My Favourite mobile model: "+mobModel+"<br>");
// document.write("Length of string is:  " + mobModel.length);

// Task 3
// var str="Pakistani";
// document.write("String: "+str+"<br>");
// document.write("Index of 'n' : "+ str.indexOf('n'));

// Task 4
// var greet="Hello World";
// document.write("String: "+greet+"<br>");
// document.write("Last index of 'l' in string: "+greet.lastIndexOf("l"));

// Task 5
// var str="Pakistani";
// document.write("String: "+str+"<br>");
// document.write("Char at index '3' is: "+str.charAt("3"));

// Task 6
// var firstName= prompt("Enter your first name: ");
// var lastName= prompt("Enter your last name: ");
// var fullName=firstName.concat(" ",lastName);
// document.write("Hello " +fullName);

// Task 7
// var city="Hyderabad";
// document.write("City: "+city+"<br>");
// city=city.replace("Hyder","Islam");
// document.write("Replaced city: "+city);

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<b>Message before replacement: </b>"+message+"<br>");
// replacedMessage=message.replace(/and/g,"&");
// document.write("<b>Message after replacement: </b>"+ replacedMessage); 

// Task 9
// var num="472";
// document.write("Value: "+num);
// document.write("<br> Type: "+typeof(num));
// num=parseInt(num);
// document.write("<br> Value: "+num);
// document.write("<br> Type: "+ typeof(num));

// Task 10
// var str=prompt("Enter string: ");
// document.write("User Input: "+str+"<br>");
// document.write("Upper Case: "+str.toUpperCase());

// Task 11
// var str=prompt("Enter any string: ");
// document.write("String: "+str+"<br>");
// str=str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
// document.write("Title case: "+str);

// Task 12
// var num="35.21";
// document.write("Number : "+num+"<br>");
// var ind;
// for( var i=0;i<num.length;i++){
//     if(num[i]===".")
//     {
//         ind=num.indexOf(num[i]);
//         break;
//     }   
// }
// num1=num.slice(0,ind)+num.slice(ind+1);
// document.write("Result: "+num1);

// Task 13
// var userName=prompt("Enter UserName: ");
// for(var i=0 ; i<userName.length;i++)
// {
//     if(userName.charCodeAt(i)==33||userName.charCodeAt(i)==44||userName.charCodeAt(i)==46||userName.charCodeAt(i)==64){
//         alert("Please Enter a Valid User Name");
//         break;  
//     }
// }

// Task 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var item=prompt("Welcome to Sweet Panda! Please Enter an item you want to search in our bakery");
// item=item.toLowerCase();
// for(var i=0;i<items.length;i++)
// {
//     if(items[i]==item){
//         alert(item + " is available at index "+i+ " in our bakery");
//         break;
//     }
//     else if(i==items.length-1 && items[i]!=item) {
//         alert("Sorry "+item + " is not availbale in our bakery ");
//     }    

// }

// Task 15

// var password=prompt("Enter password ");

// function CheckPassword(inputtxt) 
// { 
// var passw = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|(?=.{6,})");
// if(inputtxt.value.match(passw)) 
// { 
// alert("Correct Syntax");
// return true;
// }
// else
// { 
// alert("Wrong Syntax...!");
// return false;
// }
// }

// var k=CheckPassword(password);


// Task 16 //

// var university="University of karachi";
// var arr= university.split("");
// for(var i=0; i<arr.length;i++)
// {
//         document.write(arr[i]+"<br>");   
// }

// Task 17
// var str=prompt("Enter any string:");
// document.write("Value: "+str+"<br>");
// lc=(str.length)-1;
// document.write("Last character of input : "+ str[lc]);

// Task 18
// var str="The quick brown fox jumps over the lazy dog";
// document.write("<b>Text is : </b> "+ str+"<br>");
// str=str.toLowerCase();
// arr=str.split(" ");
// var count=0;
// for(var i=0;i<arr.length;i++)
// {
//     // document.write("aaaa<br>");
//     if(arr[i]=="the"){
//         count=count+1;
//     }
// }
// document.write("There are <b>"+ count+ "</b> occurence(s) of the word <b>'the'</b> in this sentence");





//****************************** Chap 26 to 30 ******************************     //

// Task 1
// var num=+prompt("Enter any positive integer: ");
// document.write("Number : "+num +" <br>");
// document.write("Round: "+ Math.round(num));
// document.write("<br> Floor: "+ Math.floor(num));
// document.write("<br> Ceil: "+Math.ceil(num));

// TAsk 2
// var num=+prompt("Enter any negative integer: ");
// document.write("Number : "+num +" <br>");
// document.write("Round: "+ Math.round(num));
// document.write("<br> Floor: "+ Math.floor(num));
// document.write("<br> Ceil: "+Math.ceil(num));

// Task 3
// var num=prompt("Enter any number: ");
// document.write("Number : "+num);
// if(num[0]=="-"){
//     num1=num.slice(1);
// }
// else{
//     num1=num;
// }
// document.write("<br>Absolute of "+ num + " is " + num1);

// Task 4
// var dice=Math.random()*6;
// var diceRound=Math.ceil(dice);
// document.write("Random dice value is: "+diceRound);

// Task 5
// var toss=Math.random();
// var tossR=Math.round(toss);
// document.write("If random number is 1 toss is heads if it is 0 toss is tails<br>");
// if(tossR==1)
// {
// document.write("Random value is "+tossR +"<br>Random coin value is Heads");
// }
// else{
//     document.write("Random value is "+tossR+"<br>Random coin value is tails");
// }

// Task 6
// var num=Math.random()*100;
// document.write("Random number between 1 and 100 is: "+Math.round(num));


// Task 7 

// var weight=prompt("Enter your weight in kilograms: ");

// weight=weight.toLowerCase();
// t=weight.indexOf("k");
// d=weight.indexOf(".");

// c=weight.slice(t);
// if(c=="kgs"||c=="kilograms"||c=="kilogram"||c=="kg")
// {
//     document.write("Weight of user is "+parseFloat(weight)+" Kilograms");
// }

// else if(t==-1||d!=-1)
// {
//     document.write("Weight of user is "+parseFloat(weight)+" Kilograms");
// }
// else if(+weight ===NaN)
// {
//     document.write("Please enter weight in correct format");
//     // document.write("Weight of user is "+weight+" Kilograms"); 
// }
// else{
   
//     document.write("Weight of user is "+weight+"......");
// }


// Task 8

// var ranNum=Math.random()*10;
// var rnum=Math.round(ranNum);
// document.write("Secret number is " +rnum);
// var num=prompt("Enter any integer from 1 to 10: ");
// document.write("<br>Number entered by user is " +num);
// if(num==rnum)
// {
//     alert("Congratulations! you won!!!");
// }
// else{
//     alert("Try Again! Better luck next time.");
// }







//****************************** Chap 31 to 35 ******************************     //






// Task 1
// var d=new Date();
// document.write(d);

// Task 2
// var d=new Date();
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var month=months[d.getMonth()-1];
// document.write("Month: "+month);

//Task 3
// var d=new Date();
//  var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//  var day=weekDays[d.getDay()];
// alert("Today is "+day);
 
// Task 4
// var d=new Date();
// if(d.getDay()==0||d.getDay()==6)
// {
//     alert("Yayyy! It's Fun Day");

// }
// else{
//     alert("Its Working day");
// }

//Task 5
// var d=new Date();
// if(d.getDate()<16)
// {
// alert("First Fifteen DAys of the month");
// }
// else{
//     alert("Last days of the Month");
// }

// Task 6
// var d=new Date();
// document.write("Current Date: "+d);
// var md=d.getTime();
// document.write("<br>Elapsed Miliseconds since January 1,1970: "+md);
// document.write("<br>Elapsed Minutes since January 1,1970: "+md/(1000*60*60));

// Task 7
// var d=new Date();
// if(d.getHours()>=12||d.getHours()<=23)
// {
//     document.write("It's PM");
// }
// else{
//     document.write("It's AM")
// }

// Task 8
// var laterDate=new Date("Dec 31,2020");
// document.write("Later Date: "+laterDate);

// Task 9
// var ramzanStart=new Date("Apr 24,2020");
// var currentDate=new Date();
// var miliR=ramzanStart.getTime();
// var miliD=currentDate.getTime();
// var diff=miliD-miliR;
// document.write(Math.round(diff/(1000*60*60*24))+" days havve been passed since 1st Ramzan,2020");

// Task 10
// var refDate=new Date("Dec 05 2015 22:50:16");
// var begDate=new Date("Jan 1 2015");
// var miliRd=refDate.getTime();
// var miliBd=begDate.getTime();
// var diff =miliRd-miliBd;
// document.write("On reference date "+refDate+", "+ Math.round(diff/(1000*60))+" seconds had passed since beginning of 2015");

// Task 11
// var currentDate=new Date();
// document.write("Current Date "+currentDate);
// currentDate.setHours(currentDate.getHours()-1);
// document.write("<br> 1 hour ago it was,  "+ currentDate);

// Task 12
// var currentDate=new Date();
// document.write("Current Date "+currentDate);
// currentDate.setFullYear(currentDate.getFullYear()-100);
// document.write("<br> 1 hour ago it was,  "+ currentDate);

// Task 13
// var dob= new Date(prompt("Enter your date of birth","jan 05, 1998"));
// var dobmili=dob.getTime();
// var currentDate=new Date();
// var cdMili=currentDate.getTime();
// var diff =cdMili-dobmili;
// var age = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your Age is "+age);
// document.write("<br>Your birth Year is "+dob.getFullYear());

// Task 14
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var currentDate=new Date();
// var  month=months[currentDate.getMonth()];

// var customerName=prompt("Enter Customer Name ");
// var unitConsumed=+prompt("Enter total units consumed");
// var pricePerUnit=16;
// var netPayableBdd=unitConsumed*pricePerUnit;
// var latePaymentSurcharge=350;
// var NetpayAdd=netPayableBdd+latePaymentSurcharge;
// document.write("<h1> K Electric Bill </h1>");
// document.write("<br>Customer Name: <b>"+customerName+"</b>" );
// document.write("<br>Month: "+month);
// document.write("<br> Number of units: <b>"+unitConsumed+"</b>");
// document.write("<br>Charges Per unit: <b>"+pricePerUnit+"</b>");
// document.write("<br><br>Net Amount Payable (within Due Date): <b>"+netPayableBdd+"</b>");
// document.write("<br>Late Payment Surcharge: <b>"+latePaymentSurcharge+"</b>");
// document.write("<br>Gross Amount Payable After Due Date: <b>"+NetpayAdd+"</b>");


//****************************** Chap 35 to 38 ******************************     //


// //Task 1 //
// function a ()
// {
//     document.write(new Date());
// }

// a();


// //Task 2 //
// var first_Name=prompt("Enter your first name: ");
// var last_Name=prompt("Enter your last name: ");
// function b(first,last)
// {
//     document.write("Assalam-o-alikum "+first+" "+last);
// }
// b(first_Name,last_Name);



// //Task 3 //
// var first_Nbr=+prompt("Enter first number: ");
// var second_Nbr=+prompt("Enter second number: ");
// function add(first,second)
// {
//     document.write(first+second);
// }
// add(first_Nbr,second_Nbr);


// //Task 4 //
// var first_Nbr=+prompt("Enter first number: ");
// var second_Nbr=+prompt("Enter second number: ");
// var opt=prompt("Enter operator: ");
// function calc(f,s,o)
// {
//     if(o === "+")
//     {
//         var c = f+s;
//         document.write("Sum is: "+c);
//     }
//     else if(o === '-')
//     {
//         document.write("Subtraction is: "+f-s);
//     }
//     else if(o === '*')
//     {
//         document.write("Multipication is: "+f*s);
//     }
//     else if(o === '/')
//     {
//         document.write("Division is: "+f/s);
//     }
//     else{
//         document.write("Wrong operator!");
//     }
// }
// calc(first_Nbr,second_Nbr,opt);




// //Task 5 //
// var input = +prompt("Enter a number: ");
// function sqr(a)
// {
//     return a*a;
// }
// document.write("Square of "+input+" is: "+sqr(input));



// //Task 6 //
// var input = +prompt("Enter a number: ");
// var fac =1;
// function factorial(num)
// {
// for (var a = num; a>0; a--)
// {
//     fac = fac * a;
// }
// return fac;
// }
// document.write("Factorial of "+input+" is: "+factorial(input));



// //Task 7 //
// var a = +prompt("Enter start number: ");
// var b = +prompt("Enter end number: ");
// function count1(a,b)
// {
//     for(var c = a;c<=b;c++)
//     {
//         document.write(c+"<br>");
//     }
// }
// count1(a,b);




// //Task 8 //
// var base = +prompt("Enter a base: ");
// var per = +prompt("Enter a perpendicular: ");
// function calculateHypotenuse(b,p)
// {
//     function sqr(n)
//     {
//         return n*n
//     }
//     var bsqr = sqr(b);
//     var psqr = sqr(p);
//     h = bsqr+psqr;
//     document.write("Hypotenuse"+"<sup>2</sup>"+"  = "+h);
// document
// }
// calculateHypotenuse(base,per);



// //Task 9 //
// var height = 4;
// function area(w,h)
// {
//     var area = w*h;
//     return area;
// }
// document.write("Area of rectangle is: "+area(6,height));


// //Task 10 //
// function pal(word,l)
// {
//     var chk = "";
//     for(var a=l-1; a >= 0; a--)
//     {
//          chk =chk+word[a]; 
//     }
//     if(chk === word)
//     {
//         document.write("Word is palandrome");
//     }
//     else
//     {
//         document.write("Word is not palandrome");
//     }
// }
// var input = prompt("Enter a word to check its palandrome or not:");

// input = input.toLowerCase();
// var l =input.length;
// pal(input,l);



// //Task 11 //
// var a = "the quick brown fox";

// function chng(str)
// {
//     var s= [];

//     s = str.split(" ");
    
//     for (var a = 0 ;a< s.length;a++ )
//     {

//         var str1 = s[a];
//         var  chk = "";
//         for (var b = 0 ; b< str1.length ; b++)
//         {

//             if ( b === 0)
//             {
//                 chk = chk + str1[b].toUpperCase();
//             }
//             else
//             {
//                 chk = chk + str1[b];
//             }

//         }

//        s[a]=chk; 

//     }
//     var ss ="";
//    for ( var a = 0 ; a< s.length; a++)
//    {
//         ss= ss +" "+s[a];
//    }
//    document.write(ss);
// }
// chng(a);



// //Task 12 //
// function longestword(str)
// {
//     var s= [];

//     s = str.split(" ");
//     var a = 0;
//     var chk = "";

//     for (var  b = 0 ; b<s.length;b++ )
//     {
//         if (s[b].length > a)
//         {
//             a = s[b].length;
//             chk = s[b];
//         }
//     }    
//     document.write(chk);
// }

// longestword("Web Development Tutorial");




// //Task 13 //
// function Count(str,ch)
// {
    
// var a = 0

//  for (var b = 0; b < str.length; b++) 
//  {
//     if (str[b] === ch) 
//       {
//       a += 1;
//       }
//   }
//   return a;

// }
// document.write(Count("JSResourceS.com","o"));



// //Task 14 //
// var pi = 3.14;
// var radius = +prompt("Enter the value of radius: ");
// function calcCircumference(r)
// {
//     var circumtance = 2 * pi * r
//     document.write("The circumference is: "+circumtance+"<br>");
// }
// function calcArea(r)
// {
//     var area  = pi * r *r;
//     document.write("The area is: "+area+"<br>");
// }
// calcCircumference(radius);
// calcArea(radius);