// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// // import { HydratedDocument } from 'mongoose';
// import { Document } from 'mongoose';

// //export type ItemsDocument = HydratedDocument<Items>;
// export type ItemsDocument = Items & Document;
// @Schema()
// export class Cat {
//   @Prop()
//   name: string;

//   @Prop()
//   age: number;

//   @Prop()
//   breed: string;
// }

// export const ItemsSchema = SchemaFactory.createForClass(Items);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<Items>;

@Schema()
export class Items {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
