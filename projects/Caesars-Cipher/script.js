function rot13(str) {
  function codeArr(obj, i) {
    if (i > "A".charCodeAt(0) + 12) {
      return obj;
    } else {
      obj[String.fromCharCode(i)] =  String.fromCharCode(i + 13);
      obj[String.fromCharCode(i + 13)] =  String.fromCharCode(i);
      return codeArr(obj, ++i);
    }
  }
  function iterStr(newStr, i) {
    if (i > str.length - 1) {
      return newStr;
    } else {
      if (obj[str[i]] !== undefined) {
        newStr += obj[str[i]];
      } else {
        newStr += str[i]
      }
      return iterStr(newStr, ++i);
    }
  }
  let obj = codeArr({}, "A".charCodeAt(0));
  let newStr = "";
  return iterStr("", 0);
}

const outputTxt = document.getElementById('encrypt');
const inputForm = document.getElementById("input-box");
inputForm.addEventListener("keypress", function(e) {
  outputTxt.innerHTML += `${rot13(String.fromCharCode(e["charCode"]).toUpperCase())}`;
});

const clear = document.getElementById("reset-bttn");
clear.addEventListener("click", function() {
  outputTxt.innerHTML = "";
})