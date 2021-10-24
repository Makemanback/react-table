import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../../store/starships/starships-reducer";

const TableCell = ({ url, item, index }) => {
  const dispatch = useDispatch();
  const [name] = Object.keys(item)


  const itemValue = useSelector(({ starships }) => starships[name][index]);

  const updateHandler = ({ target }) => {
    const { value } = target;
    const selectedFields = document.querySelectorAll(`.ui-selected`);

    if (selectedFields.length) {
      selectedFields.forEach(({ dataset }) => {
        const { id, name: listName } = dataset;
        
        if (listName === name) {
          dispatch(updateItem({ value, listName, url: id }));
        }
      })
    } else {
      dispatch(updateItem({ value, listName: name, url }));
    }
  }


  return (
    <div
      data-id={url}
      data-name={name}
      className="table__cell ui-selectable">
      <input
        value={itemValue ? itemValue.value : `loading...`}
        onChange={updateHandler}
        type="text" />
    </div>
  )
}

export default TableCell;