function addCalculator(a, b) {
    if(arguments.lenght <= 1){
        throw new Error("ErrorNoArguments")
    }
    else return a + b;
  }


function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    if(typeof(a)==="string" || typeof(b) ==="string"){
        throw new Error("ErrorMultiplicationWithString")
    }
    return a*b;
}

function divided(a,b){
    if(b == 0){
        throw new Error("ErrorByDividingWithZero")
    }
   else return a/b;
}


function addMore(){
    var numbers = Array.from (arguments);
    return numbers.reduce(
        function(acc, cur){
            return acc+cur
        }
    )
}
module.exports = {addCalculator, subtraction, multiplication, divided, addMore};
