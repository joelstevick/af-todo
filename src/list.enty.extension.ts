import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Todo } from './todo.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class List {
  @Field((type) => ID)
  @Directive('@external')
  id: string;

  @Field((type) => [Todo])
  todos?: Todo[];
}
