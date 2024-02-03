import { useState } from 'react';
import { storage } from '@/firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateJobWithPdf } from '@/actions/job/upload-pdf';
import { ViewJobParamsType } from '@/types';
import { useParams } from 'next/navigation';

export default function useUploadPdf() {
  // STATE TO TRACK UPLOADING PROGRESS
  const [uploadingProgress, setUploadingProgress] = useState<null | number>(null);

  // GET JOB ID FROM ROUTE PARAMS
  const { jobId }: ViewJobParamsType = useParams();

  // FUNCTION TO UPLOAD PDF FILE
  const uploadPdf = async (file: File) => {
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

          // CALL FUNCTION TO UPDATE JOB WITH PDF URL
          await updateJobWithPdf(downloadURL,jobId,file.name,file.size,file.type);
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
