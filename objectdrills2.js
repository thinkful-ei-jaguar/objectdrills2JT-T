'use strict';

const data = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentsReport(data) {
  return data.map(function(item) {

    return `${item.name} : ${item.grade}`;
        
  });
}

//console.log(makeStudentsReport(data));
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course,
    };
  });
}
//console.log(enrollInSummerSchool(studentData));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}
//onsole.log(findById(scratchData,22));

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  city: 'Chicago',
  name: 'Jane Doe',
  id: 2,
  age: 34,
};
  
// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const expectedKeys = ['id', 'name', 'age', 'city'];
  
function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for (let i = 0; i < expectedKeys.length; i++){
    if(!Object.keys(object).find(key => key === expectedKeys[i])){
      return false;
    }
  }
  return true;
}
console.log(validateKeys(objectA, expectedKeys));