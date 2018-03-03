


function time(hour, minute, period){
	var mornEve;
    console.log("123");
	if(period==="AM")
	{
	 	mornEve = "In the morning";
	}
	else if (period==="PM")
	{
		mornEve = "In the morning";
	}

	if(minute>45){
		console.log("It's almost " + hour + " " +mornEve);
	} 
	else if(minute<15)
	{
		console.log("It's just after " + hour + " " +mornEve);
	}
    else{
        console.log("It's " + hour + " " +mornEve);
    }
}

time(7, 20,"PM");