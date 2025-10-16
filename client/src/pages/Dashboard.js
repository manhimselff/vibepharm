import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">$0.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Items in Stock</h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Low Stock Items</h5>
              <p className="card-text">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;