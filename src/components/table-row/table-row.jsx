import TableCell from "../table-cell/table-cell";

const TableRow = ({starship, index}) => {
  const {
    cargo_capacity,
    cost_in_credits,
    max_atmosphering_speed,
    name,
    url
  } = starship


  return (
    <div className="table__row">
      <TableCell url={url} index={index} item={{cargo_capacity}} />
      <TableCell url={url} index={index} item={{cost_in_credits}} />
      <TableCell url={url} index={index} item={{max_atmosphering_speed}} />
      <TableCell url={url} index={index} item={{name}} />
    </div>
  )
};

export default TableRow;