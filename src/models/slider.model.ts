import { model, Schema, Document, connection } from "mongoose";
import { Slider } from "@/interfaces/slider.interface";
import autoIncrement from "mongoose-auto-increment";

const sliderSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
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
autoIncrement.initialize(connection);
sliderSchema.plugin(autoIncrement.plugin, "Slider");

const SliderModel = model<Slider & Document>("Slider", sliderSchema);

export default SliderModel;
