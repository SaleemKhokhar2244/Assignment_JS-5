// ..............ARRAYS.............

// ..............Q No.1.............
var studentNames = ["Yasir", "Abbas", "Jameel", "Khalid", "Shafeeq", "Hussain", "Farooq", "Fakhar", "Asim", "Kashif", "Saleem", ];
studentNames;


// ..............Q No.2.............(Not Solved)
var student = [""];
students [{"Name" : "Fahad", "Class" : "Matric"}];
students;



// ..............Q No.3.............
var initialArray = ["Yasir", "Abbas", "Jameel", "Khalid", "Shafeeq", "Hussain", "Farooq", "Fakhar", "Asim", "Kashif", "Saleem", ];
initialArray;


// ..............Q No.4.............
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
number;



// ..............Q No.5.............
var booleanArray = [true, false];
booleanArray;



// ..............Q No.6.............
var mixedArray = ["Yasir", "Abbas", 50, "Jameel", true, "Khalid", 40, 50, false, 60];
mixedArray;




// ..............Q No.7.............
var eductation = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualification<h2>");
    document.write("<ol>"+"<li>"+(eductation[0])+"</li>"+
        "<li>"+(eductation[1])+"</li>"+
        "<li>"+(eductation[2])+"</li>"+
        "<li>"+(eductation[3])+"</li>"+
        "<li>"+(eductation[4])+"</li>"+
        "<li>"+(eductation[5])+"</li>"+
        "<li>"+(eductation[6])+"</li>"+
        "<li>"+(eductation[7])+"</li>"+
        "</ol>");
    



// ..............Q No.8.............
var student = ["Abrar", "Junaid", "Farhan"];
var marks = [320, 280, 430];
var percentage = ["64%", "46%", "96%"];

document.write("Score of "+student[0]+" is "+marks[0]+" Percentage : "+percentage[0]+"<br>");
document.write("Score of "+student[1]+" is "+marks[1]+" Percentage : "+percentage[1]+"<br>");
document.write("Score of "+student[2]+" is "+marks[2]+" Percentage : "+percentage[2]+"<br>");



// ..............Q No.9.............
var color = [" Red", " Green", " Blue", " Yellow"];
document.write(color + "<br><br>");

// ..............Q No.9 (a).............
var userColor1 = prompt("What color you want to add to the begining");
color.unshift(userColor1);
document.write(color);

// ..............Q No.9 (b).............
var userColor2 = prompt("What color you want to add to the end");
color.push(userColor2);
document.write(color);


// ..............Q No.9 (c).............
var userColor3 = prompt("What two color you want to add to the begining");
color.unshift(userColor3);
document.write(color);



// ..............Q No.9 (d).............
var userColor4 = prompt("Delete the first color in the array");
color.shift(userColor4);
document.write(color);



// ..............Q No.9 (e).............
var userColor5 = prompt("Delete the last color in the array");
color.pop(userColor5);
document.write(color);



// ..............Q No.9 (f).............
var userColor8 = +prompt("In which index you want to add a color");
var userColor9 = prompt("write the color name");
color.splice(userColor8, 0,userColor9);
document.write(color);



// ..............Q No.9 (g).............
var userColor6 = prompt("In which index you want to delete color(s)");
var userColor7 = prompt("How many colors you want to deleate");
var result = color.slice(userColor6, userColor7)

document.write(result);

// ..............Q No.10.............
var scores = [320, 230, 480, 120];
document.write("Scores of Students : "+ scores +"<br><br>");
document.write("Ordered Scores of Students : "+ scores.sort());



// ..............Q No.11.............
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List " +"<br>" +city+"<br><br>");
document.write("Selected Cities List " +"<br>" +city.slice(2));

// ..............Q No.12.............
var cat = ["This ", "is ", "my ", "cat "];
document.write("Array"+"<br>"+cat+"<br><br>");
document.write("String"+"<br>"+cat.join(" "));


// ..............Q No.13.............
var equip = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices"+"<br>"+equip+"<br><br>")
document.write("Out"+"<br>"+equip[0]+"<br><br>")
document.write("Out"+"<br>"+equip[1]+"<br><br>")
document.write("Out"+"<br>"+equip[2]+"<br><br>")
document.write("Out"+"<br>"+equip[3]+"<br><br>")



// ..............Q No.14.............
var equip = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices"+"<br>"+equip+"<br><br>")
document.write("Out in reverse"+"<br>"+equip[3]+"<br><br>")
document.write("Out in reverse"+"<br>"+equip[2]+"<br><br>")
document.write("Out in reverse"+"<br>"+equip[1]+"<br><br>")
document.write("Out in reverse"+"<br>"+equip[0]+"<br><br>")




// ..............Q No.15.............
var manufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<ol>"+"Manufacture "+"<br><br>"+
        "<li>"+(manufacture[0])+"</li>"+
        "<li>"+(manufacture[1])+"</li>"+
        "<li>"+(manufacture[2])+"</li>"+
        "<li>"+(manufacture[3])+"</li>"+
        "<li>"+(manufacture[4])+"</li>"+
        "<li>"+(manufacture[5])+"</li>"+
        "</ol>");



