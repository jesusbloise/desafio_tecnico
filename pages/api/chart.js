// ✅ /pages/api/chart.js con cashback acumulado y generado
export default function handler(req, res) {
    const data = [
      {
        hora: "00:00",
        clientesNuevos: 5,
        clientesTotales: 12,
        ventas: 10,
        devoluciones: 1,
        cashbackGenerado: 2,
        cashbackAcumulado: 2,
        fecha: "2025-03-25"
      },
      {
        hora: "01:00",
        clientesNuevos: 8,
        clientesTotales: 18,
        ventas: 15,
        devoluciones: 2,
        cashbackGenerado: 3,
        cashbackAcumulado: 5,
        fecha: "2025-03-26"
      },
      {
        hora: "02:00",
        clientesNuevos: 2,
        clientesTotales: 10,
        ventas: 7,
        devoluciones: 0,
        cashbackGenerado: 1,
        cashbackAcumulado: 6,
        fecha: "2025-03-27"
      },
      {
        hora: "03:00",
        clientesNuevos: 9,
        clientesTotales: 22,
        ventas: 20,
        devoluciones: 3,
        cashbackGenerado: 4,
        cashbackAcumulado: 10,
        fecha: "2025-03-27"
      },
      {
        hora: "04:00",
        clientesNuevos: 12,
        clientesTotales: 26,
        ventas: 18,
        devoluciones: 1,
        cashbackGenerado: 3,
        cashbackAcumulado: 13,
        fecha: "2025-03-27"
      },
      {
        hora: "05:00",
        clientesNuevos: 15,
        clientesTotales: 32,
        ventas: 25,
        devoluciones: 4,
        cashbackGenerado: 5,
        cashbackAcumulado: 18,
        fecha: "2025-03-28"
      },
      {
        hora: "06:00",
        clientesNuevos: 7,
        clientesTotales: 19,
        ventas: 12,
        devoluciones: 0,
        cashbackGenerado: 2,
        cashbackAcumulado: 20,
        fecha: "2025-03-28"
      },
      {
        hora: "07:00",
        clientesNuevos: 10,
        clientesTotales: 25,
        ventas: 16,
        devoluciones: 1,
        cashbackGenerado: 3,
        cashbackAcumulado: 23,
        fecha: "2025-03-28"
      }
    ];
  
    res.status(200).json(data);
  }
  