import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchAuto from "./SearchAuto";
// import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js/auto";

function Dashboard() {
  const [selectedVal, setSelectedVal] = useState([]);

  function onSubmit() {
    let operatorId = selectedVal[0]?.OPERATOR_ID;
    console.log(operatorId);
  }

  //Line chart
  const actvalue = [10, 15, 10, 25, 30, 35, 40];
  const dctvalue = [20, 18, 16, 14, 10, 3, 1];
  const labels = [
    "11-05-23",
    "10-05-23",
    "09-05-23",
    "08-05-23",
    "07-05-23",
    "06-05-23",
    "05-05-23",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Activation",
        data: actvalue,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Deactivation",
        data: dctvalue,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: labels,
        scale: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  //pie chart

  const dataPie = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          /* 'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)', */
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          /* 'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)', */
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* <a href="/">Home</a> */}
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                <div style={{ marginTop: `10px`, marginBottom: `10px` }}>
                  <SearchAuto setSelectedVal={setSelectedVal} />
                </div>
              </div>
              <div className="col-md-2">
                <div style={{ marginTop: `10px`, marginBottom: `10px` }}>
                  <button
                    onClick={onSubmit}
                    type="button"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Weekly Report</h3>
                      {/* <a href="javascript:void(0);">View Report</a> */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      {/*  <p className="d-flex flex-column">
                        <span className="text-bold text-lg">820</span>
                        <span>Visitors Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up"></i> 12.5%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </p> */}
                    </div>

                    <div className="position-relative mb-4">
                      <div>
                        <Line data={data} options={options} />
                      </div>
                    </div>

                    {/*  <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary"></i> This Week
                      </span>

                      <span>
                        <i className="fas fa-square text-gray"></i> Last Week
                      </span>
                    </div> */}
                  </div>
                </div>

                {/*  <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Products</h3>
                    <div className="card-tools">
                      <a href="/" className="btn btn-tool btn-sm">
                        <i className="fas fa-download"></i>
                      </a>
                      <a href="/" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Sales</th>
                          <th>More</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Some Product
                          </td>
                          <td>$13 USD</td>
                          <td>
                            <small className="text-success mr-1">
                              <i className="fas fa-arrow-up"></i>
                              12%
                            </small>
                            12,000 Sold
                          </td>
                          <td>
                            <a href="/" className="text-muted">
                              <i className="fas fa-search"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Another Product
                          </td>
                          <td>$29 USD</td>
                          <td>
                            <small className="text-warning mr-1">
                              <i className="fas fa-arrow-down"></i>
                              0.5%
                            </small>
                            123,234 Sold
                          </td>
                          <td>
                            <a href="/" className="text-muted">
                              <i className="fas fa-search"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        {/* <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span> */}
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        {/* <span className="text-success">
                          <i className="fas fa-arrow-up"></i> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span> */}
                      </p>
                    </div>

                    <div className="position-relative mb-4">
                      {/* <canvas id="sales-chart" height="200"></canvas> */}
                      <div
                        className="graph-center"
                        style={{ height: "300px", width: "450px" }}
                      >
                        <Pie data={dataPie} options={pieOptions} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Online Store Overview</h3>
                    <div className="card-tools">
                      <a href="/" className="btn btn-sm btn-tool">
                        <i className="fas fa-download"></i>
                      </a>
                      <a href="/" className="btn btn-sm btn-tool">
                        <i className="fas fa-bars"></i>
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-success text-xl">
                        <i className="ion ion-ios-refresh-empty"></i>
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-success"></i>{" "}
                          12%
                        </span>
                        <span className="text-muted">CONVERSION RATE</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-warning text-xl">
                        <i className="ion ion-ios-cart-outline"></i>
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-warning"></i>{" "}
                          0.8%
                        </span>
                        <span className="text-muted">SALES RATE</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <p className="text-danger text-xl">
                        <i className="ion ion-ios-people-outline"></i>
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-down text-danger"></i>{" "}
                          1%
                        </span>
                        <span className="text-muted">REGISTRATION RATE</span>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default Dashboard;
