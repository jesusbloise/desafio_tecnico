import { render, screen } from '@testing-library/react';
import CustomChart from '../components/CustomChart';

// Mock global para ResizeObserver (Recharts)
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

jest.mock('react-query', () => ({
  useQuery: () => ({
    data: [
      { hora: '00:00', clientesNuevos: 10, clientesTotales: 100, ventas: 50, devoluciones: 2, fecha: '2025-03-27' }
    ],
    isLoading: false
  })
}));

jest.mock('../utils/getDateRangeFromFilter', () => ({
  getDateRangeFromFilter: () => [new Date('2025-03-27'), new Date('2025-03-27')]
}));

describe('CustomChart', () => {
  it('renderiza el componente correctamente', () => {
    render(<CustomChart filtro="HOY" modo="grafico" />);
    expect(screen.getByText('Clientes')).toBeInTheDocument();
    expect(screen.getByText('Transacciones')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dinero/i })).toBeInTheDocument();
  });
});
