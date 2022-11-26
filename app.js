// DATE METHODS:

var dt = new Date();
var current_date = dt.getDate();
var current_day = dt.getDay();

document.write(dt);
document.write("<br>");
document.write("<br>"); 


var months = ["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
var dt2 = new Date();
var current_month = dt2.getMonth();

alert(months[current_month]);

var day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = new Date();
var crnt_day = day.getDay();

if(crnt_day == [0]){
    alert("Today is Sun")
}else if(crnt_day == [1]){
    alert("Today is Mon")
}else if(crnt_day == [2]){
    alert("Today is Tue")
}else if(crnt_day == [3]){
    alert("Today is Wed")
}else if(crnt_day == [4]){
    alert("Today is Thu")
}else if(crnt_day == [5]){
    alert("Today is Fri")
}else if(crnt_day == [6]){
    alert("Today is Sat")
}

var day_name2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var days = new Date();
var crnt_days = days.getDay();

if(crnt_days == [0]){
    alert("it's Fun Day")
}else if(crnt_days == [6]){
    alert("it's Fun Day")
}

var days_of_months = new Date();
var new_date = days_of_months.getDate();

if(new_date < 16){
    document.write("First fifteen days of the month")
}else{
    document.write("Last Days Of Months")
}


var today_date = new Date();
var old_date = new Date("01 , 01 1970");

var today_date_time = today_date.getTime();
var old_date_time = old_date.getTime(); 

document.write("<br>");

document.write("Current Date:" + " " + today_date);

document.write("<br>");
document.write("<br>");
document.write(today_date_time);

document.write("<br>");
document.write("<br>");


var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("It's PM")
}else if(c === "13:"){
    document.write("It's PM")
}else if(c === "14:"){
    document.write("It's PM")
}else if(c === "15:"){
    document.write("It's PM")
}else if(c === "16:"){
    document.write("It's PM")
}else if(c === "17:"){
    document.write("It's PM")
}else if(c === "18:"){
    document.write("It's PM")
}else if(c === "19:"){
    document.write("It's PM")
}else if(c === "20:"){
    document.write("It's PM")
}else if(c === "21:"){
    document.write("It's PM")
}else if(c === "22:"){
    document.write("It's PM")
}else if(c === "23:"){
    document.write("It's PM")
}else if(c === "24:"){
    document.write("It's AM")
}else if(c === "01:"){
    document.write("It's AM")
}else if(c === "02:"){
    document.write("It's AM")
}else if(c === "03:"){
    document.write("It's AM")
}else if(c === "04:"){
    document.write("It's AM")
}else if(c === "05:"){
    document.write("It's AM")
}else if(c === "06:"){
    document.write("It's AM")
}else if(c === "07:"){
    document.write("It's AM")
}else if(c === "08:"){
    document.write("It's AM")
}else if(c === "09:"){
    document.write("It's AM")
}else if(c === "10:"){
    document.write("It's AM")
}else if(c === "11:"){
    document.write("It's AM")
}

var create_date = new Date("12 , 31 , 2020");

document.write("<br>");
document.write("<br>");
var laterdate = document.write("Later date:" + " " + create_date);

document.write("<br>");
document.write("<br>");

var age = prompt("Enter Your Age");

var age$ = new Date();
var year = age$.getFullYear();

document.write("Your Birth Year is" + " " + (year-age));

document.write("<br>");
document.write("<br>");

var months$ = ["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
var dt3 = new Date();
var current_months= dt3.getMonth();

document.write("K-ELECTRIC BILL:-");
document.write("<br>");
document.write("<br>");

var No_of_units = 410;
var Charges_per_unit  = 16;
var late_payment = 350

document.write("Customer Name:"+ " "+"ABC");
document.write("<br>");
document.write("Month:"+ " " + months$[current_months]) ;

document.write("<br>");

document.write("No.of Units:"+ " "+ "410");
document.write("<br>");

document.write("Charges per Unit:"+ " "+ "16");

document.write("<br>");

document.write("Net Amount Payable (Within Due Date):"+ " "+ (No_of_units*Charges_per_unit));


document.write("<br>");

document.write("Late Payment surcharge:" +" " + late_payment);


document.write("<br>");

document.write("Gross Amount Payable (after Due Date):"+ "" + (No_of_units*Charges_per_unit+late_payment));

document.write("<br>");
document.write("<br>");

var ramadan1 = new Date();
var ramadan2 = new Date("06-18-2015");

var ramadan1_time = ramadan1.getTime();
var ramadan2_time = ramadan2.getTime();

var past_days = ramadan1-ramadan2;

var days_ = past_days/(1000*60*60*24);
document.write(Math.floor(days_)+ " " + "days have passed since 1st Ramadan,2015");

document.write("<br>");
document.write("<br>");



// FUNCTION

function greets(fist_name,last_name){
    document.write("Hello"+""+ fist_name + last_name ,"<br>")

}
greets("Sufyan","Sohail");

function telltime(){
    var now = new Date();
    document.write(now,"<br>","<br>");
}
telltime();

function add(){
    var a = +prompt("Input 1st No");
    var b = +prompt("Input 2nd No.");
    alert(a+b);
    
}
add();

function calculate (no_1,no_2,operators){
    var First_no = no_1;
    var second_no = no_2;
    var total = First_no+second_no;
    document.write(total);
}
calculate(10,20, "-");

var latter = prompt("Enter Word");
var capital_latter = latter.toUpperCase();

alert(capital_latter);

var latter$ = prompt("Enter Any Word i'll Show You last character of this word");
var last_latter = latter$.charAt();

alert(last_latter);
 
var user$ = prompt("Enter Your Name");

if(user$ === "!"|| "@"||"$"){
    alert("Enter Valid User Name")
}else{
    alert("Correct")

}

document.write("<br>");

var number1 = Math.round(3.45214);
var number2 = Math.floor(3.45214);
var number3 = Math.ceil(3.45214);

document.write(number1);
document.write("<br>");


document.write(number2);
document.write("<br>");


document.write(number3);
document.write("<br>");
document.write("<br>");

 var random_no = Math.random();
// console.log(random_no);
var random_no = random_no*2;

var toss = Math.ceil(random_no);
console.log(toss);

if(toss== ("1")){
    alert("Head");
}
else if(toss == ("2")){
    alert("Tail");
}

var secret_no = 7;
var ask = +prompt("Input one No from 1 to 10");

if (ask === secret_no){
    alert("Congratulations You Win")
}else{
    alert("You Lost")
}
