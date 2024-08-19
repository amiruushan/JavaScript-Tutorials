const userName = document.getElementById("userName");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("fName");
const emailUserName = document.getElementById("mailUserName");
const serviceProvider = document.getElementById("serviceProvider");
// letfullName;

submitBtn.onclick = function(){
    let fullName = userName.value;
    firstName.textContent = `Your first name is: ${fullName.slice(0, fullName.indexOf(" "))}`;

    let mailAdress = email.value;
    emailUserName.textContent = `Your email is: ${mailAdress.slice(0, mailAdress.indexOf("@"))}`;
    
    let service = mailAdress.slice(mailAdress.indexOf("@")+1, mailAdress.length);
    serviceProvider.textContent = `Your service provider is: ${service}`;
    
}