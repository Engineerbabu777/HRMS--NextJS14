// IMORTING NECESSARY PACAKGES!
import mongoose from 'mongoose'

// CANDIDATE SCHEMA!
const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    headCount: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    contractDetails: { type: String, required: true },
    maxSalary: { type: Number, required: true },
    minSalary: { type: Number, required: true },
    jobStatus: {
      type: Number,
      required: true,
      enum: ['active', 'onhold', 'lost']
    }
  },
  {
    timestamps: true
  }
)

// EXPORTING CANDIDATE MODEL!
export const Job = mongoose?.models?.job || mongoose.model('job', jobSchema)
