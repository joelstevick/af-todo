import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Todo {
  @Field((type) => ID)
  id: string;

  @Field()
  listId: string;

  @Field()
  name: string;

  @Field()
  complete: boolean;
}
