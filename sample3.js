const employee = {
    name: "Jishnu",salary:30000
};

console.log(employee.name);
console.log(employee["salary"]);

employee.salary= 35000;
console.log(employee.salary);

employee.city= "Chennai"
delete employee.city;
console.log(employee);