const user ={
    name :"Jishnu"
};

const {
    name: studentName, city="Chennai"

} = user;
console.log(studentName);
console.log(city);