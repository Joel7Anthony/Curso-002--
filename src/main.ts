import { Activity } from "./entities/activity";
import { GradeBookSetup } from "./entities/gradeBookSeutp";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import {Course} from "./entities/course";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];
let gradesBookSetup: GradeBookSetup[] = [];
let course: Course [] = [];

/*enum Course {
  Programacion = "Programacion Visual",
  BaseDatos = "Base de Datos",
  Metodologias = "Metodologias",
}*/
enum Area {
  Desarrollo = "Desarrollo de Software",
  Marketing = "Marketing",
  Turismo = "Turismo",
  Artes = "Artes Culinarias",
}

function addStudent(): void {
  let currentStudent: Student = {
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

function addTeacher(): void {
  let currentTeacher: Teacher = {
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

function addActivity(): void {
  let currentActivity: Activity = {
    name: readFormHtml("name-activity"),
  };
  activities.push(currentActivity);
  console.table(activities);
  initSelect();
}

function addCourse(): void {
  let currentCourse: Course = {
    name: readFormHtml("name-course"),
  };
  course.push(currentCourse);
  console.table(course);
  initSelect();
}

function addGradeBookSetup(): void {
  let currentGradeBookSetup: GradeBookSetup = {
    value: readFormHtml("value-gradebook"),
    course: readFormHtml("course-gradebook"),
    activity: readFormHtml("activity-gradebook"),
    topgrade: parseInt(readFormHtml("topgrade-gradebook")),
  };
  gradesBookSetup.push(currentGradeBookSetup);
  console.table(gradesBookSetup);
}

function initSelect(): void {
  let area = document.getElementById("area-teacher") as HTMLSelectElement;
  let areas = Object.values(Area);
  area.innerHTML = ""
  areas.forEach((area1) => {
    let option = document.createElement("option");
    option.value = area1;
    (option.text = area1), area.add(option);
  });


  let activityGradeBook = document.getElementById("activity-gradebook") as HTMLSelectElement;
  document.querySelectorAll("#course-gradebook option").forEach((option) => option.remove);
  activities.forEach((activity1) => {
    let option = document.createElement("option");
    (option.value = activity1.name),
      (option.text = activity1.name),
      activityGradeBook.add(option);
  });

  let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
  document.querySelectorAll("#course-gradebook option").forEach(Option => Option.remove());
  course.forEach((value) => {
    let option = document.createElement("option");
    option.value = value.name;
    (option.text = value.name), 
    courseGradeBook.add(option);
  });

  
  let nameSummary = document.getElementById("name-student") as HTMLSelectElement;
  document.querySelectorAll("#name-student option").forEach(Option => Option.remove());
  students.forEach((value) => {
    let option = document.createElement("option");
    option.value = value.fullName;
    (option.text = value.fullName), 
    nameSummary.add(option);
  });

  let courseSummary = document.getElementById("course-grade") as HTMLSelectElement;
  document.querySelectorAll("#course-grade option").forEach(Option => Option.remove());
  course.forEach((value) => {
    let option = document.createElement("option");
    option.value = value.name;
    (option.text = value.name), 
    courseSummary.add(option);
  });

let gradeSumary = document.getElementById("gradeendar") as HTMLSelectElement;

  let teacherSummary = document.getElementById("name-grade") as HTMLSelectElement;
  document.querySelectorAll("#name-grade option").forEach(Option => Option.remove());
  teachers.forEach((value) => {
    let option = document.createElement("option");
    option.value = value.fullName;
    (option.text = value.fullName), 
    teacherSummary.add(option);
  });


}

document.querySelector("#estadoNota")!.addEventListener("click", (e) => {
let span=(e.target as HTMLElement).parentElement?.children[0]
let nota=((e.target as HTMLElement).parentElement?.parentElement?.children[4].lastElementChild as HTMLInputElement).value
if (parseInt(nota) >=70) {
  console.log("Aprobado")
  span!.textContent= "Aprobado"
} else{
  console.log("Reprobado")
  span!.textContent= "Reprobado"

}

console.log(nota)
});

function asignament(): void {
  
}
initSelect();


function readFormHtml(id: string): string {
  return (<HTMLInputElement>document.getElementById(id))!.value;
}
