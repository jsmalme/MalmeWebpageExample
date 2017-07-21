// JavaScript Document
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];
					 

//funciton fillTable() iterates through the table_data object array				
// and populate the table "peopleTable" on the html page with the data 
//from the object array
function fillTable(){
	//iterate throught the size of the array
	for(var i = 0; i < table_data.length; i++){
		//gets the table "peopleTable" from the html document
		var table = document.getElementById("peopleTable");
		//inserts a row at the index i+1 (it will add a row at the bottom
		//of the table
		var row = table.insertRow(i+1);
		//variables first last and home will temporarily hold data
		var first, last, home;
		//inserts the first, home, and last varibales into the <tr> as 
		//<td> into their respective columns
		first = row.insertCell(0);
		last = row.insertCell(1);
		home = row.insertCell(2);
		//changes the text of the html <td> of the table to the data
		//found at the current iteration of the table_data object
		first.innerHTML = table_data[i].first_name;
		last.innerHTML = table_data[i].last_name;
		home.innerHTML = table_data[i].home;
	}
}
	
//function addPerson(first, last, home) takes three string parameters,
//it then creates another object in the table_data object array and adds 
//a new row containing the new info into the table "peopleTable"
function addPerson(){
	//tests lenght of array, if it is below 50 it will run, if not it will throw an alert
	if(table_data.length < 50){
	var f, l, h;
	//gets the values from the html form and stores them in variables
	f = document.getElementById("firstName").value;
	l = document.getElementById("lastName").value;
	h = document.getElementById("Home").value;
	
	//tests the lenght of the first name, if there is not a single character it will throw an alert
	if(f.length > 0){
		//create an object to be pushed into the array
		var obj = {first_name: f, last_name: l, home: h};
		//push the object into the array
		table_data.push(obj);
		//get the size of the array
		var size = table_data.length;
		//get table from the document
		var table = document.getElementById("peopleTable");
		//inserts a row at the index i+1 (it will add a row at the bottom
		//of the table
		var row = table.insertRow(size);
		//variables first last and home will temporarily hold data
		var first, last, home;
		//inserts the first, home, and last varibales into the <tr> as 
		//<td> into their respective columns
		first = row.insertCell(0);
		last = row.insertCell(1);
		home = row.insertCell(2);
		//changes the text of the html <td> of the table to the data
		//found at the current iteration of the table_data object
		first.innerHTML = table_data[size - 1].first_name;
		last.innerHTML = table_data[size - 1].last_name;
		home.innerHTML = table_data[size - 1].home;
	}
	else
	//alert that prompts use to enter a value for the First Name
		alert("Please enter a value for the First Name");
	}
	else
	//alert that infomrs the user that the table is full
		alert("Sorry, table is full, no more entries");
}