import TableCell from "../table-cell/table-cell";

const TableRow = ({starship}) => {
  const {
    cargo_capacity,
    cost_in_credits,
    max_atmosphering_speed,
    name,
    url
  } = starship

  return (
    <div className="table__row">
      <TableCell url={url} item={{cargo_capacity}} />
      <TableCell url={url} item={{cost_in_credits}} />
      <TableCell url={url} item={{max_atmosphering_speed}} />
      <TableCell url={url} item={{name}} />
    </div>
  )
};

export default TableRow;