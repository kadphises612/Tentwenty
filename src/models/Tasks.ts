import mongoose, { Schema, InferSchemaType } from 'mongoose';

const taskSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      index: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    project: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    durationHours: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

taskSchema.index({ date: 1 });

export type TaskDocument = InferSchemaType<typeof taskSchema>;

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
