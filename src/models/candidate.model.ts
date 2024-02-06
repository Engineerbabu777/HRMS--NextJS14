// IMPORTING NECESSARY PACKAGES
import mongoose from 'mongoose'

// CANDIDATE SCHEMA
const candidateSchema = new mongoose.Schema(
  {
    // CANDIDATE NAME - REQUIRED STRING
    candidateName: { type: String, required: true },

    // CANDIDATE EMAIL - REQUIRED STRING
    candidateEmail: { type: String, required: true },

    // IMAGE URL - DEFAULTS TO EMPTY STRING
    imageURL: { type: String, required: true, default: '' },

    // CANDIDATE LOCATION - REQUIRED STRING
    candidateLocation: { type: String, required: true },

    // CANDIDATE DESCRIPTION - REQUIRED STRING WITH MINIMUM LENGTH 10
    candidateDescription: { type: String, required: true, minLength: 10 },

    // PHONE NUMBER - REQUIRED STRING
    phoneNumber: { type: String, required: true },

    // CURRENT DEPARTMENT - STRING (OPTIONAL)
    currentDepartment: { type: String },

    // CANDIDATE INDUSTRY - STRING (OPTIONAL)
    candidateIndustry: { type: String },

    // CANDIDATE EXPERIENCE - STRING (OPTIONAL)
    candidateExperience: { type: String },

    // RELEVANT EXPERIENCE - STRING (OPTIONAL)
    releventExperience: { type: String },

    // CURRENT SALARY - NUMBER (OPTIONAL)
    currentSalary: { type: Number },

    // NOTICE PERIOD - DATE (OPTIONAL)
    noticePeriod: { type: Date },

    // EXPECTED SALARY - NUMBER (OPTIONAL)
    expectedSalary: { type: Number },

    // LANGUAGES - STRING (OPTIONAL)
    languages: { type: String },

    // GENDER - STRING (OPTIONAL)
    gender: { type: String },

    // DIPLOMA - STRING (OPTIONAL)
    diploma: { type: String },

    // CANDIDATE REFERENCE - STRING (OPTIONAL)
    candidateReference: { type: String },

    // UNIVERSITY - STRING (OPTIONAL)
    university: { type: String },

    // CURRENT COMPANY - STRING (OPTIONAL)
    currentCompany: { type: String },

    // CURRENT POSITION - STRING (OPTIONAL)
    currentPosition: { type: String },

    // CANDIDATE BIRTHDAY - DATE (OPTIONAL)
    candidateBirthday: { type: Date },

    // CANDIDATE ADDRESS - STRING (OPTIONAL)
    candidateAddress: { type: String },

    // CANDIDATE NUMBER - NUMBER (OPTIONAL)
    candidateNumber: { type: Number },

    // CANDIDATE OTHER CONTACT - NUMBER (OPTIONAL)
    candidateOtherContact: { type: Number },

    // EXPERIENCES!
    candidateExperiences: {
      type: [
        {
          positionName: String,
          companyName: String,
          startDate: Date,
          endDate: Date,
          salary: Number,
          jobDescription: String
        }
      ]
    },

    // ADDRESSES!
    candidateAddresses: {
      type: [
        {
          currentAddress: String,
          permanentAddress: String,
          district: String,
          province: String,
          country: String,
          postCode: Number
        }
      ]
    },

    // EDUCATION!
    candidateEducations: {
      type: [
        {
          instituteName: String,
          degree: String,
          specialization: String,
          startDate: Date,
          endDate: Date,
          marks: Number,
          grade: Number,
          location: String
        }
      ]
    },

    // REFERENCES!
    candidateReferences: {
      type: [
        {
          referenceName: String,
          relation: String,
          companyName: String,
          phoneNumber: Number,
          emailAddress: String
        }
      ]
    },
    // CANDIDATE SKILLS!
    candidateSkills: {
      type:[
        {
          skillName:String,
          points:Number,
        }
      ]
    },

    resumes: {
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

// EXPORTING CANDIDATE MODEL
export const Candidate =
  mongoose?.models?.candidate || mongoose.model('candidate', candidateSchema)
