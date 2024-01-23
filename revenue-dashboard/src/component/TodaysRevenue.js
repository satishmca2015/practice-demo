import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodaysRevenue } from "../services/auth.service";

function TodaysRevenue() {
  const [todaysrevenue, setTodaysRevenue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodaysRevenue()
      .then((data) => {
        console.log(data.data.data);
        setTodaysRevenue(data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setTodaysRevenue([]);
      });
  }, []);

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
                <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard v3</li>
              </ol>
            </div>
          </div>
        </div>

        {/* <div className='container-fluid' style={{ marginTop: `10px`, marginBottom: `10px` }}>
    <SearchAuto setSelectedVal={setSelectedVal}  />
    </div> */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10"  >
                <div className="card" style={{marginLeft: '18%'}}>
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Revenue</h3>
                    </div>
                  </div>
                  <>
                    {loading ? (
                      <h5>Please wait data is loading....</h5>
                    ) : (
                      <div className="card-body">
                        {todaysrevenue.map((revenue) => {
                          return (
                            <div
                              key={revenue.id}
                              className="progress"
                              style={{ marginTop: "2%" }}
                            >
                              <div
                                // className="progress-bar progress-bar-striped"
                                className={
                                  "progress-bar " +
                                  (revenue.percentVal < 60
                                    ? "progress-bar-danger"
                                    : "progress-bar-success") +
                                  " progress-bar-striped"
                                }
                                role="progressbar"
                                aria-valuenow={revenue.percentVal}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: revenue.percentVal + "%" }}
                              >
                                <span className="font-weight-bold">
                                  {revenue.operatorName.replace("_", " ")}{" "}
                                  &nbsp;(
                                  {Math.round(revenue.percentVal)}%)
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                </div>

                {/* <div className="card">
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

              {/* <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title">Sales</h3>
                      <a href="javascript:void(0);">View Report</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                      </p>
                      <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                          <i className="fas fa-arrow-up"></i> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                      </p>
                    </div>

                    <div className="position-relative mb-4">
                      <canvas id="sales-chart" height="200"></canvas>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary"></i> This year
                      </span>

                      <span>
                        <i className="fas fa-square text-gray"></i> Last year
                      </span>
                    </div>
                  </div>
                </div>

                 <div className="card">
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
                    <i className="ion ion-android-arrow-up text-success"></i> 12%
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
                    <i className="ion ion-android-arrow-up text-warning"></i> 0.8%
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
                    <i className="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
                    <span className="text-muted">REGISTRATION RATE</span>
                </p>
                </div>
            </div>
            </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default TodaysRevenue;
