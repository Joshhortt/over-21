// ******BRANCHING******

/* ****ONE BRANCH****
Once we collect the user's age, we can write a JavaScript if statement, or a branch.
If statements consist of the keyword if followed by a condition in parentheses.
The condition will always evaluate to a boolean value: either true or false.
After the condition, we add the code that we want to execute if the condition is true.
This code is set between two curly braces on it's own lines.
(Note the standards for an if statement: spacing, two-space indentation and NO semicolon after the final curly brace.)
When the condition evaluates to true, the code that follows between the curly braces is executed.
If the condition is false, the code in the curly braces is not executed and the JavaScript processing moves on.
Let's work through a couple examples of our age condition.
If our user indicates an age of 25, then the condition age >= 21 becomes 25 >= 21, which evaluates to true.
The code in the curly braces is run and the div with an id of drinks is shown.
If age is 16, age >= 21 becomes 16 >= 21, which evaluates to false. In this case,
the code in the curly braces is skipped and nothing is displayed.

****This is the code below****
*/
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#drinks').show();
  }
});
