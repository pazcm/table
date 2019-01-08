//will assign css class .selection to the odd numbered table rows
 $(document).ready(function(){
    $("tr:odd").addClass("selection-odd");
});

$(document).ready(function(){
  $("tr:even").addClass("selection-even");
});

//when a table header is clicked, the corresponding row should highlight

$(document).ready(function(){
    $("th").click(function(){
        $("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");
    })
});
