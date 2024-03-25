const defaultResult = 0;

let currentResult = defaultResult;


function add () {

 const calDescription = `${currentResult} + ${userInput.value}`   
 currentResult = currentResult + + userInput.value;
 outputResult(currentResult,calDescription);

}


addBtn.addEventListener('click', add);




