import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import ReactTable from "react-table";
import 'react-table/react-table.css'
import { makeData, Logo, Tips } from "./utils";

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


const makeDefaultState = () => ({
  sorted: [],
  page: 1,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: []
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      data: makeData(),
      sorted: [],
      page: 1,
      pageSize: 10,
      expanded: {},
      resized: [],
      filtered: []
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  // data = makeData();

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { data } = this.state;
    return (

      <div className="animated fadeIn">

        {/* React Table test */}
        <div>
        <ReactTable data={data}
          columns={[{
      Header: 'Name',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        id: 'lastName',
        accessor: d => d.lastName
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Progress',
        accessor: 'progress',
        Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#dadada',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 66 ? '#85cc00'
                  : row.value > 33 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            />
          </div>
        )
      }, {
        Header: 'Status',
        accessor: 'status',
        Cell: row => (
          <span>
            <span style={{
              color: row.value === 'progress' ? '#ff2e00'
                : row.value === 'undone' ? '#ffbf00'
                : '#57d500',
              transition: 'all .3s ease'
            }}>
              &#x25cf;
            </span> {
              row.value === 'progress' ? 'In progress'
              : row.value === 'undone' ? `Not done`
              : 'Done'
            }
          </span>
        )
      }]
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />

      </div>

      </div>
    );
  }
}

export default Dashboard;
