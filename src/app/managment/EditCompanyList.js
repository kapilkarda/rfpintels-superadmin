import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';



export  function EditCompanyList() {
return (
<div>
   <Card
   title="The Walt Disney Company"
   bordered={false}
   style={{
   width: "150%",
   backgroundColor: 'white',
   }} >
   <div className='container'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Address
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            DUNS
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            CAGE
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            POC Email
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <select class="form-select" aria-label="Default select example" >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Set-Aside
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <select class="form-select" aria-label="Default select example" z>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Corporate Certifications
            </label>
         </div>
         <div className='col-sm-1 mt-1'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            NAICS Codes
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <select class="form-select" aria-label="Default select example" z>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Keywords
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Capability Briefing
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <div className='container mt-3'>
      <div className='row'>
         <div className='col-sm-2'>
            <label for="exampleFormControlInput1" class="form-label mt-2">
            Website
            </label>
         </div>
         <div className='col-sm-1 mt-2'>:</div>
         <div className='col-sm-9'>
            <input
               type="email"
               class="form-control"
               id="exampleFormControlInput1"
               placeholder="name@example.com"
               />
         </div>
      </div>
   </div>
   <hr/>
   <div className='text-right'>
      <button type="submit" className='btn'>save</button>
      <button type="submit" className='btn btn-info' >cancel</button>
   </div>
   </Card>
</div>
)
}
export default EditCompanyList;