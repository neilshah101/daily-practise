import { Component } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { useState } from 'react';
import './App.css'

function App() {
  
    const [value , setValue] = useState({
      checking:0, savings:0, brokerage:0
    })
    
    const handleOnChange = (e) => {
      setValue({
        ...value,
        [e.target.name]: parseInt([e.target.value])
      })
}

    return<div>
    
      <div>
        <h1>Pie chart</h1>
      </div>
      <div>
        <input type="text" placeholder="checking" onChange = {handleOnChange} name="checking"/>
      </div>
      <div>
        <input type="text" placeholder="savings" onChange = {handleOnChange} name="savings"/>
      </div>
      <div>
        <input type="text" placeholder="brokerage" onChange = {handleOnChange} name="brokerage"/>
      </div>
      <div>
      <PieChart className="graph"
        data={[
        { title: 'checking', value: value.checking, color: '#E38627' },
        { title: 'savings', value: value.savings, color: '#C13C37' },
        { title: 'brokerage', value: value.brokerage, color: '#6A2135' },
        ]}
        
    />;
      </div>
    </div>
    
  



  


}


export default App