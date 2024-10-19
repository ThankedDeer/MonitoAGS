import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

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
  const stopRecording = () => {
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
      setTranscript("");
    }
  };

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

  return (
    <section className="grid grid-cols-2 gap-4 p-6 bg-slate-900 text-white ">
      <div className="grid grid-cols-1 justify-center gap-8 bg-gray-800 p-6 rounded-lg h-full">
        <div className="mb-4 h-full">
          <div className="grid grid-cols-2">
            <div className="mb-4 text-center">
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
        <h3 className="text-xl font-semibold mb-4">Transcription</h3>
        <div className="flex flex-wrap gap-4 text-center align-middle justify-start">
          <Input
            isRequired
            type="email"
            label="Email"
            defaultValue="junior@nextui.org"
            className="max-w-xs mb-4 text-white"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Record;
