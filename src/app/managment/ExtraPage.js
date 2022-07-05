import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {extraPagedata} from "../Redux/Action/UserAction"; 
import axios from "axios";
const ExtraPage = ()=> {
     
    const dispatch = useDispatch();
    const extrapageapi = useSelector(state=> state.extrapageapi);
    console.log(extrapageapi, "extrapageapi");
    // useEffect (()  => {
    //     dispatch(loadUsers());
    //     },[dispatch]);
    useEffect (() => {
        dispatch(extraPagedata());
    },dispatch);

    useEffect(() => {
        const emailrequest = {
          email: "vikalp.soni@manvish.com",
          password: "Vikalp@123#",
        };
        axios
          .post(
            "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/login",
            emailrequest
          )
          .then((resp) => {
            const token = resp.data.accessToken;
            // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWthbHAuc29uaUBtYW52aXNoLmNvbSIsImlhdCI6MTY1NjY2ODM1NiwiZXhwIjoxNjU2NjY5MjU2LCJhdXRob3JpdGllcyI6IlVTRVIifQ.uJou9V6wzvSPZ0oD_Up9ldQXc80XH7Z4UzwBopcGlJfe1AC5qxQTCU22ju4gfSQ4EYB5f9JDxtKrVMcOhhiE1w";
            localStorage.setItem("token", token);
          });
      });

        // useEffect(() => {
  //   const emailrequest = {
  //     email: "vikalp.soni@manvish.com",
  //     password: "Vikalp@123#",
  //   };
  //   axios
  //     .post(
  //       "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/login",
  //       emailrequest
  //     )
  //     .then((resp) => {
  //       const token = resp.data.accessToken;
  //       // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWthbHAuc29uaUBtYW52aXNoLmNvbSIsImlhdCI6MTY1NjY2ODM1NiwiZXhwIjoxNjU2NjY5MjU2LCJhdXRob3JpdGllcyI6IlVTRVIifQ.uJou9V6wzvSPZ0oD_Up9ldQXc80XH7Z4UzwBopcGlJfe1AC5qxQTCU22ju4gfSQ4EYB5f9JDxtKrVMcOhhiE1w";
  //       localStorage.setItem("token", token);
  //     });
  // });

    // useEffect(()=>{
  //   const tokens = localStorage.getItem('token')
  //   console.log('token....', tokens);
  // axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/getListOfCompany',  {
  //   headers:{
  //     'Authorization':`Bearer ${tokens}`
  // }
  // }).then((resp)  => {
  //   console.log('aaaaaaaaaaa', resp);
  // })
  // })
    return (
        <>
        ExtraPage
        </>
    )
};

export default ExtraPage;