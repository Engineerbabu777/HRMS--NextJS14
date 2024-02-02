// IMORTING NECESSARY PACAKGES!
import mongoose from 'mongoose'

// CANDIDATE SCHEMA!
const jobSchema = new mongoose.Schema(
  {
    jobName: { type: String, required: true },
    headCount: { type: Number, required: true },
    jobLocation: { type: String, required: true },
    jobDescription: { type: String, required: true },
    contractDetails: { type: String, required: true },
    maximumSalary: { type: Number, required: true },
    minimumSalary: { type: Number, required: true },
    jobStatus: {
      type: String,
      enum: ['active', 'onhold', 'lost'],
      default: 'onhold'
    },
    remote: { type: String, default: 'no' },
    officeAddress: { type: String },
    experienceLevel: { type: String },
    frequency: { type: String },
    openDate: { type: Date },
    closeDate: { type: Date },
    jobReference: { type: String },
    attachments:{
      type:[String]
    }
  },
  {
    timestamps: true
  }
)

// EXPORTING CANDIDATE MODEL!
export const Job = mongoose?.models?.job || mongoose.model('job', jobSchema)
