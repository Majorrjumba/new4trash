import { Injectable } from '@angular/core';

export interface Task{
  id:number;
  text:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  TaskArray: Task[] = [
    {id:1, text:"Сделать свой сайт 1", completed: false},
    {id:2, text:"Сделать свой сайт 2", completed: false},
    {id:3, text:"Сделать свой сайт 3", completed: true},
    {id:4, text:"Сделать свой сайт 4", completed: false},
  ]
  Change(id: number){
    const indx = this.TaskArray.findIndex(t => t.id === id);
    this.TaskArray[indx].completed = !this.TaskArray[indx].completed;
  }
}
