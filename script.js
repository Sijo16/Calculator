// Display function

var screen = document.getElementById('screen')
function display(num)
{
    screen.value += num;
}



function clearBox()
{
    screen.value="";
}

function resultSc()
{
    expression = screen.value;
    out = eval(expression);
    screen.value = out;
}
