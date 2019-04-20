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

$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#drinks').show();
  }
});
*/


/*****TWO BRANCHES****
let's show a different message if the condition is false (the user is under 21). To do this we'll add an else branch:
Here, just like before, when the condition in parentheses evaluates to true, the code in the first set of curly braces is run.
But when the condition evaluates to false, the code in the second set of curly braces, after the else keyword, is run.
An else statement does not need a condition because the code in its curly braces is what will be run when the if condition is false.
Generally, your code is executed from top to bottom, like a car driving straight down the road.
If the condition is true, the if code runs, otherwise the else code runs.

****This is the code below****
*/
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});
