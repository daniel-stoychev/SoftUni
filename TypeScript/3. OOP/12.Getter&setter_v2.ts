class Task {
    title: string;
    description: string;
    completed: boolean = false;
    private _createdBy: string;
    constructor(title: string, description: string, createdBy: string ) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(): string {
        return this._createdBy
    }

    toggleStatus() :void {
        // if (this.completed === true) {
        //     this.completed = false;
        // } else {
        //     this.completed = true;
        // }

        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }

    static createSampleTasks(): Task[] {
        const tasks: Task[] = [
            new Task ('Do dishes', 'gfedws', 'Ivan'),
            new Task ('Vacume', 'gfedws', 'Maria'),
            new Task ('Clean dust', 'gfedws', 'Petur'),
        ]

        return tasks;
    }
}



// const task2 = new Task("Clean room", "Clean the room", "Mary");

// console.log(task2.getDetails());


const tasks = Task.createSampleTasks();

tasks.forEach(task => console.log(task.getDetails()));

