const students = [
    "john",
    "Luz",
    "jose louis",
    "philip",
    "Rodney",
    "Eric",
    "William",
    "Danger",
    "Sarah",
    "Mariana",
];

const grades = [
    5,
    8,
    4,
    8,
    9,
    3,
    8,
    6,
    9,
    9,
];

const totals =[];

function combine () {
    for (i=0; i<students.length; i++){
        totals[i] = students[i] + " " + grades[i];
    }
}

function print (){
    for (i=0; i<totals.length; i++){
    
    console.log(totals[i] + "\n" );
    }
}

combine();
print();