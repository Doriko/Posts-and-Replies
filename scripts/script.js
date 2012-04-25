var input = $("#addText input");
var send = $("#send");
var reply = $(".reply");

$(document).ready(function(){
	input
		.focus()
		.keyup(enter);
	send.click(postNew);
	reply.live({
		click: replyNew
	});
	$(".delete").click(removePost);
});

//FUNCTIONS

function postNew () {
	var comment = $("#comment").val();
	if (comment != ""){
		var time = new Date();
		var h = time.getHours();
		var m = time.getMinutes();
		if (m<10) {
			m = "0"+m;
		}
		var time = h+":"+m;
		var cont = comment;
		var newPost = $(".newItem").html();
		newPost = newPost.replace("temp_time",time);
		newPost = newPost.replace("temp_cont",cont);
		$("#mainList").append('<li class="mainItem">'+newPost+'</li>');
		input.val(""); //reset the input box
	}
	$("#addText input").focus(); //refocus on the input box area
};

function replyNew () {
	var comment = $("#comment").val();
	if (comment != ""){
		var time = new Date();
		var h = time.getHours();
		var m = time.getMinutes();
		if (m<10) {
			m = "0"+m;
		}
		var time = h+":"+m;
		var cont = comment;
		var newComment = $(".newSubItem").html();
		newComment = newComment.replace("temp_time",time);
		newComment = newComment.replace("temp_cont",cont);
		$(this).parent().parent().siblings(".subList").append('<li class="subItem">'+newComment+'</li>');
		input.val(""); //reset the input box
	}
	$("#addText input").focus(); //refocus on the input box area
};

function enter (key) {
		if (key.which === 13){
			postNew ();
		}
};

function removePost () {
		$(this).parent().parent().parent().remove();
};

