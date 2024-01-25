import "./datatable.css";
import {DataGrid} from "@mui/x-data-grid";
import {Link, useNavigate} from "react-router-dom";
import {checkoutUser, deleteItem} from "../../utility/fetchCalls";
import {propertyDeleteAPI, userDeleteAPI} from "./../../utility/constants";

const Datatable = (props) => {
  const navigate = useNavigate();
  var entity = "Users";
  if (props.props.entity === "Properties") {
    entity = props.props.entity;
  } else if (props.props.entity === "Promotions") {
    entity = props.props.entity;
  }

  const handleDelete = (id) => {
    const URL =
      entity === "Users"
        ? userDeleteAPI
        : entity === "Properties"
        ? propertyDeleteAPI
        : null;
    deleteItem(URL, id).then((data) => {
      navigate("/");
    });
  };

  const handleCheckout = (id) => {
    var bookingID = "";
    for (var x = 0; x < props.props.data.length; x++) {
      if (id === props.props.data[x].id) {
        bookingID = props.props.data[x].bookingTimestamp;
        break;
      }
    }
    if (bookingID?.length > 0)
    {

      checkoutUser(id).then((e) => {
        navigate("/");
      });
    }
  };
  const handleOnClick = (id) => {
    let x;
    if (props.props.entity === "Profile" || props.props.entity==="OS-DB") {
      if (props?.props.data?.length > 0) {
        const items = props?.props.data;
        var finalItem = {};
        for (x = 0; x < items?.length; x++) {
          if (items[x].id === id) {
            finalItem = items[x];
          }
        }
        const bookingJson = {
          bookingTimestamp: finalItem?.bookingTimestamp,
          paymentType: finalItem?.paymentType,
          transactionID: finalItem?.bookingTimestamp,
        };
        const hotelData = {
          hotelName: finalItem?.propertyName,
          hotelAddress: finalItem?.address,
        };
        navigate("/confirm", {
          state: {
            prevState: { hotelData: hotelData },
            bookingJson: bookingJson,
          },
        });
      }
    } else {
      const data = props.props.data;
      var currentItem = undefined;
      for (x = 0; x < data.length; x++) {
        if (data[x].id === id) {
          currentItem = data[x];
          break;
        }
      }
      navigate(`/admin/${entity}/edit/${id}`, { state: currentItem });
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleOnClick(params.row.id)}
            >
              View
            </div>
            {props.props.entity !== "Profile" &&
              props.props.entity !== "OS-DB" && (
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              )}
            {props.props.entity === "OS-DB" && (
              <div
                className="deleteButton"
                onClick={() => handleCheckout(params.row.id)}
              >
                Checkout User
              </div>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {props.props.entity !== "Profile" && props.props.entity !== "OS-DB" && (
          <span>Add New/ Edit {props.props.entity}</span>
        )}
        {props.props.entity !== "Bookings" &&
          props.props.entity !== "FeedBack" &&
          props.props.entity !== "Profile" &&
          props.props.entity !== "OS-DB" && (
            <>
              <Link
                to={"/admin/" + props.props.entity + "/add"}
                className="link"
              >
                Add New
              </Link>
            </>
          )}
      </div>
      <DataGrid
        className="datagrid"
        rows={props.props.data}
        columns={
          props.props.entity !== "Bookings" && props.props.entity !== "FeedBack"
            ? props.props.cols.concat(actionColumn)
            : props.props.cols
        }
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
