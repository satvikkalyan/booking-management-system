import "./table.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "IMU Biddle",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/270px-Indiana_Hoosiers_logo.svg.png?20160928022158",
      customer: "Vineeth",
      date: "1 November",
      amount: 78,
      method: "Cash at Counter",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Hilton",
      img: "https://i.pinimg.com/originals/cb/91/df/cb91dff9b395c50348585a5368a50d34.png",
      customer: "Reece",
      date: "1 November",
      amount: 90,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Mariott",
      img: "https://logosandtypes.com/wp-content/uploads/2020/07/marriott.svg",
      customer: "Divyank",
      date: "1 November",
      amount: 35,
      method: "Cash at Counter",
      status: "Approved",
    },
    {
      id: 2357741,
      product: "IMU Biddle",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_Hoosiers_logo.svg/270px-Indiana_Hoosiers_logo.svg.png?20160928022158",
      customer: "Satvik",
      date: "1 November",
      amount: 92,
      method: "Online",
      status: "Approved",
    },
    {
      id: 22312324888,
      product: "Hilton",
      img: "https://i.pinimg.com/originals/cb/91/df/cb91dff9b395c50348585a5368a50d34.png",
      customer: "Prasad",
      date: "1 November",
      amount: 20,
      method: "Online",
      status: "Pending",
    },
    {
      id: 23423255,
      product: "Hilton",
      img: "https://i.pinimg.com/originals/cb/91/df/cb91dff9b395c50348585a5368a50d34.png",
      customer: "Prasad",
      date: "1 November",
      amount: 20,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "Hilton",
      img: "https://i.pinimg.com/originals/cb/91/df/cb91dff9b395c50348585a5368a50d34.png",
      customer: "Prasad",
      date: "1 November",
      amount: 20,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
