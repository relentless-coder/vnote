import React from 'react';
import {render, screen} from '@testing-library/react';
import PageList from '../';

describe('<PageList />', () => {
  const img = 'https://previews.123rf.com/images/cougarsan/cougarsan1602/cougarsan160200047/52255497-a3-and-a4-size-beige-classic-flower-pattern-wallpaper-background.jpg';
  const pages = [{
    id: 1,
    number: 1,
    snapshot: img
  },{
    id: 2,
    number: 2,
    snapshot: img
  }]
  it('should render correctly', () => {
    render(<PageList pages={pages}/>);
    const snapshot = screen.getAllByRole('img')
    expect(snapshot.length).toBe(2);
    expect(snapshot[0]).toHaveAttribute('src', img);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    
  })
})
