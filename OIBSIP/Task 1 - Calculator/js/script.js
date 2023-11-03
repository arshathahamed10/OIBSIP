const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";
const calculate = (val) => {
    if(val === "=" && output !== "")
    {
        output = eval(output.replace("%","/100"));
    }
    else if(val==="AC")
    {
        output="";
    }
    else if(val === "DEL")
    {
        output = output.toString().slice(0,-1);
    }
    else
    {
        if(output==="" && specialChars.includes(val)) return;
        output += val;
    }
    // console.log(buttonValue);
    display.value=output;
};
//console.log(display,buttons)
buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});