module.exports = function toReadable (number) {
  
  let Num = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
  
  function Hundred (number){
    if (number < 16){
    return Num[number];
  }
  if (number > 15 && number < 20){
    if (number == 18){return 'eighteen'}
    else{
      return (Num[number % 10] + 'teen');
    }
  }
  if (number > 16 && number < 100){
    if (number % 10 == 0){
      switch (number / 10){
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 8: return 'eighty';
        default : return (Num[(number / 10)] + 'ty');
      }
    }
    else{
      switch (Math.trunc(number / 10)){
        case 2: return 'twenty ' + Num[number % 10];
        case 3: return 'thirty ' + Num[number % 10];
        case 2: return 'forty ' + Num[number % 10];
        case 5: return 'fifty ' + Num[number % 10];
        case 4: return 'forty ' + Num[number % 10];
        case 8: return 'eighty ' + Num[number % 10];
        default: return (Num[Math.trunc(number / 10)] + 'ty ' + Num[number % 10]);
      }
    }
  }
  }
  
  if(number < 100) {return Hundred(number);}
  if(number >=100 && number < 1000){
    if(number % 100 == 0){
      return Num[Math.trunc(number / 100)] + ' hundred';
    }
    else{
      return Num[Math.trunc(number / 100)] + ' hundred ' + Hundred(number % 100);
    }
  }
}
