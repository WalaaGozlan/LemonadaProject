var images = [
{
	src:"https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2016/10/shutterstock_221000479-2-500x345.jpg",
	name: 'healthy lemon'
},
{
	src:"https://hhp-blog.s3.amazonaws.com/2020/02/GettyImages-1151196088.jpg",
	name:'change your habits'
},
{
	src:"https://news.rationalcdn.com/wp-content/uploads/2019/07/STAYING-HEALTHY.png",
	name:'STAYING HEALTHY'
},
{
	src:"https://www.sarahsparks.co.uk/ideas/wp-content/uploads/2016/10/F838D725-3985-B301-FF27-1511754ED9D0.jpg",
	name: 'healthy brain'
},
{
	src:"https://www.onlinemedsshop.net/wp-content/uploads/2019/10/balance-1080x675.jpg",
	name: 'healthy body'
},
{
	src:"https://m.media-amazon.com/images/I/81znikv+CDL._SS500_.jpg",
	name: 'healthy soul'
}
]

$(".Back").click(function () {
	window.history.back();
})

$("#feedback").click(function(){
	window.location.href = "feedback.html";
})


var objPeople = [
{
	firstName:"jack",
	lastName:"mer",
	email:"jackmer@gmail.com"
},
{
	firstName:"josh",
	lastName:"eco",
	email:"josheco@gmail.com"
},
{
	firstName:"harry",
	lastName:"potter",
	email:"harrypotterer@gmail.com"
}
]

$("#sub").click(function(){
	var first = $(".feed")[0].val;
	var last = $(".feed")[1].val;
	var e = $("#check").val;
	for (var i = 0; i< objPeople.length; i++) {
		if(first == objPeople[i].firstName && last == objPeople[i].lastName && e == objPeople[i].email){
			alert("Submit successfully")
		}else{
			alert("You need to fill your info!")
		}
	}
})
 
 console.log($("#sub"))
 // $("#sub").click(function(){
 // 	alert("Submit successfully!");
 // }








//  var container = $(".feed")

// $("#sub").click(function(){

//  	alert("Submit successfully!");

// 	}




// var container = [
// {
// 	label:"First Name ",
// 	input:$("input")
// },
// {
// 	label:"Last Name",
// 	input:
// },
// {
// 	label:"Your feedback",
// 	input:
// },
// {
// 	label:
// 	textarea:
// }

// ]

// $("#sub").click(function(){
// 	if($("#inputval").val() === " "){
// 		alert("you should write your full name and email");
// 	}
// 	// else if($("textarea").val() === ""){
// 	// 	alert("We will be happy to listen from you ^__^")
// 	// }
	
// 	else{
// 		alert("Submit successfully!");
// 	}
	
// })
