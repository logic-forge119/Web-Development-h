let a= "gajiul";
console.log(a)
console.log(a[0])

//for array length=  variable_name.length;
console.log(a.length)

//template literals syntax= full syntax under backtic sign and all of variables name in under ${variable_name}.......;

let real_name = "gajiul";
let friend_name = "parvez";
//normal way=
console.log("His name is "+real_name+ " and his friends name is "+friend_name)
//template literals=
console.log(`His name is ${real_name} and his friends name is ${friend_name}`)

//some function=  toupper function,tolower funtion,length;
let varsity="Daffodil";

console.log(varsity.toUpperCase()) 
console.log(varsity.toLowerCase()) 
console.log(varsity.length) 

//string slice syntax= variable_name.slice(from to end);
console.log(varsity.slice(2))
console.log(varsity.slice(2,5))//user number next letter+ end number letter will display
//replace fuction syntax= variable_name.replace("pre_letter","fut_letter")
console.log(varsity.replace("Da","Fa"))

// concatination syntax= varible_name.concat(variable_name,for manually add use "text")
let address= "asuliya";
console.log(varsity.concat(address,"savar,dhaka"))