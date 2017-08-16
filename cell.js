var area = document.getElementById("area");
var cell = area.getContext("2d");
var color = true;
cell.fillStyle = "black";
cell.fillRect(0, 0, 20, 20);

function on()
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
