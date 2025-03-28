import { render, screen } from '@testing-library/react';
import DateFilter from '../components/DateFilter';

describe('DateFilter', () => {
  it('muestra el título correctamente', () => {
    render(<DateFilter />);
    expect(screen.getByText('Selecciona un período:')).toBeInTheDocument();
  });

  it('renderiza todos los botones de filtro', () => {
    render(<DateFilter />);
    expect(screen.getByText('HOY')).toBeInTheDocument();
    expect(screen.getByText('7D')).toBeInTheDocument();
    expect(screen.getByText('MÁX')).toBeInTheDocument();
  });
});
