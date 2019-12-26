import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-secnod',
  templateUrl: './secnod.component.html',
  styleUrls: ['./secnod.component.css']
})
export class TodoComponent {

  constructor (public todoService: TodoService){}

  OnChange(id: number){
    this.todoService.Change(id);
  }

}
