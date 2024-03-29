import { useState } from 'react';
import { storage } from '@/firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateJobWithPdf } from '@/actions/job/upload-pdf';
import { ViewCandidateParamsType, ViewJobParamsType, ViewParamsType } from '@/types';
import { useParams } from 'next/navigation';
import { updateCandidateWithPdf } from '@/actions/candidate/updateCandidateResumesWithPdf';

// Custom hook for handling PDF uploads
export default function useUploadPdf() {
  // STATE TO TRACK UPLOADING PROGRESS
  const [uploadingProgress, setUploadingProgress] = useState<null | number>(null);

  // GET JOB ID FROM ROUTE PARAMS
  const { jobId, candidateId }: ViewParamsType = useParams();

  // FUNCTION TO UPLOAD PDF FILE
  const uploadPdf = async (file: File, type: string) => {
    // CREATE A REFERENCE TO THE STORAGE LOCATION
    const storageRef = ref(storage, `files/${file.name}`);

    // INITIATE UPLOAD TASK
    const uploadTask = uploadBytesResumable(storageRef, file as File);

    // LISTEN TO UPLOAD TASK STATE CHANGES
    uploadTask.on('state_changed', (snapshot) => {
      // CALCULATE UPLOAD PROGRESS
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      // UPDATE UPLOADING PROGRESS STATE
      setUploadingProgress(Math.floor(progress));

      // CHECK IF UPLOAD IS COMPLETE (PROGRESS === 100)
      if (progress === 100) {
        // GET DOWNLOAD URL OF THE UPLOADED FILE
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          // UPDATE UPLOADING PROGRESS STATE
          setUploadingProgress(null);

          if (type === "job") {
            // CALL FUNCTION TO UPDATE JOB WITH PDF URL
            await updateJobWithPdf(downloadURL, jobId as string, file.name, file.size, file.type);
          } else {
            // CALL FUNCTION TO UPDATE CANDIDATE WITH PDF URL
            await updateCandidateWithPdf(downloadURL, candidateId as string, file.name, file.size, file.type);
          }
        });
      }
    });
  };

  // RETURN STATE AND FUNCTION FOR EXTERNAL USE
  return {
    uploadingProgress,
    uploadPdf,
  };
}
