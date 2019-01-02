//will assign css class .selection to the odd numbered table rows
 $(document).ready(function(){
    $("tr:odd").addClass("selection-odd");
});

$(document).ready(function(){
  $("tr:even").addClass("selection-even");
});

