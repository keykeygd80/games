var area = document.getElementById("area");
var cell = area.getContext("2d");
var color = true;
cell.fillStyle = "black";
cell.fillRect(0, 0, 20, 20);

// var getMousePos = function(cv, e)
// {
// 	var rect = cv.getBoundingClientRect();
// 	return 
// 	{
// 		x: e.clientX - rect.left,
// 		y: e.clientY - rect.top,
// 		rectLeft : rect.left,
// 		rectTop : rect.top,
// 		clientX : e.clientX,
// 		clientY : e.clientY
// 	}
// };

window.onload = function()
{
	on();
}

function on()
{
	area.addEventListener("click", change, false);
}

function change()
{
	if (color === true ) 
	{
		cell.fillStyle = "red";
		cell.fillRect(0, 0, 20, 20);
		color = false;
	}
	else
	{
		cell.fillStyle = "black";
		cell.fillRect(0, 0, 20, 20);
		color = true;
	}
}