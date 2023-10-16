function customReplace(inputString, valueToReplace, valueToReplaceWith) {
  let result = "";
  let i = 0;

  while (i < inputString.length) {
    if (inputString.substr(i, valueToReplace.length) === valueToReplace) {
      result += valueToReplaceWith;
      i += valueToReplace.length;
    } else {
      result += inputString[i];
      i++;
    }
  }

  return result;
}

let inputString = "ეს არის მაგალითი სტრინგი";
let valueToReplace = "მაგალითი";
let valueToReplaceWith = "დამახსოვრება";

let newString = customReplace(inputString, valueToReplace, valueToReplaceWith);
console.log(newString);
