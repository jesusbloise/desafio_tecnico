import {
    Box,
    Typography,
    Tooltip
  } from '@mui/material';
  import DownloadIcon from '@mui/icons-material/Download';
  import { useQuery } from 'react-query';
  import { getDateRangeFromFilter } from '../utils/getDateRangeFromFilter';
  
  export default function WeeklySummaryTable({ filtro, modo }) {
    const [start, end] = getDateRangeFromFilter(filtro);
  
    const { data } = useQuery('weeklySummary', async () => {
      const res = await fetch('/api/weeklySummary');
      return res.json();
    });
  
    const filtered = data?.filter((d) => {
      const fecha = new Date(d.fecha);
      return fecha >= start && fecha <= end;
    });
  
    const rows = filtered || [];
  
    const total = rows.reduce(
      (acc, row) => {
        acc.col1 += row.col1 || 0;
        acc.col2 += row.col2 || 0;
        acc.col3 += row.col3 || 0;
        acc.total += row.total || 0;
        return acc;
      },
      { col1: 0, col2: 0, col3: 0, total: 0 }
    );
  
    const exportToCSV = () => {
      const headers = modo === 'pulso'
        ? ['Día', 'Dinero 1', 'Dinero 2', 'Dinero Total']
        : ['Día', 'Columna 1', 'Columna 2', 'Columna 3', 'Total'];
  
      const rowsData = rows.map(row => modo === 'pulso'
        ? [row.dia, row.dinero1, row.dinero2, row.dineroTotal]
        : [row.dia, row.col1, row.col2, row.col3, row.total]
      );
  
      const csvContent = [
        headers,
        ...rowsData,
        modo === 'pulso'
          ? ['Total',
              rows.reduce((a, r) => a + (r.dinero1 || 0), 0),
              rows.reduce((a, r) => a + (r.dinero2 || 0), 0),
              rows.reduce((a, r) => a + (r.dineroTotal || 0), 0)]
          : ['Total', total.col1, total.col2, total.col3, total.total]
      ].map(e => e.join(",")).join("\n");
  
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resumen.csv';
      link.click();
    };
  
    return (
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 1 }}>
          <Tooltip title="Exportar tabla">
            <Box
              component="span"
              onClick={exportToCSV}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#6d28d9',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              <DownloadIcon fontSize="small" /> Exportar tabla
            </Box>
          </Tooltip>
        </Box>
  
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ backgroundColor: '#f3e8ff', borderRadius: 2, p: 2 }}>
            <Typography fontWeight={600}>Semana</Typography>
            {rows.map((row) => (
              <Typography key={row.dia}>{row.dia}</Typography>
            ))}
            <Typography fontWeight={600}>Total</Typography>
          </Box>
  
          <Box sx={{ backgroundColor: '#f3e8ff', borderRadius: 2, p: 2, flex: 1 }}>
            <Typography fontWeight={600}>Clientes</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>Column 1</span>
              <span>Column 2</span>
              <span>Column 3</span>
              <span>Total</span>
            </Box>
            {rows.map((row) => (
              <Box key={row.dia} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{row.col1}</span>
                <span>{row.col2}</span>
                <span>{row.col3}</span>
                <span>{row.total}</span>
              </Box>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>{total.col1}</span>
              <span>{total.col2}</span>
              <span>{total.col3}</span>
              <span>{total.total}</span>
            </Box>
          </Box>
  
          {modo === 'pulso' && (
            <Box sx={{ backgroundColor: '#f3e8ff', borderRadius: 2, p: 2, flex: 1 }}>
              <Typography fontWeight={600}>Dinero</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                <span>Column 1</span>
                <span>Column 2</span>
                <span>Total</span>
              </Box>
              {rows.map((row) => (
                <Box key={row.dia} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{row.dinero1}</span>
                  <span>{row.dinero2}</span>
                  <span>{row.dineroTotal}</span>
                </Box>
              ))}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                <span>€{rows.reduce((acc, r) => acc + (r.dinero1 || 0), 0).toFixed(1)}M</span>
                <span>€{rows.reduce((acc, r) => acc + (r.dinero2 || 0), 0).toFixed(1)}M</span>
                <span>€{rows.reduce((acc, r) => acc + (r.dineroTotal || 0), 0).toFixed(1)}M</span>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }