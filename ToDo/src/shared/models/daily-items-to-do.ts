
export class DailyTodo {
    title: string;
    content: string;
    pointVal: number = 2;
    completed: Boolean = false;

    constructor(title:string, content: string) {
        this.title = title,
        this.content = content
    }
}