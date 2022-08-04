import React, { useEffect, useState } from "react";

import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { CheckCircleOutlined, LeftOutlined } from "@ant-design/icons";
// import { resetpassword, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
// import {  useHistory } from "react-router-dom";
import images3 from "../../../assets/img/others/Frame.png";
// import { ResetPasswordAction } from "../../Redux/Action/UserAction";
// import { useDispatch } from "react-redux";

const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${images3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.9",
  position: "relative",
};
const TodoComponenting = {
  position: 'absolute',
  bottom: 13,
  left : 192
  } 
const ResetPassword = (props) => {
  // const dispatch = useDispatch();
  // console.log( "propssjdfklsjdf",props)
  const [userData, setUserData] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading } = props;
  console.log(userData, "userdata in component")
  // const history = useHistory();

// const RedirectLoginPage = () => {
//   history.push("/auth/login-1")
// }




  // const theme = useSelector(state => state.theme.currentTheme)
  // console.log( "propssjdfklsjdftheme",theme)
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("use effetr run")
    const query = new URLSearchParams(props.location.search);
    const token = query.get("token");
    const userId = query.get("userId");
    const emailId = query.get("emailId");
    console.log("Token ki value", token, userId, emailId);
    setUserData({ token, userId, emailId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.location.search, "props.location.search line no 43");

  const onSend = (values) => {
      console.log(newPassword, confirmPassword, "data fomr input field")
    // console.log(values, "values in data")
    // showLoading();
    // if(newpassword===newpassword){
    // const otpRequest = {
    //   email: props.location.state,
    //   otp: values.otp,
    //   newPassword: values.newpassword,
    //   confirmPassword: values.confirmpassword,
    //   userData: userData,
    // };
    // if (otpRequest.newPassword === otpRequest.confirmPassword) {
    //   const allRequest = {
    //     request: otpRequest,
    //     route: history,
    //   };
    //   dispatch(ResetPasswordAction(allRequest));
    //   props.resetpassword(allRequest);
    // } else {
    //   alert("newpassword!=confirmpassword");
    // }

    // }
  };

  const theme = "light";
  return (
    <React.Fragment>
      <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
        <Row justify="center" className="align-items-stretch h-100">
          <Col xs={0} sm={0} md={0} lg={12}>
            <div className="d-flex flex-column  h-100" style={backgroundStyle}>
              <Row justify="center" style={{ position: "absolute" }}>
                <Col xs={0} sm={0} md={0} lg={20}>
                  <div style={{ marginTop: "50%" }}>
                    <h1 className="text-white">“</h1>
                    <p className="text-white">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <Row className="justify-content-between">
                      <p className="text-white">
                        Vincent Obi{" "}
                        <CheckCircleOutlined className="bg-success" />
                      </p>
                      <p className="text-white">
                        <img
                          className="img-fluid h-100"
                          src="/img/others/Vector 1.png"
                          alt=""
                        />
                      </p>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={20} sm={20} md={24} lg={12}>
            <div className="container d-flex flex-column  h-100">
              <Row className="mt-2">
                <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                  <p>
                    <a href="/auth/login-1">
                      <LeftOutlined className="mr-1" />
                      Back
                    </a>
                  </p>
                </Col>
              </Row>
              <Row justify="center" className="mt-5 ">
                <Col xs={24} sm={24} md={20} lg={16} xl={24}>
                  <div className="text-center">
                    <h3 className="mt-3 font-weight-bold">Reset Password</h3>
                    <p className="mb-4">Enter your email</p>
                    <h5 className="text-center">
                      {props.location ? props.location.state : ""}
                    </h5>
                  </div>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={16} className="mx-5">
                      <Form
                        form={form}
                        layout="vertical"
                        name="forget-password"
                        // onFinish={onSend}
                        
                      >
                        <Form.Item
                          name="newPassword"
                          label="New password*"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter your password"
                            name="newPassword"
                            value={newPassword}
                            onChange= {(e) => setNewPassword(e.target.value)}
                            prefix={<MailOutlined className="text-primary" />}
                            className="py-3"
                          />
                        </Form.Item>
                        <Form.Item
                          name="confirmpassword"
                          label="Confirm Password*"
                          rules={[
                            {
                              required: true,
                              message: "Please reenter your password",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter confirm password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange= {(e) => setConfirmPassword(e.target.value)}
                            prefix={<MailOutlined className="text-primary" />}
                            className="py-3"
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                            block
                            className="py-4"
                            // onClick={RedirectLoginPage}
                            onClick={onSend}
                          >
                            <span style={TodoComponenting}  > Sent   </span> 
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
