import React from "react";

const Table = ({ title, options, data, del }) => {
  return (
    <div className="info">
      <div className="info__title" style={{ padding: `${title} ? 24px : 0px` }}>
        {title}
      </div>
      <table>
        <thead>
          <tr aligns="center">
            {Object.keys(options).map((op, index) => (
              <th key={index}>{options[op]}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((doc, dindex) => {
            return (
              <tr key={dindex}>
                {Object.keys(options).map((item, index) => {
                  return <td key={index}>{doc[item]}</td>;
                })}
                <td>
                  <button onClick={() => del(doc.id)}><img src={require('../assets/img/delete.png')} alt="DELETE"/></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
