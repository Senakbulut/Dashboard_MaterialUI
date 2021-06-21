import React from 'react'
import Navbar from '../Navbar/Navbar'
import CardSmall from '../CardSmall/CardSmall'
import Table from '../Table/Table'
function Mainpage() {
    return (
        <div style={{background:"#f5fafe"}}>
      <Navbar/>
      <CardSmall/>
      <Table/>
        </div>
    )
}

export default Mainpage
