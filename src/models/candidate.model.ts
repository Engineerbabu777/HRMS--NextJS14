// IMORTING NECESSARY PACAKGES!
import mongoose from 'mongoose'

// CANDIDATE SCHEMA!
const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageURL: { type: String, required: true, default: '' },
  location: { type: String, required: true },
  description: { type: String, required: true, minLength: 10 },
  phoneNumber: { type: String, required: true }
},{
  timestamps:true,
})

// EXPORTING CANDIDATE MODEL!
export const Candidate =
  mongoose?.models?.candidate || mongoose.model('candidate',candidateSchema)
