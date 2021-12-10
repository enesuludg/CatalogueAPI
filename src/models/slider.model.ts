import { model, Schema, Document, connection } from 'mongoose';
import { Slider } from '@/interfaces/slider.interface';
import autoIncrement from 'mongoose-auto-increment';

const sliderSchema: Schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  },
  {
    versionKey: false,
  },
);
autoIncrement.initialize(connection);
sliderSchema.plugin(autoIncrement.plugin, 'Slider');

const SliderModel = model<Slider & Document>('Slider', sliderSchema);

export default SliderModel;
