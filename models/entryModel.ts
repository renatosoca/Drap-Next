import { Entry } from '@/interfaces';
import { Schema, model } from 'mongoose';

export interface IEntry extends Entry {}

const entrySchema = new Schema<IEntry>({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'completed'],
      message: 'Status is not valid',
    },
  }
})

export default model<IEntry>('Entry', entrySchema);