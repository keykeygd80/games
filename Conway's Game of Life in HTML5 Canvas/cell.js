var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var cell = [];
var newCell = [];
var sideRow = 30;
var sideCol = 30;
ctx.strokeStyle = "#000000";
ctx.strokeRect(20, 20, 560, 560);

window.onload = function()
{
	array();
}

function array()
{
	for (var i = 0; i < sideRow; i++) 
	{
		cell[i] = [];
		for (var j = 0; j < sideCol; j++)
		{
			cell[i][j] = 0;
		}
	}
	begin();
}

function begin()
{
	for (var i = 1; i < sideRow - 1; i++) 
	{
		for (var j = 1; j < sideCol - 1; j++)
		{
			var random = Math.floor (Math.random() * 2);
			if (random === 1)
			{
				cell[i][j] = 1;
			}
			else
			{
				cell[i][j] = 0;
			}	
		}
	}
	setInterval(change, 300);
}

function change()
{
	for (var i = 1; i < sideRow - 1; i++) 
	{
		for (var j = 1; j < sideCol - 1; j++)
		{
			var nextTo = 
			cell[i - 1][j - 1] + cell[i - 1][j] + cell[i - 1][j + 1] + 
			cell[i][j - 1] +                      cell[i][j + 1] +
			cell[i + 1][j - 1] + cell[i + 1][j] + cell[i + 1][j + 1];
			if (cell[i][j] === 1) 
			{
				if (nextTo < 2) 
				{
					cell[i][j] = 0;
				}
				else if (nextTo > 3)
				{
					cell[i][j] = 0;
				}
				else
				{
					cell[i][j] = 1;
				}
			}
			else if (cell[i][j] === 0)
			{
				if (nextTo === 3) 
				{
					cell[i][j] = 1;
				}
				else
				{
					cell[i][j] = 0;
				}
			}
		}
	}
	draw();
}

function draw()
{
	ctx.clearRect(0, 0, 600, 600);
	for (var i = 0; i < 600; i+= 20) 
	{
		for (var j = 0; j < 600; j+= 20)
		{
			if (cell[i / 20][j / 20] === 1)
			{
				ctx.fillStyle = "black";
				ctx.fillRect(i, j, 20, 20);
			}
			else
			{
				ctx.fillStyle = "white";
				ctx.fillRect(i, j, 20, 20);
			}	
		}
	}
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(20, 20, 560, 560);
}

