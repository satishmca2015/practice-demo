import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getOperatorsWiseRevenue } from "../services/auth.service";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";

function OpeatorWiseRev() {
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
    item.operatorName.toLowerCase().includes(searchText.toLowerCase())
  );

  function convertArrayOfObjectsToCSV(array) {
    let result;
    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <Button title="Export to CSV" onClick={(e) => onExport(e.target.value)}>Export to csv</Button>
  );

  const columns = [
    {
      name: "Operator",
      selector: (row) => row.operatorName,
      sortable: true,
    },
    {
      name: "Today Revenue",
      id: "diffrence",
      selector: (row) => row.today,
      sortable: true,
    },
    {
      name: "Yesterday Revenue",
      selector: (row) => row.yesterday,
      sortable: true,
    },
    {
      name: "Diffrence",
      selector: (row) => row.diff,
      sortable: true,
    },
    {
      name: "Net Revenue",
      selector: (row) => row.netRevenue,
      sortable: true,
    },
    {
      name: "Revenue INR",
      selector: (row) => row.revenueInr,
      sortable: true,
    },
  ];

  useEffect(() => {
    $(tableRef.current).DataTable();
    getOperatorsWiseRevenue(opId)
      .then((data) => {
        const result = data.data.data.filter((item) => {
          return item.today > 0;
        });
        setRevenueData(result);
      })
      .catch((err) => {
        setRevenueData([]);
      });
  }, [tableRef]);

  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(filteredData)} />,
    [filteredData]
  );

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Operatorwise Revenue</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                <Link to="/" className="nav-link">Home</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Revenue Details  {opName}</h3>
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
                        defaultSortFieldId="diffrence"
                        // title="Last Week Revenue Details"
                        // fixedHeader
                        highlightOnHover
                        className="table table-bordered"
                        defaultSortAsc={false}
                        actions={actionsMemo}
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

export default OpeatorWiseRev;

