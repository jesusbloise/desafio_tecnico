
import { render, screen } from '@testing-library/react';
import Topbar from '../components/Topbar';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
    push: jest.fn(),
  }),
}));

describe('Topbar', () => {
  it('renderiza el título del dashboard', () => {
    render(<Topbar />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
