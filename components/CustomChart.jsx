import {
    Box,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    ButtonGroup,
    Button,
    useMediaQuery
  } from '@mui/material';
  import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';
  import { useQuery } from 'react-query';
  import { useState } from 'react';
  import { getDateRangeFromFilter } from '../utils/getDateRangeFromFilter';
  import { useTheme } from '@mui/material/styles';
  
  export default function CustomChart({ filtro, modo }) {
    const [section, setSection] = useState('clientes');
    const [subtype, setSubtype] = useState('dinero');
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const [start, end] = getDateRangeFromFilter(filtro);
  
    const { data, isLoading } = useQuery('chartData', async () => {
      const res = await fetch('/api/chart');
      return res.json();
    });
  
    const filtered = data?.filter((d) => {
      const fecha = new Date(d.fecha);
      return fecha >= start && fecha <= end;
    });
  
    const handleSectionChange = (_, newVal) => {
      if (newVal !== null) setSection(newVal);
    };
  
    const handleSubtypeChange = (val) => {
      setSubtype(val);
    };
  
    return (
      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'stretch' : 'center',
            mb: 2,
            gap: 2
          }}
        >
          <ToggleButtonGroup
            value={section}
            exclusive
            onChange={handleSectionChange}
            fullWidth={isMobile}
            sx={{
              backgroundColor: '#ede9fe',
              borderRadius: 2,
              p: 0.5,
              '& .Mui-selected': {
                backgroundColor: '#6d28d9',
                color: '#fff'
              }
            }}
          >
            <ToggleButton value="clientes" sx={{ textTransform: 'none', fontSize: '0.75rem' }}>Clientes</ToggleButton>
            <ToggleButton value="transacciones" sx={{ textTransform: 'none', fontSize: '0.75rem' }}>Transacciones</ToggleButton>
          </ToggleButtonGroup>
  
          <ButtonGroup fullWidth={isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
            <Button
              onClick={() => handleSubtypeChange('dinero')}
              variant={subtype === 'dinero' ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                fontSize: '0.75rem',
                backgroundColor: subtype === 'dinero' ? '#6d28d9' : undefined,
                color: subtype === 'dinero' ? '#fff' : '#6d28d9',
                borderColor: '#6d28d9',
                '&:hover': { backgroundColor: subtype === 'dinero' ? '#5b21b6' : '#f3e8ff' }
              }}
            >
              Dinero
            </Button>
            <Button
              onClick={() => handleSubtypeChange('cashback')}
              variant={subtype === 'cashback' ? 'contained' : 'outlined'}
              sx={{
                textTransform: 'none',
                fontSize: '0.75rem',
                backgroundColor: subtype === 'cashback' ? '#6d28d9' : undefined,
                color: subtype === 'cashback' ? '#fff' : '#6d28d9',
                borderColor: '#6d28d9',
                '&:hover': { backgroundColor: subtype === 'cashback' ? '#5b21b6' : '#f3e8ff' }
              }}
            >
              Cashback
            </Button>
          </ButtonGroup>
        </Box>
        {isLoading ? (
          <Typography>Cargando gráfico...</Typography>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            {modo === 'grafico' ? (
              <BarChart data={filtered}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                {section === 'clientes' ? (
                  <>
                    <Bar dataKey="clientesNuevos" fill="#f97316" />
                    <Bar dataKey="clientesTotales" fill="#3b82f6" />
                  </>
                ) : (
                  subtype === 'dinero' ? (
                    <>
                      <Bar dataKey="ventas" fill="#10b981" />
                      <Bar dataKey="devoluciones" fill="#f43f5e" />
                    </>
                  ) : (
                    <>
                      <Bar dataKey="cashbackGenerado" fill="#a855f7" />
                      <Bar dataKey="cashbackAcumulado" fill="#9333ea" />
                    </>
                  )
                )}
              </BarChart>
            ) : (
              <LineChart data={filtered}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                {section === 'clientes' ? (
                  <>
                    <Bar dataKey="clientesTotales" fill="#6d28d9" />
                    <Line type="monotone" dataKey="clientesNuevos" stroke="#8b5cf6" strokeWidth={2} />
                  </>
                ) : (
                  subtype === 'dinero' ? (
                    <>
                      <Bar dataKey="ventas" fill="#10b981" />
                      <Line type="monotone" dataKey="devoluciones" stroke="#ef4444" strokeWidth={2} />
                    </>
                  ) : (
                    <>
                      <Bar dataKey="cashbackGenerado" fill="#a855f7" />
                      <Line type="monotone" dataKey="cashbackAcumulado" stroke="#7e22ce" strokeWidth={2} />
                    </>
                  )
                )}
              </LineChart>
            )}
          </ResponsiveContainer>
        )}
      </Box>
    );
  }