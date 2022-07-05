import React from 'react';
import "./Company.css";

const CompModalTable = ()=> {
    return(
        <>
        <div className="d-flex flex-row modal-firstdiv">
                      <div className="p-2 modal-heading">
                        <h1 className="modal-heading-fontfamily">The Walt Disney Company</h1>
                      </div>
                    </div>
                    <div className="modal-form-div">
                      <form>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Address
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="Floor 28, Building No 3, Virginia 22209"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            DUNS
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                               type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="123456789"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            CAGE
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                            type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="ABCDEF"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            POC Email
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            
                            <select
                              class="form-control modal-firstinput"
                              id="exampleFormControlSelect1"
                            >
                              <option>XYZ@company.com</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Set-Aside
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                         
                            <select
                              class="form-control modal-firstinput"
                              id="exampleFormControlSelect1"
                            >
                              <option></option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4 corporate-certification-div"
                          >
                            Corporate Certifications
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="ISO 9001:27000 CMMILvi 3"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            NAICS Codes
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                         
                            <select
                              class="form-control modal-firstinput"
                              id="exampleFormControlSelect1"
                            >
                              <option>541512 541511 541611 541300</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Keywords
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                               type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="Helpdesk, Cloud Engineering, Tier I/II Helpdesk, Construction Management"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Capability Briefing
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                               type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="Uploaded/Not Available"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Website
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                               type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="www.rfpintels.com"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                   
        </>
    )
}
export default CompModalTable;