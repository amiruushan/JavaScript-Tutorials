// for loop
for (let i=1; i <= 20; i++){
    //continue
    if(i % 3 == 0){
        continue; // skip the itteration when the number is divisible by 3
    }
    // break
    else if(i > 17){
        break; // stop the loop when the number is 17
    }
    else{
        console.log(i);
    }
}