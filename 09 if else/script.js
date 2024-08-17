const marks = document.getElementById("marks");
const submit = document.getElementById("submitBtn");
const result = document.getElementById("result");
let studentMarks;
// geting user input for marks
submit.onclick = function(){
    studentMarks = marks.value;
    studentMarks = Number(studentMarks);
    // condition checking
    if (studentMarks >= 0 && studentMarks <= 100){
        if (studentMarks >= 75) {
            result.textContent = `Status: Pass | Grade: A` ;
        }
        else if (studentMarks >= 60){
            result.textContent = `Status: Pass | Grade: B` ;
        }
        else if (studentMarks >= 50){
            result.textContent = `Status: Pass | Grade: C` ;
        }
        else if (studentMarks >= 35){
            result.textContent = `Status: Pass | Grade: S` ;
        }else {
            result.textContent = `Status: Fail | Grade: F` ;
        }  
    }
    else {
        result.textContent = "Invalid marks. Please enter marks between 0 and 100";
    }
}