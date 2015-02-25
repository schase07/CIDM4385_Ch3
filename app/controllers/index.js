function transform(model){
	//convert the model to a JSON object
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//show only cars made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

//this is an event listener for when the window opens
$.mainWindow.addEventListener("open", function(){
	Alloy.Collections.cars.reset(
		[
			{
				"make":"Honda",
			 	"model":"Civic"
			},
			{
				"make":"Honda",
				"model":"Accord"
			},
			{
				"make":"Ford",
				"model":"Escape"
			},
			{
				"make":"Ford",
				"model":"Mustang"
			},
			{
				"make":"Nissan",
				"model":"Altima"
			}
		]
	);			
});


//last thing we do is open the window
$.mainWindow.open();