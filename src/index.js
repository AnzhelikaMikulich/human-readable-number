module.exports = function toReadable(number) {
  let numberLetters = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
  ];

  if (number < 100) {
      if (number <= 20) {
          return numberLetters[number];
      } else if (number > 20 && number < 100 && number % 10 === 0) {
        if(number === 40){
          return "forty"
        }else {
         return `${numberLetters[10 + number / 10].split("").slice(0, -3).join("")}y`
        }
          
      } else {
         let one = +number.toString().split("").slice(0, 1).join("");
         let two = +number.toString().split("").slice(1).join("");
         if(one === 2){
           return `${numberLetters[20]} ${numberLetters[two]}`
         } else if(one === 4){
          return `forty ${numberLetters[two]}`
         }else{
         return `${numberLetters[one + 10].split("").slice(0, -3).join("")}y ${
            numberLetters[two]}`;}}

  } else {
      if (number % 100 === 0) {
          return `${numberLetters[number / 100]} hundred`;
      } else {
        let one = +number.toString().split("").slice(0, 1).join("");
         let two = +number.toString().split("").slice(1,2).join("");
         let three = +number.toString().split("").slice(2).join("");
          let num = +(two.toString() + three.toString());
          console.log(two)
          if (num <= 20) {
              return `${numberLetters[one]} hundred ${numberLetters[num]}`;
          } else if (num > 20 && num % 10 === 0) {
            if(two === 4){
              return  `${numberLetters[one]} hundred forty`
            }else{
              return (`${numberLetters[one]} hundred ${numberLetters[10 + num / 10]
                .split("")
                .slice(0, -3)
                .join("")}y`) 
            }
          } else{
            return two === 2
              ? `${numberLetters[one]} hundred ${numberLetters[20]} ${numberLetters[three]}`
              : two === 4
              ? `${numberLetters[one]} hundred forty ${numberLetters[three]}`
              : `${numberLetters[one]} hundred ${numberLetters[two + 10]
                  .split("")
                  .slice(0, -3)
                  .join("")}y ${numberLetters[three]}`;
          }
          }
      }
  }

