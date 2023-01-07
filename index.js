
function scuberGreetingForFeet(someNumber){
  let result;
  if (someNumber<=400){
  result = 'This one is on me!';
  }
    else if (someNumber >400 && someNumber<2000){
      result = 'That will be twenty bucks.';
  }
    else if (someNumber >2000 && someNumber <2500){
      result = 'I will gladly take your thirty bucks.';
}
    else if (someNumber >2500){
      result = 'No can do.';
    }
  return result;
}

function ternaryCheckCity(city){
  let msg;
  if (city != "NYC"){
    msg = "No go.";
  } else if (city = 'NYC'){
    msg = 'Ok, sounds good.'
  }

  return msg;

}

function switchOnCharmFromTip(tip){
  let result;
  switch (tip){
  case 'not as generous': 
  result = 'Thank you.';
  break;
  case 'generous': 
  result ='Thank you so much.'; 
  break;
  default: 
  result = 'Bye.';

  }

  return result;
}