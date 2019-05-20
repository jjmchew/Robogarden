
class students {
	name: string;
	age: number;
	gender: string;
	nationality: string;

	constructor(name: string, age: number, gender: string, nationality: string){
		this.name = name;
		this.age = age;
		this.gender = 'female';
		this.nationality = nationality;
	}

	getNationality(): void {
		console.log('This student has nationality ${this.nationality}');
	}

}


class UnderGraduates extends students {
	batch: number;
	gpa: number;
	constructor(name: string, age: number, gender: string, nationality: string, batch: number, gpa: number){
		super(name, age, gender, nationality);
		this.batch = batch;
		this.gpa = gpa;
	}
}

interface Iundergrad{
	name: string;
	age: number;
	gender: string;
	nationality: string;
	batch: number
	GPA: number;
};

var student1 : UnderGraduates = {
	name: 'Jenny Craig',
	age: 30,
	gender: 'female',
	nationality: 'Canada',
	batch: 2019,
	gpa: 3.4,
	getNationality(){},
};

console.log(student1.getNationality());