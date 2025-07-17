import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { Todo } from './app/todo/todo';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(Todo, config);

export default bootstrap;
