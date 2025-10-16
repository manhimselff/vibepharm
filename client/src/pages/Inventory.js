import React from 'react';

function Inventory() {
  return (
    <div className="container mt-4">
      <h2>Inventory Management</h2>
      <div className="mt-4">
        <button className="btn btn-primary mb-3">Add New Item</button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="text-center">No items in inventory</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;