function calculateTax(income, expenses) {

    if (typeof income !== 'number' || typeof expenses !== 'number' || income <= 0 || expenses <= 0 || income < expenses) {
        return  "Invalid Input";
    } 
    else{
        const difference = income - expenses;
        const tax = difference * .20;
        return tax;
    }
}

function sendNotification(email) {

    if (!email.includes('@')){
       return "Invalid Email"
    }
    const devidedEmail = email.split('@');
    const firstName = devidedEmail[0];
    const lastName = devidedEmail[1];

    return firstName + (' ') + 'sent you an email from' + (' ') + lastName;
}


function checkDigitsInName(name) {

    if (typeof name !== 'string'){
        return " Invalid Input "
    }
    for ( let i = 0; i < name.length; i++){
    let number = name [i];
    if (!isNaN(number)){
        return true 
    }
    }
        return false
}

function calculateFinalScore(obj) {
   
    if ( typeof obj !== 'object'){
        return "Invalid Input";
    }
    let totalPoints = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalPoints += 20;
    }
    if ( totalPoints >= 80){
        return true;
    }else{
        return false;
    }
}

function  waitingTime(waitingTimes, serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    let sum = 0;
    for ( let item of waitingTimes){
        sum += item;
    }
    const waitingTimesAverage = sum / waitingTimes.length;
    const haveToWait =serialNumber -1 - waitingTimes.length;
    const finalTime = haveToWait * Math.round(waitingTimesAverage);
    return Math.round(finalTime);
}




