import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./Expensesheet.scss"
import backendwebsite from "../../backendwebsite.json"
import Expensetable from '../../components/listgroup/Expensetable';
import loadinggif from "../../images/loading.gif"


function Expensesheet() {

  let [monthvalue, setmonthvalue] = useState("");
  let [totalsale, settotalsale] = useState();
  let [totalexpenses, settotalexpenses] = useState(); 
  let [expense, setexpense] = useState([]);
 
  let months=["-- Select month --", "January 1","Febuary 2","March 3","April 4","May 5","June 6","July 7","Auguest 8","September 9","Octobor 10","November 11","December 12"]

  useEffect(()=>{

    if(document.getElementById("selectedmonth").value!="-- Select month --")
    {
      console.log("entering")
      axios.get(backendwebsite[0].backendwebsite+`/expensesheet`,{
        params: {
          month:monthvalue
        }
      })
      .then(res => {
        settotalsale(totalsale = res.data.totalsale)
        settotalexpenses(totalexpenses = res.data.totalexpense)
        setexpense(expense = res.data.expenses)
      });  
    }  

  })

 let getexpensedata= () => {

     if( document.getElementById("selectedmonth").value!="-- Select month --")
     {

     let m = document.getElementById("selectedmonth").value.match(/\d+/)
     if( m=="10" ||  m=="11" ||  m=="12" )
     {
      setmonthvalue(m)
     }
     else
     {
      setmonthvalue("0"+m)
     }

    }
    else
    {
    settotalsale( totalsale="" )
    settotalexpenses( totalexpenses="" )
    setexpense( expense = [] )
    }

}
 
  let colums=["Name","Description","Total","Type","Date"]

  let generatecell=(cell)=>{

    if(cell =="meterial")
    { 
      return <span style={{color:"#7C3E66"}} > <b> {cell} </b> </span>
    }
    else if(cell =="libility")
    {     
      return <span style={{color:"#243A73"}} > <b> {cell} </b> </span>
    }
    else if(cell =="asset")
    {
      return <span style={{color:"#F24C4C"}} > <b> {cell} </b> </span>
    }
    else
    {

      return cell
    }
   
  }

  return (
    <div>

        <div className="row p-4">

          <div className="col-md-6"> <h2>Expense Sheet</h2>
          <p>Generate Expense sheet by month</p>
          </div>
          <div className="col-md-6 "> 
          
            <div class="mb-3 w-50 ml-auto">
              <label for="" class="form-label">Select Month</label>
              <select class="form-control" onChange={getexpensedata}  name="" id="selectedmonth">
               
              { months.map((e)=> <option> {e} </option> ) }
              
              </select>
            </div>

            <button onClick={()=>{ console.log("Expense:",expense) ; console.log("Total sales:",totalsale) ; console.log("Total Espense value:",totalexpenses)  }} > checking </button>

          </div>

        </div>

        <div className="expensesheetsection">

          <Expensetable columns={colums} data={expense} generatecell={generatecell}  />

          

          <table class="table able-bordered">
          <thead>
        
          </thead>
          <tbody>
          <tr>

        
          <td>Total Expenses</td>
          <td></td>
          <td>{totalexpenses}</td>
          <td></td>
          <td></td>
   
          </tr>

          <tr>

         
          <td>Total Sale</td>
          <td></td>
          <td>{totalsale}</td>
          <td></td>
          <td></td>

          </tr>
   
          <tr>

         
          <td> <b>Profit</b></td>
          <td></td>
          <td> <b> { (totalsale>totalexpenses)? <span style={{color:"rgb(16 120 21)"}} > { totalsale-totalexpenses } </span>  : <span style={{color:"rgb(220 33 19)"}} > { totalsale-totalexpenses }</span> } </b> </td>
          <td></td>
          <td></td>

          </tr>

        </tbody>
        </table>


        </div>

    </div>
  )
}

export default Expensesheet