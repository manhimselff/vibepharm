import React from 'react';

function Sales() {
  return (
    <div className="container mt-4">
      <h2>Sales</h2>
      <div className="mt-4">
        <button className="btn btn-primary mb-3">New Sale</button>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">No sales records</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;