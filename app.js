//                  Chapter# 14 to 16

// Q# 1
// var student_name = [];
// console.log(studentNmae);

// Q# 2
// var studentNmae = [];
// console.log(studentNmae)

// Q# 3
// var str = ["Sameer Aftab"];
// console.log(str);

// Q# 4
// var num = [123];
// console.log(num);

// Q# 5
// var boolean = ["true" , "false"];
// console.log(boolean);

// Q# 6
// var mixed_array = ["Sameer Aftab" , 1234 , "true" , "false"];
// console.log(mixed_array);

// Q# 7
// var qualification = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.phil." , "PHD"];
// document.write("<h1> Qualification: </h1> <ol> <li> " + qualification[0] + "</li> <li> " + qualification[1] + "</li> <li> " + qualification[2] + "</li> <li> " + qualification[3] + "</li> <li> " + qualification[4] + "</li> <li> " + qualification[5] + "</li> <li> " + qualification[6] + "</li> <li> " + qualification[7] + "</li>");

// Q# 8
// var studentName = ["Sameer Aftab" , "Tabish Ali" , "Aftab Alam"];
// var score = [450 , 400 , 350];
// var totalMarks = 500;
// var percentage = score[0] * 100 / totalMarks;
// var percentage1 = score[1] * 100 / totalMarks;
// var percentage2 = score[2] * 100 / totalMarks;
// document.write("<h2> Score of " + studentName[0] + " is " + score[0] + " Percentage: " + percentage + " % </h2>" + "<br>" + "<h2> Score of " + studentName[1] + " is " + score[1] + " Percentage: " + percentage1 + " % </h2>" + "<br>" + "<h2> Score of " + studentName[2] + " is " + score[2] + ". Percentage: " + percentage2 + " % <h2>");

// Q# 9

// Q# 10
// var score = [320 , 480, 120 , 250, 450];
// document.write("<h3> Score of Students: " + score + "<br>" + "Ordered Score of Students: " + score[2] + " " + score[3] + " " + score[0] + " " + score[4] + " " + score[1] + " " + "</h3>");

// Q# 11
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("<h2> Cities list </h2>" + cities + "<h2> Selected cities </h2>" + cities[0] + " " + cities[4]);

// Q# 12
// var array = ["This" , "is" , "my" , "cat"];
// document.write("<h1> Array </h1>" + array + "<h1> String </h1>" + array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " ")

// Q# 13
// var devices = ["Keyboard" , "Mouse" , "Printer" , "Moniter"];
// document.write("<h1> Devices </h1>" + devices + "<h1> out </h1>" + devices[0] + "<h1> out </h1>" + devices[1] + "<h1> out </h1>" + devices[2] + "<h1> out </h1>" + devices[3]);

// Q# 14
// var devices = ["Keyboard" , "Mouse" , "Printer" , "Moniter"];
// document.write("<h1> Devices </h1>" + devices + "<h1> out </h1>" + devices[3] + "<h1> out </h1>" + devices[2] + "<h1> out </h1>" + devices[1] + "<h1> out </h1>" + devices[0]);

// Q# 15
// var phone = ["Samsung" , "Sony" , "Iphone" , "Motorola"];
// // phone.pop();
// // phone.push("Vivo");
// // phone.shift();
// // phone.unshift("Nokia");
// // phone.splice(1, 0 , "link");
// phone.slice(0 , 2);
// console.log(phone);


//                  Chapter# 17 to 20

// Q# 1
// var names = [[],[],[]];
// console.log(names);

// Q# 2
// var num = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(num);

// Q# 3
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// Q# 4
// var table = +prompt("Enter your table");
// for(var i = 1; i <= 10; i++){
//     console.log(table + "x" + i + "=" + table*i);
// }

// Q# 5
// var fruits = [];
// fruits.push("orange","strawbery");
// fruits.unshift("apple","banana");
// fruits.splice(2,0,"mango")
// console.log(fruits);
// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// Q# 6
// a:
// for (var i = 1; i <= 15; i++){
//     console.log(i);
// } 
// b:
// for(var j = 10; j >= 1; j--){
//     console.log(j);
// }
// c:
// for (var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// } 
// d:
// for(var i = 1; i <= 19; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }
// e:
// var arr = ["2k","4k","6k","8k","10k","12k","14k","18k","20k"];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Q# 7
// var arry = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter your fruit name whould you want");
// var match = "no";
// for (var i = 0; i < arry.length; i++) {
//     if (arry[i] == userInput) {
//         match = "yes";
//         console.log(userInput + " is available")
//     }
// }
// if (match === "no"){
//     console.log("We are soory " + userInput + " is not available");
// }


// Q# 8
// var num = [23,12,455,56,89,90];
// var largest = num[0,4];
// for (i = 0; i < num.length; i++){
//     if (largest <= num[i]){
//         largest = num[i];
//     }
// }
// console.log(largest);

// Q# 9
// var num = [23,12,455,56,89,90];
// var largest = num[0,4];
// for (i = 0; i < num.length; i++){
//     if (largest >= num[i]){
//         largest = num[i];
//     }
// }
// console.log(largest);

// Q# 10
// for (var i = 1; i <= 20; i++){
//     console.log(5*i);
// }