var count;
var countUp;
var countDead;
var countDown;
var countDodge;
var move = 0;
var chooseTime = 33;
var path = 1;
var upTop = 0;
var downTop = 0;
var deadTime = 34;
var dodgeTime = 35;

function train()
{
	document.getElementById("train").style.marginLeft = "0cm";	
}
function time()
{  
	count = setInterval(countUpAdd,100);
}
function countUpAdd()
{ 
	move = move + 0.5;
	document.getElementById("train").style.marginLeft = move + "cm";
	chooseTime--;
	if(chooseTime === 0)
	{
	if(path === 1)
	{
	document.getElementById("train").style.marginLeft = "14.5cm";
	document.getElementById("train").style.transform = "rotate(-40deg)";
	countUp = setInterval(upRoad,100);
	function upRoad()
	{
	upTop = upTop - 0.8;
	document.getElementById("train").style.marginTop = upTop + "cm";
}			
}
else
{
	document.getElementById("train").style.marginLeft = "15cm";
	document.getElementById("train").style.transform = "rotate(39deg)";
	countDown = setInterval(downRoad,100);
	function downRoad()
	{  
	downTop = downTop + 0.8;
	document.getElementById("train").style.marginTop = downTop + "cm";
}
}
}
else
{
	return " ";
}
}
function up()
{
	document.getElementById("arrow1").style.visibility = "visible";
	document.getElementById("arrow2").style.visibility = "hidden";
	path = 1;
	countDead = setInterval(dead,100);
	function dead()
	{
	deadTime--;
	if(deadTime === 0)
	{
	document.getElementById("blood").style.display = "block";
}
}
}
function down()
{
	document.getElementById("arrow1").style.visibility = "hidden";
	document.getElementById("arrow2").style.visibility = "visible";
	path = 2;
	countDodge = setInterval(dodge,100);
	function dodge()
	{
	dodgeTime--;
	if(dodgeTime === 0)
	{
	document.getElementById("cat").style.marginLeft = "6cm";
	document.getElementById("word").style.display = "block";
}
}
}
function same()
{
	document.getElementById('inSide').style.display = 'none';
	document.getElementById('outSide').style.display = 'none';
	document.getElementById("start").style.display = "none";
	document.getElementById("person").style.display = "block";
	document.getElementById("cat").style.display = "block";
}