//q1    
    const convertToUpperCase = (array) =>
    array.map((string) => string.toUpperCase());
  
  const string = ["hello", "world"];
  const upperCaseStrings = convertToUpperCase(string);
  
  console.log(upperCaseStrings);
  

  //q2
  const filterEvenNumbers = (numbers) =>
    numbers.filter((number) => number % 2 === 0);
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterEvenNumbers(numbers);
  
  console.log(evenNumbers);  


    //q3
    const removeEmptyStrings = strings => strings.filter(string => string.trim() !== "");

const strings = ["hello","","world","","javascript "];
const nonEmptyStrings = removeEmptyStrings(strings);

console.log(nonEmptyStrings);

//q4
const concatenateWords = words => words.reduce((acc, word) => acc.concat(word), []).join(" ");

const words = ["hello", "world", "javascript"];
const concatenatedString = concatenateWords(words);

console.log(concatenatedString);

//q5
const sumOfSquaredNumbers = array => array.reduce((sum, item) =>
    typeof item === 'number' ? sum + item ** 2 : sum, 0);
  
  const array = [4, 'hello', 3, true, 'Uki', 5];
  const sumOfSquared = sumOfSquaredNumbers(array);
  
  console.log(sumOfSquared); 

  //q6
  const reverseArray = array => array.slice().reverse();

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); 
console.log(originalArray); 

//q7
const createPerson = (name, age) => ({
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  });
  
  
  const person = createPerson('John', 25);
  person.greet();

  //q8
  const getHighGrades = students => students
  .filter(student => student.grade > 80)
  .map(student => student.name);


const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 85 }
];

const highGradeStudents = getHighGrades(students);
console.log(highGradeStudents); 



//q10
const age = 30; 

if (age >= 18) {
  console.log("Adult");
}

//q11
const score = 70; 

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}


//q12
const grade = 78; 

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 75) {
  console.log("Good");
} else if (grade >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}


//q13
function addTask(tasks, newTask) {
    tasks.push(newTask);
    return tasks;
  }
  
  const tasks = ['Buy groceries', 'Clean the house'];
  console.log(addTask(tasks, 'Pay bills'));


//q14
function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    return commonElements;
  }
  
  console.log(findCommonElements([1, 2, 3], [3, 4, 5]));

//q15
function updateEmployeeRecord(employee, updates) {
    const updatedEmployee = { ...employee, ...updates };
    return updatedEmployee;
  }
  
  const employee = { name: 'John', position: 'Developer', salary: 50000 }; 
  const updates = { position: 'Senior Developer', salary: 60000 };
  console.log(updateEmployeeRecord(employee, updates));

  //q16
  function inventoryValue(products) {
    return products.reduce((totalValue, product) => {
      return totalValue + product.price * product.quantity;
    }, 0);
  }
  
  const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
  ];
  
  console.log(inventoryValue(products));

    //q17
    function applyDiscount(price, discountPercentage = 10) {
        const discountAmount = (price * discountPercentage) / 100;
        return price - discountAmount;
      }
      
      
      console.log(applyDiscount(100)); 
      console.log(applyDiscount(100, 20));


    //q18
    function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }
      
      
      console.log(factorial(6)); 
      console.log(factorial(0)); 
      console.log(factorial(1));

      //q19
      function registerUser(users, newUser) {
        const existingUser = users.find(user => user.username === newUser.username);
      
        if (!existingUser) {
          users.push(newUser);
          console.log(`User '${newUser.username}' has been registered.`);
        } else {
          console.log(`Username '${newUser.username}' already exists.`);
        }
      
        return users;
      }
      
      
      const users = [
        { username: 'subas', email: 'subas@example.com' },
        { username: 'raja', email: 'raja@example.com' }
      ];
      const newUser1 = { username: 'subas', email: 'subas@example.com' };
      const newUser2 = { username: 'raja', email: 'raja@example.com' };
      
      console.log(registerUser(users, newUser1));
      console.log(registerUser(users, newUser2));