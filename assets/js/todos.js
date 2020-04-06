// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Remove the item
$("ul").on("click", "span",  function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Enter for the input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		let text = $(this).val();
		$(this).val("");
		$("ul").append(" <li><span><i class='fa fa-trash'> </i> </span> " + text + " </li>");
	}
});

// Click the plus sign
$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});