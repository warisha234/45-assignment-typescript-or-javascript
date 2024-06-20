// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

interface studentId{
    rollno: number;
    serialno: number;
    className: string;
    schoolName: string;
}

let studentId={
    rollno: 10,
    serialno: 2,
    className: "Batch 01",
    schoolName: "GIAIC",
}

console.log(studentId);
