import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Todo } from './app/todo/todo';
import { provideHttpClient } from '@angular/common/http';
// import 'zone.ts';

bootstrapApplication(Todo, {providers:[provideHttpClient()]})
  .catch((err) => console.error(err));
export { Todo } from './app/todo/todo';
