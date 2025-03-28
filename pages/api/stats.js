export default function handler(req, res) {
    const data = [
      {
        mes: 'Noviembre',
        clientes: 81420,
        ventas: 1100,
        monto: '$70M',
        cashback: {
          acumulado: '$200.000',
          dia01: '$120.000',
          dia10: '$200.000',
          dia20: '$0',
        },
      },
      {
        mes: 'Octubre',
        clientes: 81295,
        ventas: 3800,
        monto: '$170.84M',
        cashback: {
          acumulado: '$700.000',
          dia01: '$100.000',
          dia10: '$250.000',
          dia20: '$100.000',
        },
      },
      {
        mes: 'Septiembre',
        clientes: 80995,
        ventas: 4000,
        monto: '$179.85M',
        cashback: {
          acumulado: '$450.000',
          dia01: '$85.000',
          dia10: '$90.000',
          dia20: '$110.000',
        },
      },
    ];
  
    res.status(200).json(data);
  }
  