const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-date");
const  checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

function compareValues(sum,luckyNumber){
  if(sum % luckyNumber===0){
      outputBox.value="YOUR BIRTHDAY IS LUCKEY🎉✨";
  }else{
    outputBox.value="MAKE PROGRESS SHINE ON YOUR OWN🔥🚀"
  }
}

function checkNumberIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculationSum(dob);  
  compareValues(sum,luckyNumber.value);
}

function calculationSum(dob) {
dob = dob.replaceAll("-","");
let sum = 0;
for(let i=0; i<dob.length; i++){
  sum = sum + Number(dob.charAt(i));
}
return sum;
}

checkNumberButton.addEventListener('click',checkNumberIsLucky)