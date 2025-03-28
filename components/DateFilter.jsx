import {
    Box,
    Button,
    ButtonGroup,
    Typography,
    Popper,
    Paper,
    ClickAwayListener,
    useMediaQuery
  } from '@mui/material';
  import { DateRangePicker } from '@mui/lab';
  import DateRangeIcon from '@mui/icons-material/DateRange';
  import { useState, useRef } from 'react';
  import { TextField } from '@mui/material';
  import { format } from 'date-fns';
  import { useTheme } from '@mui/material/styles';
  
  const filtros = ['HOY', '7D', 'Este mes', '6M', 'YTD / YTG', '1A', 'MÁX'];
  
  export default function DateFilter({ onChange }) {
    const [activo, setActivo] = useState('HOY');
    const [value, setValue] = useState([null, null]);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleFiltroClick = (filtro) => {
      setActivo(filtro);
      onChange?.(filtro);
    };
  
    const handleCalendarToggle = () => {
      setOpen((prev) => !prev);
    };
  
    const handleCalendarClose = () => {
      setOpen(false);
    };
  
    const formatRange = () => {
      if (!value[0] || !value[1]) return 'Personalizado';
      return `${format(value[0], 'dd/MM/yyyy')} - ${format(value[1], 'dd/MM/yyyy')}`;
    };
  
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Selecciona un período:
        </Typography>
  
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          <ButtonGroup orientation={isMobile ? 'vertical' : 'horizontal'} fullWidth={isMobile}>
            {filtros.map((filtro) => (
              <Button
                key={filtro}
                variant={activo === filtro ? 'contained' : 'outlined'}
                onClick={() => handleFiltroClick(filtro)}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.75rem',
                  padding: '4px 12px',
                  backgroundColor: activo === filtro ? '#6d28d9' : undefined,
                  color: activo === filtro ? 'white' : '#6d28d9',
                  borderColor: '#6d28d9',
                  '&:hover': {
                    backgroundColor: activo === filtro ? '#5b21b6' : '#f3e8ff',
                  },
                }}
              >
                {filtro}
              </Button>
            ))}
          </ButtonGroup>
  
          <Button
            onClick={handleCalendarToggle}
            startIcon={<DateRangeIcon />}
            ref={anchorRef}
            sx={{
              ml: 1,
              backgroundColor: '#ede9fe',
              color: '#6d28d9',
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.75rem',
              '&:hover': { backgroundColor: '#ddd6fe' },
            }}
          >
            {formatRange()}
          </Button>
  
          <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
            <ClickAwayListener onClickAway={handleCalendarClose}>
              <Paper sx={{ p: 2, mt: 1 }}>
                <DateRangePicker
                  startText="Inicio"
                  endText="Fin"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(startProps, endProps) => (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <TextField size="small" {...startProps} />
                      <TextField size="small" {...endProps} />
                    </Box>
                  )}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
                  <Button size="small" onClick={handleCalendarClose}>Cancel</Button>
                  <Button
                    size="small"
                    onClick={() => {
                      setActivo('Personalizado');
                      onChange?.(value);
                      handleCalendarClose();
                    }}
                    variant="contained"
                    sx={{
                      backgroundColor: '#6d28d9',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#5b21b6' },
                    }}
                  >
                    OK
                  </Button>
                </Box>
              </Paper>
            </ClickAwayListener>
          </Popper>
        </Box>
      </Box>
    );
  }