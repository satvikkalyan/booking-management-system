import React from "react";
import "./SeatSelector.css";
function SeatSelector(props) {
  return (
    <div className="restrict-table">
      <table>
        <tbody>
          <tr>
            <td className="td-class">
              <label>
                <input
                  type="checkbox"
                  onChange={props.hc.handleChange}
                  id={props.hc.itemKey + "-NW"}
                />
                <span className="label">NW</span>
              </label>
            </td>
            <td className="td-class"></td>
            <td className="td-class">
              <label>
                <input
                  type="checkbox"
                  onChange={props.hc.handleChange}
                  id={props.hc.itemKey + "-NE"}
                />
                <span className="label">NE</span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="td-class"></td>
            <td className="td-class"></td>
            <td className="td-class"></td>
          </tr>
          <tr>
            <td className="td-class">
              <label>
                <input
                  type="checkbox"
                  onChange={props.hc.handleChange}
                  id={props.hc.itemKey + "-SW"}
                />
                <span className="label">SW</span>
              </label>
            </td>
            <td className="td-class"></td>
            <td className="td-class">
              <label>
                <input
                  type="checkbox"
                  onChange={props.hc.handleChange}
                  id={props.hc.itemKey + "-SE"}
                />
                <span className="label">SE</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeatSelector;
