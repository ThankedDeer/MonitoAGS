import { useState } from "react";
import { instance } from "../services/base.api";

const useRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const startRecordingService = (isRecording: boolean) => {

    setLoading(true);

    instance
      .post("transcription", { isRecording })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    startRecordingService,
    loading,
    error,
  };
};

export default useRecord;
