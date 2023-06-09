import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import "@src/views/Css/Button.css"
import "@src/views/Css/Map.css"
import {  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MoreVertical, Edit, Trash} from 'react-feather'
import { FiSend ,FiUsers} from 'react-icons/fi'
import { FaHistory } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr'

import { Search } from "react-feather"
import { Fragment } from 'react'
import { Link} from "react-router-dom"
import { User} from "react-feather"
import {
    Row,
    Col,
    Card,
    Input,

    Button,

} from 'reactstrap'

import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,

   
} from "mdb-react-ui-kit";


function DriverMap()
{
    
    

    return(
        <Fragment>
        <Card>
            <div className='invoice-list-table-header w-100 me-1 ms-10 mt-0 mb-30 '>
                <Row>
                    <Col xl='6' className='d-flex align-items-center p-1 '>
                    
                        <h2 style={{ color: "black" , marginTop:"10px",marginLeft:"10px"}}>Driver Location</h2>
                        
                    </Col>
                    <Col
                        xl='6'
                        className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
                    >

                    <h3 style={{ color: "black",marginLeft:"25px" }}> Driver Name : </h3>
                    </Col>
                    
                </Row>
                
            </div>

        </Card>
        <Card > <div className='containers'>
        <div><h3> Driver on map</h3></div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54581.63446896323!2d32.25014990013874!3d31.23867330454308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2sPort%20Said%2C%20Port%20Fouad%20City%2C%20Port%20Said%20Governorate!5e0!3m2!1sen!2seg!4v1678472866362!5m2!1sen!2seg" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div></Card>
       </Fragment>
    )

}
export default DriverMap