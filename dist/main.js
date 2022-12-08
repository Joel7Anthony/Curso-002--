"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradesBookSetup = [];
let course = [];
/*enum Course {
  Programacion = "Programacion Visual",
  BaseDatos = "Base de Datos",
  Metodologias = "Metodologias",
}*/
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
    Area["Artes"] = "Artes Culinarias";
})(Area || (Area = {}));
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        inscription: parseInt(readFormHtml("inscription")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addCourse() {
    let currentCourse = {
        name: readFormHtml("name-course"),
    };
    course.push(currentCourse);
    console.table(course);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        topgrade: parseInt(readFormHtml("topgrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    area.innerHTML = "";
    areas.forEach((area1) => {
        let option = document.createElement("option");
        option.value = area1;
        (option.text = area1), area.add(option);
    });
    let activityGradeBook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#course-gradebook option").forEach((option) => option.remove);
    activities.forEach((activity1) => {
        let option = document.createElement("option");
        (option.value = activity1.name),
            (option.text = activity1.name),
            activityGradeBook.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    document.querySelectorAll("#course-gradebook option").forEach(Option => Option.remove());
    course.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        (option.text = value.name),
            courseGradeBook.add(option);
    });
    let nameSummary = document.getElementById("name-student");
    document.querySelectorAll("#name-student option").forEach(Option => Option.remove());
    students.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        (option.text = value.fullName),
            nameSummary.add(option);
    });
    let courseSummary = document.getElementById("course-grade");
    document.querySelectorAll("#course-grade option").forEach(Option => Option.remove());
    course.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        (option.text = value.name),
            courseSummary.add(option);
    });
    let gradeSumary = document.getElementById("gradeendar");
    let teacherSummary = document.getElementById("name-grade");
    document.querySelectorAll("#name-grade option").forEach(Option => Option.remove());
    teachers.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        (option.text = value.fullName),
            teacherSummary.add(option);
    });
}
document.querySelector("#estadoNota").addEventListener("click", (e) => {
    var _a, _b, _c;
    let span = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.children[0];
    let nota = ((_c = (_b = e.target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.children[4].lastElementChild).value;
    if (parseInt(nota) >= 70) {
        console.log("aprobado");
        span.textContent = "aprobado";
    }
    else {
        console.log("reprobado");
        span.textContent = "reprobado";
    }
    console.log(nota);
});
initSelect();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
