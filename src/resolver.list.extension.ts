import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { List } from './list.enty.extension';
import { Todo } from './todo.entity';
import { Logger } from '@nestjs/common';

@Resolver((of) => List)
export class ListResolvers {
  logger = new Logger('ListResolvers');

  constructor(private readonly todoService: TodoService) {}

  @ResolveField((of) => [Todo])
  public async todos(@Parent() list: List): Promise<Todo[]> {
    const todos = await this.todoService.enumerateList(list.id);

    this.logger.verbose(`todos: ${JSON.stringify(todos)}`);

    return todos;
  }
}
