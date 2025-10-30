let wind=document.getElementById("display")
let arrResults=[];
let valuesInScreen=document.getElementById("Res")
function p(Ch){
    wind.value+=Ch
}

function appendToDisplay(Ch){
switch (Ch){
    case '0':
        p('0');
        break;
    case '1':
        p('1');
        break;
    case '2':
        p('2');
        break;
     case '3':
        p('3');
        break;
    case '4':
        p('4');
        break;
    case '5':
        p('5');
        break;
    case '6':
        p('6');
        break;
    case '7':
        p('7');
        break;
    case '8':
        p('8');
        break;
    case '9':
        p('9');
        break;
    case '*':
        p('*');
        break;
    case '+':
        p('+');
        break;
    case '-':
        p('-');
        break;
    case '/':
        p('/');
        break;
}
}


// function CheckSafety(SeriesString){
// for(i=0 ; i<SeriesString.length;i++){
//     if(i===0)
//         {
//         if((SeriesString[i]==='*')||(SeriesString[i]==='/')||(SeriesString[i]==='-')||(SeriesString[i]==='+')){
//             return false;
//         }
//         }
//         if(i!==strlen(SeriesString)){

//     if(((SeriesString[i+1]==='*')||(SeriesString[i+1]==='/')||(SeriesString[i+1]==='-')||(SeriesString[i+1]==='+'))&&
//     ((SeriesString[i]==='*')||(SeriesString[i]==='/')||(SeriesString[i]==='-')||(SeriesString[i]==='+'))){
//         return false;
//     }
// }
    
// }
// return true;
// }

function checkSafety(seriesString) {
    for (let i = 0; i < seriesString.length; i++) {
        // Check if the first character is an operator
        if ((i === 0 && ['*', '/', '-', '+'].includes(seriesString[i]))||(i === seriesString.length-1 && ['*', '/', '-', '+'].includes(seriesString[i]))) {
            return false;
        }

        // Check if two consecutive characters are operators
        if (i < seriesString.length - 1 && 
            ['*', '/', '-', '+'].includes(seriesString[i]) &&
            ['*', '/', '-', '+'].includes(seriesString[i + 1])) {
            return false;
        }
    }

    return true;
}


let s=document.getElementById("sss")
 function calculateResult(){
 
     let r=checkSafety(wind.value)
     let f=document.getElementById("ss")
     f.innerText=r
     if(r===true){
  
        let m=Arr(wind.value)
        for(i=0;i<m.length;i++){
            f.innerText+="  "+m[i]
        }
        let finalResult=Solve(m);
        wind.value=finalResult
        console.log(finalResult)
        arrResults.push(finalResult)
        console.log(arrResults)
    //     if(valuesInScreen.innerText===''){
    //         valuesInScreen.innerText+=finalResult   
    //     }
    //     else{                                                        
    //     valuesInScreen.innerText+=" , "+finalResult
    //  }
       
    //  or
    //valuesInScreen.innerText=arrResults.toString();

    //or put what you want beteen element of array 
   // valuesInScreen.innerText=arrResults.join("LLLLLLLLLLLLLLLLLLLLLLLLLL");
   // valuesInScreen.innerText=arrResults.join("Woooooo");
   // valuesInScreen.innerText=arrResults.join("---------------------------");
    //valuesInScreen.innerText=arrResults.join("\n\n");

    //or Inject HTML Code

   // valuesInScreen.innerHTML+="<li>"+finalResult+"</li>"

    valuesInScreen.innerHTML=""

    arrResults.forEach(
function(value,index){
    valuesInScreen.innerHTML+="<li>" + value + "</li>";
}

    )



  
    }
 }

// function calculateResult() {
//     let isSafe = checkSafety(wind.value); // Use the correct function name
//     let resultDisplay = document.getElementById("ss");
//     resultDisplay.innerText = isSafe; // Display true or false
// }


function clearDisplay(){
    wind.value='';
}

function SplitExpression(expression) {
    // Corrected regular expression: / matches one or more digits or any of the operators
    const regexp = /\d+|[+\-*/]/g;
    let res = expression.toString().match(regexp);  // Find all numbers and operators
    return res;
}

function Arr(Ch){
    arrMeth=SplitExpression(Ch);
    return arrMeth;
}

function Solve(expression) {
    let arr = Arr(expression);
    let stack = [];

    // Handle Multiplication and Division
    for (let i = 0; i < arr.length; i++) {
        if (['*', '/'].includes(arr[i])) {
            let leftOperand = stack.pop();
            let operator = arr[i];
            let rightOperand = arr[++i];

            stack.push(
                PerformOperation(Number(leftOperand), operator, Number(rightOperand))
            );
        } else {
            stack.push(arr[i]);
        }
    }

    if (stack.length === 1) {
        return Number(stack.pop());
    }

    // Handle Addition and Subtraction
    let stack2 = [];
    for (let i = 0; i < stack.length; i++) {
        if (['+', '-'].includes(stack[i])) {
            let leftOperand = stack2.pop();
            let operator = stack[i];
            let rightOperand = stack[++i];

            stack2.push(
                PerformOperation(Number(leftOperand), operator, Number(rightOperand))
            );
        } else {
            stack2.push(stack[i]);
        }
    }

    return Number(stack2.pop());
}


function PerformOperation(leftOperand,operator,rightOperand){
    switch(operator){
        case '+':
            return leftOperand+rightOperand;
        case '-':
            return leftOperand-rightOperand;
        case '*':
            return leftOperand*rightOperand;
        case '/':
            return leftOperand/rightOperand;
            
    }
}



///////////////////////////////////////////// ////////////////
//////////////////     Final Calculator Project //////////////                
//////////////////////////////////////////////////////////////