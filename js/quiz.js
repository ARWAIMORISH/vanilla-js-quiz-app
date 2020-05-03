var answer = new Array(2);
answer[0] = "London";
answer[1] = "Five";

function test(form) {
  for (j = 0; j < 2; j++) {
    currQuestion = j * 3;
    for (i = 0; i < 3; i++) {
      if (form.elements[i + currQuestion].checked) {
        if (form.elements[i + currQuestion].value == answer[j]) {
          alert("CORRECT!");

          break;
        } else {
          alert("WRONG! the correct answer is " + answer[j]);
        }
      }
    }
  }
}

