import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";

const initialValues = {
  name: "",
  phoneNumber: "",
  address: "",
  emergency: "",
};
const Record = () => {
  const [transcript, setTranscript] = useState("");
  const websocketRef = useRef(null);
  const transcriptRef = useRef(null); // Referencia para el Textarea de transcripción

  // Función para iniciar la conexión WebSocket y la grabación
  const startRecording = () => {
    if (!websocketRef.current) {
      // Conectar al servidor WebSocket
      websocketRef.current = new WebSocket("ws://localhost:8765");

      websocketRef.current.onopen = () => {
        console.log("Conectado al WebSocket");
      };

      websocketRef.current.onmessage = (event) => {
        // Actualizar la transcripción con el texto recibido
        setTranscript((prev) => prev + "\n" + event.data);
        const parsedData = event.data.split(":");
        if (parsedData.length === 2) {
          const [field, value] = parsedData;
          formik.setFieldValue(field.trim(), value.trim());
        }
      };

      websocketRef.current.onerror = (error) => {
        console.error("Error en el WebSocket:", error);
      };

      websocketRef.current.onclose = () => {
        console.log("Conexión WebSocket cerrada");
        websocketRef.current = null;
      };
    }
  };

  // Función para detener la grabación y cerrar la conexión WebSocket

  useEffect(() => {
    // Limpiar la conexión WebSocket si el componente se desmonta
    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    // Autoscroll para el Textarea de transcripción
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  const validate = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.emergency) {
      errors.emergency = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      fetch("https://rohls-nqaaa-aaaan-qznfq-cai.raw.icp0.io/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          phoneNumber: values.phoneNumber,
          address: values.address,
          emergency: values.emergency,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  const stopRecording = () => {
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
      formik.resetForm();
    }
  };

  return (
    <section className="grid grid-cols-2 gap-4 p-6 bg-slate-900 text-white ">
      <div className="grid grid-cols-1 justify-center gap-8 bg-gray-800 p-6 rounded-lg h-full">
        <div className="mb-4 h-full">
          <div className="grid grid-cols-2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Audio Transcriber</h3>
              <p className="mb-4">Transcribe audio to text</p>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={startRecording}
                className="bg-primary-500 text-white px-4 py-2 rounded-lg"
              >
                Start Recording
              </Button>
              <Button
                onClick={stopRecording}
                className="bg-primary-500 text-white px-4 py-2 rounded-lg"
              >
                Stop Recording
              </Button>
            </div>
          </div>
          <Textarea
            ref={transcriptRef} // Asignar la referencia
            label="Transcription"
            variant="bordered"
            value={transcript}
            readOnly
            disableAnimation
            disableAutosize
            classNames={{
              base: "h-full w-full",
              input: "resize-y min-h-[120px] w-full",
            }}
          />
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">911 Form</h3>
        <div className="flex flex-wrap gap-4 ">
          <Input
            type="text"
            label="name"
            name="name"
            defaultValue="junior@nextui.org"
            className="max-w-xs mb-4 text-white"
            size="md"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && Boolean(formik.errors.name)}
            errorMessage={formik.touched.name && formik.errors.name}
          />
          <Input
            type="text"
            label="Phone Number"
            name="phoneNumber"
            className="max-w-xs mb-4 text-white"
            size="md"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
          />
          <Input
            isRequired
            type="text"
            label="Address"
            name="address"
            className="max-w-xs mb-4 text-white"
            size="md"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.address && Boolean(formik.errors.address)}
            errorMessage={formik.touched.address && formik.errors.address}
          />
          <Input
            isRequired
            type="text"
            name="emergency"
            label="Emergency Type"
            className="max-w-xs mb-4 text-white"
            size="md"
            onChange={formik.handleChange}
            value={formik.values.emergency}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.emergency && Boolean(formik.errors.emergency)
            }
            errorMessage={formik.touched.emergency && formik.errors.emergency}
          />
          <Button
            onPress={() => formik.handleSubmit()}
            className="bg-primary-500 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Record;
