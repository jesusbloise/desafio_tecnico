import {
    Box,
    Typography,
    ButtonGroup,
    Button,
    Paper
  } from '@mui/material';
  import InsertChartIcon from '@mui/icons-material/InsertChart';
  import StarIcon from '@mui/icons-material/Star';
  
  const DATA = [
    {
      mes: 'Noviembre',
      clientes: '81.420',
      ventas: '1.100',
      monto: '$70M',
      cashback: {
        acumulado: '$200.000',
        facturado: [
          { fecha: '01/11', monto: '$120.000' },
          { fecha: '10/11', monto: '$200.000' },
          { fecha: '20/11', monto: '$0' }
        ]
      }
    },
    {
      mes: 'Octubre',
      clientes: '81.295',
      ventas: '3.800',
      monto: '$170.84M',
      cashback: {
        acumulado: '$700.000',
        facturado: [
          { fecha: '01/10', monto: '$100.000' },
          { fecha: '10/10', monto: '$250.000' },
          { fecha: '20/10', monto: '$100.000' }
        ]
      }
    },
    {
      mes: 'Septiembre',
      clientes: '80.995',
      ventas: '4.000',
      monto: '$179.85M',
      cashback: {
        acumulado: '$450.000',
        facturado: [
          { fecha: '01/09', monto: '$85.000' },
          { fecha: '10/09', monto: '$90.000' }
        ]
      }
    }
  ];
  
  export default function SidebarStats({ modo, onModoChange }) {
    return (
      <Box>
        <ButtonGroup fullWidth sx={{ mb: 2 }}>
          <Button
            startIcon={<InsertChartIcon />}
            variant={modo === 'grafico' ? 'contained' : 'outlined'}
            onClick={() => onModoChange('grafico')}
            sx={{
              textTransform: 'none',
              fontSize: '0.75rem',
              backgroundColor: modo === 'grafico' ? '#6d28d9' : undefined,
              color: modo === 'grafico' ? '#fff' : '#6d28d9',
              borderColor: '#6d28d9',
              '&:hover': { backgroundColor: modo === 'grafico' ? '#5b21b6' : '#f3e8ff' }
            }}
          >
            Gráfico
          </Button>
          <Button
            startIcon={<StarIcon />}
            variant={modo === 'pulso' ? 'contained' : 'outlined'}
            onClick={() => onModoChange('pulso')}
            sx={{
              textTransform: 'none',
              fontSize: '0.75rem',
              backgroundColor: modo === 'pulso' ? '#6d28d9' : undefined,
              color: modo === 'pulso' ? '#fff' : '#6d28d9',
              borderColor: '#6d28d9',
              '&:hover': { backgroundColor: modo === 'pulso' ? '#5b21b6' : '#f3e8ff' }
            }}
          >
            Pulso
          </Button>
        </ButtonGroup>
  
        {DATA.map((item) => (
          <Paper key={item.mes} elevation={0} sx={{ p: 2, mb: 2, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>{item.mes}</Typography>
            <Typography variant="body2">Clientes: {item.clientes}</Typography>
            <Typography variant="body2">Ventas totales: {item.ventas}</Typography>
            <Typography variant="body2">Monto total: {item.monto}</Typography>
            <Box sx={{ mt: 1.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Cashback</Typography>
              <Typography variant="body2">Acumulado: {item.cashback.acumulado}</Typography>
              {item.cashback.facturado.map((f, idx) => (
                <Typography key={idx} variant="body2">
                  Facturado {f.fecha}: {f.monto}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    );
  }
  