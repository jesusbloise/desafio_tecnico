
import { useState } from 'react';
import Topbar from '../components/Topbar';
import DateFilter from '../components/DateFilter';
import CustomChart from '../components/CustomChart';
import WeeklySummaryTable from '../components/WeeklySummaryTable';
import SidebarStats from '../components/SidebarStats';
import { Box, Grid } from '@mui/material';

export default function Home() {
  const [filtro, setFiltro] = useState('HOY');
  const [modo, setModo] = useState('grafico');

  return (
    <Box>
      <Topbar />

      <Grid container spacing={0} sx={{ p: 3 }}>

        <Grid item xs={12} md={9}>
          <Box>
            <DateFilter onChange={setFiltro} />
            <CustomChart filtro={filtro} modo={modo} />
            <WeeklySummaryTable filtro={filtro} modo={modo} />
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <SidebarStats modo={modo} onModoChange={setModo} />
        </Grid>
      </Grid>
    </Box>
  );
}
