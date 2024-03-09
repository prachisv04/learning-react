import React from 'react'


  

export default function SubMenu(props) {
    
  return (
    <div className='my-4'>
      <ul className='d-flex ' id='menuItems'>
      {props.list.map((item) => (
        <li className='btn btn-light mx-4 text-dark'>
            <a href='/' >{item} </a>
        </li>
      ))}
    </ul>
    </div>
  )
}
