

//Function To Display Popup
function show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

//contact
	 function contactCheck ()
{
	var name = document.getElementById('name');
	var Mail = document.getElementById('email');
	var textarea1 = document.getElementById('msg');


	var regname = /^[A-Z]{1}[a-z]{2,19}$/;
	var regtextarea1 = /^[A-z]{1}\w+(\s?(\w|\d)+(\.|\?|\!)?)*$/;
	var regMail = /^[a-z \d]+((\.|\_|\-)?[\w \d]+)?@\w+\.(\w+\.)?\w{2,3}$/;
	var podaci = new Array();
	var error = new Array();
	var errorID = new Array();
	if(!name.value.match(regname))
	{
		error.push("Name isn't in good format!");
		errorID.push(name.id);
	}
	else
	{
		podaci.push(name.value);
	}
	if(!Mail.value.match(regMail))
	{
		error.push(" Mail isn't in good format!");
		errorID.push(Mail.id);
	}
	else
	{
		podaci.push(Mail.value);
	}
	if(!textarea1.value.match(regtextarea1))
	{
		error.push(" Message isn't in good format!");
		errorID.push(textarea1.id);
	}
	else
	{
		podaci.push(textarea1.value);
	}
	var divIspis = document.getElementById('ispis');
	var tekst = "<ul>";
	if(error.length != 0)
	{
		for(var i = 0; i < error.length; i++)
		{
			tekst += "<li>" + error[i] + "</li>";
		}
		tekst += "</ul>";
		divIspis.innerHTML = tekst;
		for(var i = 0; i < errorID.length; i++)
		{
			document.getElementById(errorID[i]).style.border = "1px solid #FF0000";
		}
	}
	else
	{
		for(var i = 0; i < podaci.length; i++)
		{
			tekst += "<li>" + podaci[i] + "</li>";
		}
		tekst += "</ul>";
		divIspis.innerHTML = tekst;
	}
}
