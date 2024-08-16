let firstNum = [];
let secondNum = [];
let currentOperator = ""
let result = 0;

for(let i=0; i<10;i++){
    document.querySelector("#" + "num" + i.toString()).addEventListener("click", ()=>{
        if(currentOperator === ""){
            firstNum.push(i.toString());
            displayUpdate();
            console.log("firstNum:" + firstNum);
        }
        else if(firstNum.length != 0 && currentOperator != ""){
            secondNum.push(i.toString());
            displayUpdate();
            console.log("secondNum: " +secondNum);
        }
    });
}

document.querySelector("#point").addEventListener("click", ()=>{
    if(currentOperator === "" && firstNum.length != 0 && firstNum.includes(".") === false){
        firstNum.push(".");
        displayUpdate();
    }
    else if(currentOperator != "" && secondNum.length != 0 && secondNum.includes(".") === false){
        secondNum.push(".");
        displayUpdate();
    }
})

function displayUpdate(){
    if(currentOperator === ""){
        if(firstNum.length > 11){document.querySelector(".display").textContent = firstNum.slice(0,11).join("") + "..."}
        else{document.querySelector(".display").textContent = firstNum.join("")}
    }
    else{
        if(secondNum.length > 11){document.querySelector(".display").textContent = secondNum.slice(0,11).join("") + "..."}
        else{document.querySelector(".display").textContent = secondNum.join("");}
    }
}

function operate(){
    if(firstNum[0] === "-" && firstNum.length === 1){
        firstNum = [];
        secondNum = [];
        currentOperator = "";
        displayUpdate();
    }
    else if(firstNum.length === 0 || secondNum.length === 0 ){
        currentOperator = "";
        displayUpdate();
    }
    else{
        let firstVal = firstNum.reduce((a,b)=>a+b);
        let secondVal = secondNum.reduce((a,b)=>a+b);
        if(currentOperator === "+"){result = parseFloat(firstVal) + parseFloat(secondVal);}
        else if(currentOperator === "-"){result = parseFloat(firstVal) - parseFloat(secondVal);}
        else if(currentOperator === "*"){result = parseFloat(firstVal) * parseFloat(secondVal);}
        else if(currentOperator === "/"){result = parseFloat(firstVal) / parseFloat(secondVal);}
        else if(currentOperator === "%"){result = (parseFloat(firstVal)/100) * parseFloat(secondVal);}

        firstNum = result.toString().split("");
        secondNum = [];
        currentOperator = "";
        displayUpdate();
    }
    
}

function operatorCheck(opr){
    if(opr === "-" && firstNum.length === 0){firstNum.push("-");}
    else if(currentOperator != ""){operate();}
    else{currentOperator = opr;}
    displayUpdate();
}

document.querySelector("#plus").addEventListener("click", ()=>{operatorCheck("+");})
document.querySelector("#minus").addEventListener("click", ()=>{operatorCheck("-");})
document.querySelector("#multiply").addEventListener("click", ()=>{operatorCheck("*");})
document.querySelector("#divide").addEventListener("click", ()=>{operatorCheck("/");})
document.querySelector("#modulo").addEventListener("click", ()=>{operatorCheck("%");})
document.querySelector("#equal").addEventListener("click", ()=>{operate();})
document.querySelector("#clear").addEventListener("click", ()=>{
    firstNum = [];
    secondNum = [];
    currentOperator = "";
    displayUpdate();
})
document.querySelector("#delete").addEventListener("click", ()=>{
    if(currentOperator === ""){
        firstNum.pop()
        displayUpdate();
    }
    else if(currentOperator != "" && secondNum.length === 0){
        currentOperator = ""
        displayUpdate();
    }
    else if(firstNum.length != 0 && currentOperator != ""){
        secondNum.pop();
        displayUpdate();
    }
})

//code for keyboard input and sound effects start from here