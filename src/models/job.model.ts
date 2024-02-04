// IMPORTING NECESSARY PACKAGES
import mongoose from 'mongoose'


// JOB SCHEMA
const jobSchema = new mongoose.Schema(
  {
    // JOB NAME - REQUIRED STRING
    jobName: { type: String, required: true },

    // HEAD COUNT - REQUIRED NUMBER
    headCount: { type: Number, required: true },

    // JOB LOCATION - REQUIRED STRING
    jobLocation: { type: String, required: true },

    // JOB DESCRIPTION - REQUIRED STRING
    jobDescription: { type: String, required: true },

    // CONTRACT DETAILS - REQUIRED STRING
    contractDetails: { type: String, required: true },

    // MAXIMUM SALARY - REQUIRED NUMBER
    maximumSalary: { type: Number, required: true },

    // MINIMUM SALARY - REQUIRED NUMBER
    minimumSalary: { type: Number, required: true },

    // JOB STATUS - STRING WITH ENUMERATED VALUES (DEFAULT: 'onhold')
    jobStatus: {
      type: String,
      enum: ['active', 'onhold', 'lost'],
      default: 'onhold'
    },

    // REMOTE - STRING (DEFAULT: 'no')
    remote: { type: String, default: 'no' },

    // OFFICE ADDRESS - STRING
    officeAddress: { type: String },

    // EXPERIENCE LEVEL - STRING
    experienceLevel: { type: String },

    // FREQUENCY - STRING
    frequency: { type: String },

    // OPEN DATE - DATE
    openDate: { type: Date },

    // CLOSE DATE - DATE
    closeDate: { type: Date },

    // JOB REFERENCE - STRING
    jobReference: { type: String },

    // ATTACHMENTS - ARRAY OF ATTACHMENTS TYPE SCHEMA
    attachments: {
      type: [
        {
          file_Name: String,
          file_Size: String,
          file_Type: String,
          file_Url: String,
          createdAt: { type: Date, default: Date.now() }
        }
      ]
    },
  },
  {
    // TIMESTAMP OPTION FOR AUTO-GENERATING CREATED AND UPDATED TIMESTAMPS
    timestamps: true
  }
)

// EXPORTING JOB MODEL
export const Job = mongoose?.models?.job || mongoose.model('job', jobSchema)
