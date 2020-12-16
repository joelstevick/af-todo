import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Todo } from './todo.entity';

const todos: Todo[] = [];

@Injectable()
export class TodoService {
  async create(name: string, listId: string): Promise<Todo> {
    const todo = new Todo();
    todo.id = uuid();
    todo.listId = listId;
    todo.name = name;
    todo.complete = false;

    todos.push(todo);

    return todo;
  }

  async findById(id: string): Promise<Todo> {
    return todos.find((t) => t.id === id);
  }

  async enumerateList(listId: string): Promise<Todo[]> {
    return todos.filter((t) => t.listId === listId);
  }
}
