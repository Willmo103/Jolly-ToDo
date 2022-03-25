export class ToDoItem {
    
    due?:Boolean;
    dueDate?: Date;
    priority: string;
    pointVal: number = 0;
    completed: Boolean = false;

    constructor(public title: string, public content: string, due: Boolean, dueDate: Date, priority: string){

        if(due = true){
            this.dueDate = dueDate
        };
        this.priority = priority;
        if (this.priority === "Low"){
            this.pointVal = 5;
        } else if (this.priority === "Medium") {
            this.pointVal = 10;
        } else if (this.priority === "High") {
            this.pointVal = 20;
        }
    }
}