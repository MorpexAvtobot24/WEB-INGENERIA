// 1. Інтерфейс Course
interface Course {
    title: string;
    duration: number; // у годинах
    students: string[];
}

// 2. Клас OnlineCourse
class OnlineCourse implements Course {
    public students: string[] = [];

    constructor(
        public title: string,
        public duration: number
    ) {}

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`Студента ${student} зареєстровано на курс "${this.title}".`);
        } else {
            console.log(`Студент ${student} вже зареєстрований на курс "${this.title}".`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

// 3. Клас CourseManager
class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.title}" додано.`);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.title !== courseName);
        console.log(`Курс "${courseName}" видалено.`);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.title === courseName);
    }

    getCourses(): Course[] {
        return this.courses;
    }
}

// 4. Демонстрація роботи
const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 40);
const reactCourse = new OnlineCourse("React Mastery", 60);

manager.addCourse(tsCourse);
manager.addCourse(reactCourse);

tsCourse.registerStudent("Іван");
tsCourse.registerStudent("Олена");
reactCourse.registerStudent("Максим");

console.log("\n--- Пошук курсу ---");
const found = manager.findCourse("TypeScript Basics");
if (found) {
    console.log(`Знайдено: ${found.title}, Тривалість: ${found.duration} год.`);
}

console.log("\n--- Список курсів та студентів ---");
manager.getCourses().forEach(c => {
    console.log(`Курс "${c.title}" (${c.duration} год) -> Студенти: ${c.students.join(", ") || "немає"}`);
});