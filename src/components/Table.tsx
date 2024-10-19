import React, { useState, useEffect } from "react";

const EmergencyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rohls-nqaaa-aaaan-qznfq-cai.raw.icp0.io/read"
        );
        const data = await response.json();
        // Agregamos el estado a cada objeto
        const updatedData = data.map((item, index) => ({
          ...item,
          estado: index % 2 === 0 ? "Activo" : "Inactivo", // Alternamos el estado como ejemplo
        }));
        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Nombre</th>
            <th className="py-2 px-4 border">Teléfono</th>
            <th className="py-2 px-4 border">Dirección</th>
            <th className="py-2 px-4 border">Emergencia</th>
            <th className="py-2 px-4 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={
                item.estado === "Activo" ? "bg-green-100" : "bg-red-100"
              }
            >
              <td className="py-2 px-4 border">{item.name || item.nombre}</td>
              <td className="py-2 px-4 border">
                {item.phone || item.phoneNumber}
              </td>
              <td className="py-2 px-4 border">{item.address}</td>
              <td className="py-2 px-4 border">{item.emergency}</td>
              <td className="py-2 px-4 border">{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencyTable;
