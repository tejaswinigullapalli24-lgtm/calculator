function appendValue(value){
    document.getElementById("display").value+=value;
}
function clearDisplay()
{
    document.getElementById("display").value= "";
}
function calculate()
{
    let expression = document.getElementById("display").value;
    expression=expression.replace(/x/g, "*");
    document.getElementById("display").value=eval(expression);
}
function backspace()
{
    let display=document.getElementById("display").value;
    document.getElementById("display").value=display.slice(0,-1);
}
