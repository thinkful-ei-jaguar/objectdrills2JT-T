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

console.log(makeStudentsReport(data));