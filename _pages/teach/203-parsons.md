---
title: "Python Parsons Problem"
permalink: /teaching/python/parsons
author_profile: false
---



# CSCI 203 Parsons Problems

## `for` loop in a function

Suppose we have the following code: 


```python
def vet_applications(apps):
    # your code here


apps = ["Done", "In-Progress", "In-Progress", "Done"]
vet_applications(apps)
```

You want your `vet_applications` function to `print` out `"Interview"` for each application that is done, and `print` out `"Rejected"` for each application that is `"In-Progress"`

So you want the following output:
```python 
"Interview"
"Rejected"
"Rejected"
"Interview"
```

**Click-and-drag the following lines of code (with the correct indentation!)**

<link href="https://js-parsons.github.io/js/js-parsons/parsons.css" rel="stylesheet" />
<link href="https://js-parsons.github.io/js/js-parsons/lib/prettify.css" rel="stylesheet" />

<script src="https://js-parsons.github.io/js/js-parsons/lib/jquery.min.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/jquery-ui.min.js"></script>
<script src="https://js-parsons.github.io/js/jquery.ui.touch-punch.min.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/skulpt.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/skulpt-stdlib.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/underscore-min.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/lis.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/jquery.sound.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/lib/prettify.js"></script>
<script src="https://js-parsons.github.io/js/js-parsons/parsons.js"></script>


<div id="sortableTrash" class="sortable-code"></div> 
<div id="sortable" class="sortable-code"></div> 
<div style="clear:both;"></div> 
<p> 
    <input id="feedbackLink" value="Get Feedback" type="button" /> 
    <input id="newInstanceLink" value="Reset Problem" type="button" /> 
</p> 
<script type="text/javascript"> 
(function(){
  var initial = "for a in apps:\n" +
    "  if a == &quot;Done&quot;:\n" +
    "    print(&quot;Interview&quot;)\n" +
    "  else:\n" +
    "    print(&quot;Rejected)\n" +
    "return &quot;Interview&quot; #distractor\n" +
    "return &quot;Rejected&quot; #distractor\n" +
    "a = apps[0] #distractor";
  var parsonsPuzzle = new ParsonsWidget({
    "sortableId": "sortable",
    "max_wrong_lines": 10,
    "grader": ParsonsWidget._graders.LineBasedGrader,
    "exec_limit": 2500,
    "can_indent": true,
    "x_indent": 50,
    "lang": "en",
    "show_feedback": true,
    "trashId": "sortableTrash"
  });
  parsonsPuzzle.init(initial);
  parsonsPuzzle.shuffleLines();
  $("#newInstanceLink").click(function(event){ 
      event.preventDefault(); 
      parsonsPuzzle.shuffleLines(); 
  }); 
  $("#feedbackLink").click(function(event){ 
      event.preventDefault(); 
      parsonsPuzzle.getFeedback(); 
  }); 
})(); 
</script>