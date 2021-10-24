import { useDispatch } from "react-redux";
import { updateStarship } from "../../store/starships/starships-reducer";

const TableCell = ({ url, item }) => {
  const dispatch = useDispatch();

  const [[name, value]] = Object.entries(item)

  const updateHandler = ({ target }) => {
    const { value } = target;
    const selectedFields = document.querySelectorAll(`.ui-selected`);

    if (selectedFields.length) {
      selectedFields.forEach(({ dataset }) => {
        const { name, id } = dataset
        dispatch(updateStarship({ value, fieldName: name, url: id }))
      })
    } else {
      dispatch(updateStarship({ value, fieldName: name, url }))
    }

  }

  return (
    <div
      data-id={url}
      data-name={name}
      className="table__cell ui-selectable">
      <input
        value={value}
        onChange={updateHandler}
        type="text" />
    </div>
  )
}

export default TableCell;