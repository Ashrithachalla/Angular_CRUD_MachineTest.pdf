import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [CommonModule , FormsModule, RouterOutlet],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {
    todos:any[] = [];
    newTask = '';
    doneTasks: any[] = [];
    editTodoId: number | null = null;
    editTaskText: string = '';
     api = 'http://localhost:3000/todos';

     constructor(private http: HttpClient) { }

     ngOnInit(): void {
        this.loadTodo();
     }

     loadTodo(){
        this.http.get<any[]>(this.api).subscribe(res => this.todos = res);
     }

     addTodo() {
       if(!this.newTask.trim()) return;
        this.http.post(this.api, { title: this.newTask, done: false }).subscribe(() => {
            this.newTask = '';
            this.loadTodo();
        });
     }

     startEdit(todo: any) {
        this.editTodoId = todo.id;
        this.editTaskText = todo.title

      }

     deleteTodo(id: number) {
        this.http.delete(`${this.api}/${id}`).subscribe(() => {
            this.loadTodo();
        });
     }
     canedit(){
      this.editTodoId = null;
      this.editTaskText = '';
     }
     saveEdit(todo:any){
      const trimmed = this.editTaskText.trim();
      if (!trimmed)  return;
      this.http.patch(`${this.api}/${todo.id}`, { title: trimmed }).subscribe(() => {
     this.editTodoId = null;
      this.editTaskText = '';
        this.loadTodo();
         
      });
     }

     toggleDone(todo: any) {
      this.http.patch(`${this.api}/${todo.id}`, { done: !todo.done }).subscribe(() => this.loadTodo());
      
}
     }