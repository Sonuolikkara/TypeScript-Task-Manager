import type {Task} from "./types";

export const tasks: Task[] =[
    {
        id:1,
        title: "Learn Typescript",
        status: "pending",
        createdAt: new Date(),
        description: "Learn the basics of Typescript"
    },
    {
        id:2,
        title: "Build Task Manager",
        status: "completed",
        createdAt: new Date(),
        description: "Build a task manager using Typescript"
    }
];
export function addTask(title: string): void{
    const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        status: "pending",
        createdAt: new Date(),
        description: ""
    };
    tasks.push(newTask);
}
addTask("Learn new functions");

export function deleteTask(id: number): boolean {
     const index = tasks.findIndex(task => task.id == id);

if(index === -1){
    return false;
}
    tasks.splice(index, 1);
    return true;
}

export function completeTask(id: number): boolean{
    const task= tasks.find(task => task.id === id);

    if(!task){
        return false;
    }

    task.status = "completed";
    return true;
}

import type {TaskStatus} from "./types";
export function filterTasks(status:TaskStatus): Task[]{

    return tasks.filter(task => task.status === status);
}

console.log(filterTasks("pending"));

export function getTaskById(id:number): Task | undefined {
    return tasks.find(task => task.id === id);
}

console.log(getTaskById(3));
