import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extraPagedata } from "../Redux/Action/UserAction";
import axios from "axios";
const ExtraPage = () => {
  const dispatch = useDispatch();
  const extrapageapi = useSelector((state) => state.extrapageapi);
  console.log(extrapageapi, "extrapageapi");

  useEffect(() => {
    dispatch(extraPagedata());
    // eslint-disable-next-line

  }, [dispatch]);

  useEffect(() => {
    const emailrequest = {
      email: "hemant12356@manvish.com",
      "password":"12345",
    };
    console.log(emailrequest, "emailrequestlksjdfljsdflk");
    axios
      .post(
        "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/login",
        emailrequest
      )
      .then((resp) => {
        console.log(resp, "respsjdflkjsdlkf");
        const token = resp.data.accessToken;

        localStorage.setItem("token", token);
      });
  });

  return <>ExtraPage</>;
};

export default ExtraPage;





