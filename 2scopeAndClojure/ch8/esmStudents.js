export { getName };
// ************************
var records = [
    { id: 14, name: "Kyle", grade: 86 },
    { id: 73, name: "Suzy", grade: 87 },
    { id: 112, name: "Frank", grade: 75 },
    { id: 6, name: "Sarah", grade: 91 }
];
function getName(studentID) {
    var student = records.find(
        student => student.id == studentID
    );
    return student.name;
}


/*
another example of how to export

export function getName(studentID) {
// ..
}


export default function getName(studentID) {          // on import your don't need to name anything.
// ..
}
 */