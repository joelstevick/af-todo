import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodoResolvers {
  constructor(private todoService: TodoService) {}

  @Mutation((returns) => Todo)
  async createTodo(
    @Args({ name: 'name' }) name: string,
    @Args({ name: 'listId' }) listId: string,
  ) {
    return this.todoService.create(name, listId);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Todo> {
    return this.todoService.findById(reference.id);
  }
}
