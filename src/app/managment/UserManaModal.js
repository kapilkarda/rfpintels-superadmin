import React, { useState } from 'react';
// import "./Company.css";

const UserManaModal = ()=> {




    return (
        <>
         <div className="d-flex flex-row modal-firstdiv">
                      <div className="p-2 modal-heading">
                        <h1 className="modal-heading-fontfamily">
                          Add User
                        </h1>
                      </div>
                    </div>

                    <div className="modal-form-div">
                      <form>
                        
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"

                          >
                            Email Address

                            <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />

                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="nevaeh.simmons@example.com"
                            />
                          </div>
                        </div>



                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            First Name
                          </label>

                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                           
                          >
                            Last Name
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder=""
                            />
                          </div>
                        </div>                      
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4 corporate-certification-div"
                          
                          >
                            Title
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder=""
                            />
                          </div>
                        </div>
                       
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4" 
                          >
                           Office Number
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder=""
                              
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            Cell number
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control modal-firstinput"
                              id="inputPassword"
                              placeholder="684.555.0102"
                            />
                          </div>
                        </div>
                        <div className="form-group modal-input-data-div row mt-4">
                          <label
                            for="staticEmail"
                            className="col-sm-2 col-form-label ml-4"
                          >
                            License Type
                          </label>
                          <div className="col-sm-1 col modal-colan">:</div>
                          <div className="col-sm-8">
                            <select
                              class="form-control modal-firstinput"
                              id="exampleFormControlSelect1"
                            >
                              <option>MHUA-DTHA-N8TV-C735</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                   
        </>
    )
};
export default UserManaModal;

