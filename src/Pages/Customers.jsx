import React, { useContext, useEffect } from 'react'
import '../Assets/Customers.css'
import SidebarContext from '../Context/SidebarContext'
import Table from '../JSON/Table.json'
import { Button, Modal } from 'antd';
import InfoBtn from './InfoBtn';

const Customers = () => {
  const { openColumn, setOpenColumn,
    openModal,setOpenModal
  } = useContext(SidebarContext)


  return (
    <div className='customers'>
      <h1> Top Customers</h1>

      <div className="customers-header">
        <div className='custom-input'>
          <i className='bi bi-search' />
          <input type="text" placeholder='Basliq' />
        </div>

        <div className="customers-header-btn">

          <div className='column-select'>
            <label ><i className='bi bi-sliders2' /></label>
            <button
              onClick={(e) => {
                setOpenColumn(!openColumn)
              }}
            >
              <span>Column</span>
            </button>
            <label >
              {openColumn ? <i className='bi bi-chevron-down' /> : <i className='bi bi-chevron-up' />}
            </label>

            {
              openColumn ? <span></span>
                : <div className='check-column'>
                  <label >
                    <input type="checkbox" />
                    id
                  </label>
                  <label >
                    <input type="checkbox" />
                    name
                  </label>
                  <label >
                    <input type="checkbox" />
                    email
                  </label>
                  <label >
                    <input type="checkbox" />
                    location
                  </label>
                  <label >
                    <input type="checkbox" />
                    phone
                  </label>
                  <label >
                    <input type="checkbox" />
                    total spend
                  </label>
                  <label >
                    <input type="checkbox" />
                    total orders
                  </label>

                </div>
            }
          </div>

          <div className='filter-select'>
            <label ><i className='bi bi-funnel' /></label>
            <select >
              <option value="Columm" selected disabled>Filter</option>
              <option value="id">id</option>
              <option value="title">title</option>
              <option value="sksksk">sskskks</option>
              <option value="slsls">skksks</option>
            </select>
          </div>

          <button className='customers-column-btn'>
            <input type="checkbox" />
          </button>

        </div>
      </div>

      <div className='tablee'>

        <table class="table text-center table-customers">

          <thead>
            <tr>
              {
                Object.keys(Table[0]).map((item, key) => (
                  <>
                    <th>{item}</th>
                  </>
                ))
              }
            </tr>

          </thead>
          <tbody>
            {
              Table.map((item, key) => (
                <tr>
                  <td scope='row'>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.location}</td>
                  <td>{item.phone}</td>
                  <td>{item.total_spend}</td>
                  <td>{item.total_orders}</td>
                  <td>

                    <button 
                    onClick={
                      ()=>{
                        setOpenModal(!openModal)
                      }
                    }
                    >
                      {openModal ? <i className='bi bi-info-circle'/> : <InfoBtn/>}</button>
                  </td>
                  <td>
                    <button><i className='bi bi-trash3 ic' /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>



      </div>



    </div>
  )
}

export default Customers