// Exercise 01
let day = 5;

switch(day){
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    case 3:
        console.log(`Today is Wednesday`);
        break;
    case 4:
        console.log(`Today is Thursday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    case 6:
        console.log(`Today is Saturday`);
        break;
    case 7:
        console.log(`Today is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`);
        
}

// exersice 02
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const grade = document.getElementById("grade");
let getResult;

submit.onclick = function() {
    getResult = result.value;
    getResult = Number(getResult);

    if(getResult <= 100 && getResult >= 0){
        switch (true) {
            case getResult >= 75:
                grade.textContent = `Your Grade : A`;
                break;
            
            case getResult >= 55:
                grade.textContent = `Your Grade : B`;
                break;
    
            case getResult >= 45:
                grade.textContent = `Your Grade : C`;
                break;
            
            case getResult >= 35:
                grade.textContent = `Your Grade : S`;
                break;
    
            default:
                grade.textContent = `Your Grade : F`;
        }
    }
    else {
        grade.textContent = `Result should be a number between 0 and 100 !`;
    }
}
