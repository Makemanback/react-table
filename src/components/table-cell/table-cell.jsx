import { useState } from "react";

const TableCell = ({ item }) => {
  const [state, setState] = useState(item);

  return (
    <div className="table__cell">
      <input
        value={state}
        onChange={({ target }) => setState(target.value)}
        type="text" />
    </div>
  )
}

export default TableCell;