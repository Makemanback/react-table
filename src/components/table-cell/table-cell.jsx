import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStarship } from "../../store/starships/starships-reducer";

const TableCell = ({ url, item }) => {

  const [[name, value]] = Object.entries(item)

  const [state, setState] = useState(value);

  const updateHandler = ({ target }) => {
    const { value } = target;
    const selectedFields = document.querySelectorAll(`.ui-selected`);


    if (selectedFields.length) {
      selectedFields.forEach((item) => {
        const input = item.children[0];
        input.value = value;
      })
    } 
    setState(value)

  }

  return (
    <div
      data-id={url}
      data-name={name}
      className="table__cell ui-selectable">
      <input
        value={state}
        onChange={updateHandler}
        type="text" />
    </div>
  )
}

export default TableCell;