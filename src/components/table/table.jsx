import React, { useCallback, useEffect } from 'react';
import TableHeader from '../table-header/table-header';
import TableRow from '../table-row/table-row';

import Selectable from 'selectable.js';

const Table = ({ starships }) => {

  const escKeyDownHandler = useCallback((evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      window.select.clear();
    }
  }, [])


  useEffect(() => {

    window.select = new Selectable({
      appendTo: `.table`,
      autoRefresh: false,
      lasso: {
        border: '1px solid blue',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
      },

      ignore: [
        `input`
      ],
    })

  }, []);

  useEffect(() => {
    document.addEventListener(`keydown`, (evt) => escKeyDownHandler(evt));
    return document.removeEventListener(`keydown`, escKeyDownHandler);
  }, [escKeyDownHandler]);

  return (
    <div className="table">
      <TableHeader />
      {starships.map((starship, idx) => <TableRow key={idx} starship={starship} index={idx} />)}
    </div>
  )
};

export default Table;