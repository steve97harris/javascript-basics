var name = "Steve";
var age = 26;
var message = "Name: " + name + ", Age:" + age;
console.log(message);

var balances = [50.4, 400.1, -300.6];
var studentNames = ["x", name, "z"];
var listA = [];
listA.push(...studentNames);

console.log(listA.length)
var idx = listA.indexOf(name);
console.log(listA + ", "+ idx);
if (idx > -1)
{
    listA.splice(idx,1);    // deletes number of elements starting from idx for a count of 1 ;
}
console.log(listA);

var v1 = "20";
var v2 = 20;
if (v1 == v2)       // ignores the type of the variable so will indicate they are equal.
    console.log("SAME!")
else
    console.log("NOT SAME...")
if (v1 === v2)      // Does NOT ignore the type of the variable so will indicate they are NOT equal.
    console.log("SAME!")
else
    console.log("NOT SAME...")