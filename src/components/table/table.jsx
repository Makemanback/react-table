import React from 'react';
import { useSelector } from 'react-redux';
import TableHeader from '../table-header/table-header';
import TableRow from '../table-row/table-row';

const Table = () => {
  const starships = useSelector(({ starships }) => starships.starships);

  return (
    starships
      ? <div className="table">
        <TableHeader />
        {starships.map((starship, idx) => <TableRow key={idx} starship={starship} />)}
      </div>
      : <div>loading...</div>
  )
};

export default Table;