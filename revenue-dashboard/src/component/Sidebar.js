import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">Hungama</span>
      </a>

      <div className="sidebar">
        {/*  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="/" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div> */}

        {/* <div className="form-inline">
    <div className="input-group" data-widget="sidebar-search">
      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
      <div className="input-group-append">
        <button className="btn btn-sidebar">
          <i className="fas fa-search fa-fw"></i>
        </button>
      </div>
    </div>
  </div> */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              {/* <a href="/" className="nav-link active">
          <i className="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Dashboard
            <i className="right fas fa-angle-left"></i>
          </p>
        </a> */}

              {/* <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="./index.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard v1</p>
            </a>
          </li>
          
        </ul> */}
            </li>
            {/*  <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Widgets
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li> */}
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
          <i className="nav-icon fas fa-copy"></i>
          <p>
            Layout Options
            <i className="fas fa-angle-left right"></i>
            <span className="badge badge-info right">6</span>
          </p>
        </a> */}
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/top-nav-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/fixed-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/fixed-sidebar-custom.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>
                      Fixed Sidebar <small>+ Custom Area</small>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-footer.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/collapsed-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul> */}
            </li>

            {/* <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>ChartJS</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Flot</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inline</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/uplot.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>uPlot</p>
                  </a>
                </li>
              </ul>
            </li> */}

            {/*  <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-table"></i>
                <p>
                  Tables
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li> */}

            {/* <li className="nav-header">EXAMPLES</li> */}

            <li className="nav-item">
              <Link to="/datewise-revenue" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>Datewise Revenue</p>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/todays-revenue" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>Today's Revenue</p>
              </a> */}
              <Link to="/todays-revenue" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>Today's Revenue</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/operatorwise-revenue" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>Operatorwise Revenue</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
