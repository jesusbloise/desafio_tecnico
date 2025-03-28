import { render, screen } from '@testing-library/react';
import SidebarStats from '../components/SidebarStats';

describe('SidebarStats', () => {
  it('muestra los botones Gráfico y Pulso', () => {
    render(<SidebarStats modo="grafico" onModoChange={() => {}} />);
    expect(screen.getByRole('button', { name: /Gráfico/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pulso/i })).toBeInTheDocument();
  });

  it('muestra los datos de los meses', () => {
    render(<SidebarStats modo="grafico" onModoChange={() => {}} />);
    expect(screen.getByText('Noviembre')).toBeInTheDocument();
    expect(screen.getByText('Octubre')).toBeInTheDocument();
    expect(screen.getByText('Septiembre')).toBeInTheDocument();
  });
});
