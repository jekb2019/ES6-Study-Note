class Student{
    constructor(name,age,enrolled,score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
];

// Q: find a student with the score 90
{
    const result = students.find(student =>student.score === 90);
    // console.log(result);
}

// Q: make an array of enrolled students
{
    const result = students.filter(student => student.enrolled);
    // console.log(result);
}

// Q: make an array containing on ly the students' scores
//result should be: [45, 80, 90, 66, 88]
//map method는 배열에 들어있는 요소 하나하나를 다른걸로 바꿔주는 함수이다
{
    const result = students.map(student => student.score);
    // console.log(result);
}

// Q: Check if there is a student with the score lower than 50
{
    // some: callback함수에서 true가 반환되는 element가 있으면 true를 반환함
    const result = students.some(student => student.score <50);
    // console.log(result);
    // every: callback함수가 모든 요소에 대해 true를 반환해야지만 true를 반환함
    const result2 = !students.every(student => student.score >=50);
    // console.log(result2);
}

//Q: compute students' average score
//reduce: 배열의 각 요소에 대해 어떤 함수를 실행한 결과값을 누적할 때 사용
{
    const result = students.reduce((prev,curr) => {
        // console.log(prev); //첫 요소를 돌때 이 값은 사용자 지정된 값인 0가 된다
        // console.log(curr);
        return prev + curr.score; //여기서 리턴된 값이 다음의 prev값이 된다
    },0);
    // console.log(result/students.length);
}

//Q: make a string containing all the scores
{
    // const result = students.map(student =>student.score);
    // console.log(result);//score배열 만들기
    // console.log(result.join());//string으로 바꾸기

    // 더 간단한 방법
    const result = students.map(student =>student.score).join();
    console.log(result);

}