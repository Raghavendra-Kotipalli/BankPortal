$(document).ready(function(){
	var messageBox = document.createElement("div");
	messageBox.id= "chatBotDiv";
	messageBox.innerHTML = '<span>Click Here</span>';
	document.body.appendChild(messageBox);

	let script = document.createElement('script');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js';
	document.body.appendChild(script);

	$("#chatBotDiv").click(function(){
		alert("Abc");
		loadJSAsync()
	});
});

function loadJSAsync(url) {
	console.log("script loading");
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}