(function() {
    var cx = '017270073310002898913:lawqytdb75y';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

function Human(){
    this.name = 'Volodia';
    this.gender = 'male';
    this.age = 31;
    this.weight = 100;
    this.height = 178;
}
function Worker() {
    this.placeOfWork = 'Beetroot';
    this.salary = 200;
    this.work = function () {
        alert('method: work');
    };
}
function Student() {
    this.placeOfStudy = 'Beetroot Academy';
    this.scolarship = 100;
    var seeFilms = function() {
        alert('method: watch films');
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Worker_New = new Worker();

console.log('Worker_New.name', Worker_New.name);
console.log('Worker_New.age', Worker_New.age);
console.log('Worker_New.gender', Worker_New.gender);
console.log('Worker_New.height', Worker_New.height);
console.log('Worker_New.weight', Worker_New.weight);
console.log('Worker_New.placeOfWork', Worker_New.placeOfWork);
console.log('Worker_New.salary', Worker_New.salary);

var Student_New = new Student();
console.log('Student_New.name', Student_New.name);
console.log('Student_New.age', Student_New.age);
console.log('Student_New.gender', Student_New.gender);
console.log('Student_New.height', Student_New.height);
console.log('Student_New.weight', Student_New.weight);
console.log('Student_New.placeOfStudy', Student_New.placeOfStudy);
console.log('Student_New.scolarship', Student_New.scolarship);


