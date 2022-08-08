import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { CheckCircleOutlined, LeftOutlined } from "@ant-design/icons";
import images3 from "../../../assets/img/others/Frame.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserChangePasswordAction } from "../../Redux/Action/UserAction";
import Search from "antd/lib/transfer/search";


const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${images3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.9",
  position: "relative",
};
const TodoComponenting = {
  position: "absolute",
  bottom: 13,
  left: 192,
};
const ResetPassword = (props) => {
  // console.log( "propssjdfklsjdf",props)
const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetpassword , setPasswordReset] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  const { loading } = props;

  const dispatch = useDispatch();

  const   userchangepasswordreducers  =  useSelector ((state) => state.userchangepasswordreducer);
  useEffect(()=>{
    if(userchangepasswordreducers && userchangepasswordreducers.users && userchangepasswordreducers.users.success==true){
      history.push('/auth/login-1')
      setPasswordReset(userchangepasswordreducers.users.success)
    }
  },[userchangepasswordreducers])
console.log(userchangepasswordreducers,'userchangepasswordreducers',resetpassword)
  const adminEmail = localStorage.getItem("email");
  const email = JSON.parse(adminEmail);

  const PasswordChange = () => {
    //  if(adminEmailData){
    const loginOtpRequest = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      email,
    };
    //  }

    dispatch(UserChangePasswordAction(loginOtpRequest));
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
                        layout="vertical"
                        name="forget-password"
                        onFinish={PasswordChange}
                      >
                        <Form.Item
                          label="OldPassword"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password",
                            },
                          ]}
                        >
                          {/* <input type="hidden" name="email" value="nisha.singh@manvish.com" 
                            onChange= {(e) => setEmail(e.target.value)} /> */}
                          <Input
                            placeholder="Enter your password"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            prefix={<MailOutlined className="text-primary" />}
                            className="py-3"
                          />
                        </Form.Item>

                        <Form.Item
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
                            onChange={(e) => setNewPassword(e.target.value)}
                            prefix={<MailOutlined className="text-primary" />}
                            className="py-3"
                          />
                        </Form.Item>

                        <Form.Item
                          name="conformPassword"
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
                            name="conformPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

                          >
                            <span style={TodoComponenting}> Sent </span>
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


