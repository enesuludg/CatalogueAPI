import { model, Schema, Document } from "mongoose";
import { Category } from "@/interfaces/category.interface";
const categorySchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform(_doc, ret) {
        delete ret._id;
      },
    },
  }
);
const categoryModel = model<Category & Document>("Category", categorySchema);

export default categoryModel;
