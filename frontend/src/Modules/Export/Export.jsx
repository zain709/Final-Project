import React from 'react'
import "./Export.scss"
import Smallcards from "../../components/Cards/smallcards.jsx"
import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

function Export() {


 // --- Exporting Functions

 // sales Data

  let exportingcontact=()=>{

    axios({
      url: `${backendwebsite[0].backendwebsite}/contact/export`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Contact-Data.csv'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });

  }

  // Employees Data
  let exportingemployees=()=>{

    axios({
      url: `${backendwebsite[0].backendwebsite}/employees/export`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Employees-Data.csv'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });

  }

   // Meterial Data
   let exportingmeterial=()=>{

    axios({
      url: `${backendwebsite[0].backendwebsite}/meterial/export`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Meterial-Data.csv'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });

  }

     // Asset Data
     let exportingasset=()=>{

      axios({
        url: `${backendwebsite[0].backendwebsite}/asset/export`, //your url
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Asset-Data.csv'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
  
    }
  
       // Libility Data
       let exportinglibility=()=>{

        axios({
          url: `${backendwebsite[0].backendwebsite}/libility/export`, //your url
          method: 'GET',
          responseType: 'blob', // important
      }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Libility-Data.csv'); //or any other extension
          document.body.appendChild(link);
          link.click();
      });
    
      }

         // Sales Data
         let exportingsales=()=>{

          axios({
            url: `${backendwebsite[0].backendwebsite}/sales/export`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Sales-Data.csv'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
      
        }


    let cardsdata=[

       { title:"Sales ",   counter:"CSV",    link:"Click to download" , clickaction:exportingsales},
       { title:"Libality ",   counter:"CSV",    link:"Click to download",clickaction:exportinglibility},
       { title:"Assets ",   counter:"CSV",    link:"Click to download" , clickaction:exportingasset },
       { title:"Meterial ",   counter:"CSV",    link:"Click to download" , clickaction:exportingmeterial },
       { title:"Employees ",   counter:"CSV",    link:"Click to download",clickaction:exportingemployees },
       { title:"contact ",   counter:"CSV",    link:"Click to download" ,clickaction:exportingcontact },

    ]






  return (
    <div>

        <div className='text-center my-5' >
            <h4>Export Database Data</h4>
            <p>Select and export Data</p>
        </div>


    <div className="exportdats">
 
    {cardsdata.map((element)=>

    <div className="exportcard  mx-5 my-5">
     <Smallcards    
     title={element.title}
     counter={element.counter}
     link={element.link}
     clickaction={element.clickaction}
     />     
     </div>  
    )}

    </div>

    </div>
  )
}

export default Export