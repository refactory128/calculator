let stack = [];
let buttons = document.querySelectorAll("button");
let resultDisplay = document.querySelector(".result");
let stackDisplay = document.querySelector(".stack");

function operate(a, b, operator){
    num1 = parseFloat(a);
    num2 = parseFloat(b);

    if (operator === "+"){
        return num1 + num2;
    }
    if (operator === "-"){
        return num1 - num2;
    }
    if (operator === "x"){
        return num1 * num2;
    }
    if (operator === "/"){
        if (num2 === 0) return "Divide by Zero Error";
        return num1 / num2;
    }
    
    return "Invalid Operator"  ;

}


//handle buttons
buttons.forEach((button) => {
    button.addEventListener('click', e =>{
        console.log("clicked " + e.target.innerText);

        if (/[0-9]/.test(e.target.innerText)){ // number
            stack.push(e.target.innerText);

        } else if (/[+\-x\/]/.test(e.target.innerText)){ //operator
            //stack already has an operator
            if (/[+\-x\/]/.test(stack)){
                //then operate
                let arr = stack.join('').split(/[+\-x\/]/);
                console.log(arr);
                let operator = stack[arr[0].length];
                console.log({operator});
                let result = operate(arr[0], arr[1], operator);
                console.log({result});
                resultDisplay.innerText = result;
                //then put the result and the operator on the stack
                stack = [];
                stack.push(...result.toString());
                //stack.push(e.target.innerText);
            }

            stack.push(e.target.innerText); 
        } else if (/←/.test(e.target.innerText)){
            stack.pop();
        } else if (/C/.test(e.target.innerText)){
            stack = [];
            resultDisplay.innerText = 0;
            
        } else if (/=/.test(e.target.innerText)){
            let arr = stack.join('').split(/[+\-x\/]/);
            console.log(arr);
            let operator = stack[arr[0].length];
            console.log({operator});
            let result = operate(arr[0], arr[1], operator);
            console.log({result});
            resultDisplay.innerText = result;
            //then put the result and the operator on the stack
            stack = [];
            stack.push(...result.toString());


        } else if (/\./.test(e.target.innerText)){
            console.log("dot");
            let arr = stack.join('').split(/[+\-x\/]/);
            console.log(arr);
            //console.log(arr.pop());
            if (/^[^.]*$/.test(arr.pop())){
                console.log("got there");
                stack.push(".");
            }
        } 

        stackDisplay.innerText = stack.join('');
        console.log(stack);
    });
});
/*
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', e => {
        
        e.target.classList.add('active');
    });
});
*/
