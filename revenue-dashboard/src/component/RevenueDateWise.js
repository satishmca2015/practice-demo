import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchAuto from "./SearchAuto";
import { getOperatorsRevenue } from "../services/auth.service";
import DataTable from "react-data-table-component";

function RevenueDateWise() {
  const tableRef = useRef();
  const [selectedVal, setSelectedVal] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [searchText, setSearchText] = useState("");


  let opId = selectedVal[0]?.OPERATOR_ID; // console.log(selected[0]?.OPERATOR_ID);
  let opName = selectedVal[0]?.OPERATOR; // console.log(selected[0]?.OPERATOR_ID);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = revenueData.filter((item) =>
    item.operator_name.toLowerCase().includes(searchText.toLowerCase())
  );
  const columns = [
    {
      name: "Sr No",
      cell: (row, index) => index + 1, //RDT provides index by default
    },
    {
      name: "Operator Name",
      selector: (row) => row.operator_name,
      sortable: true,
    },
    {
      name: "Revenue",
      selector: (row) => row.revenue,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const data = revenueData;

  console.log(revenueData);

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, [tableRef]);

  //    console.log(SearchAuto.selected);

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    // alert(opId);
    getOperatorsRevenue(opId)
      .then((data) => {
        setRevenueData(data.data.data);
      })
      .catch((err) => {
        // setRevenueData([]);
      });
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Last Week Revenue Detail</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                <Link to="/" className="nav-link">Home</Link>
                </li>
                {/* <li className="breadcrumb-item active">Revenue Details</li> */}
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
                    onClick={onLoginSubmit}
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
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      Last Week Revenue Details : {opName}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div>
                      <input
                        style={{ marginBottom: `20px` }}
                        type="text"
                        placeholder="Search Here.."
                        className="form-control w-25 m-10 float-right me-2"
                        value={searchText}
                        onChange={handleSearch}
                      />
                    </div>

                    <div>
                      <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination={true}
                        // title="Last Week Revenue Details"
                        // fixedHeader
                        highlightOnHover
                        className="table table-bordered"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default RevenueDateWise;
