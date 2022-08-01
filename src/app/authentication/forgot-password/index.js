import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import {
  CheckCircleOutlined,
  LeftOutlined,
  LockOutlined,
} from "@ant-design/icons";
// import LoginForm from '../../components/LoginForm';
// import forgetPassword from '../forget-password';
import { images1 } from "../../../assets/img/others/Frame.png";
// import forgetPassword from '../forget-password';
// import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import { showAuthMessage, showLoading, hideAuthMessage, changePassword } from 'redux/actions/Auth';/
// import { useHistory } from "react-router-dom";
import images3 from "../../../assets/img/others/Frame.png";
import { useHistory } from "react-router-dom";

const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${images3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.9",
  position: "relative",
};

const ForgotPassword = (props) => {
  const history = useHistory();

  // const theme = useSelector(state => state.theme.currentTheme)
  const [form] = Form.useForm();
  const { showLoading, loading } = props;

  // const onSend = values => {
  //     showLoading()
  // 	const passwordRequest = {
  // 		email: values.email,
  // 	}
  // 	const allRequest = {
  // 		request: passwordRequest,
  // 		route: history,
  // 	}
  //         const token = props.token
  // 		props.changePassword(allRequest,token)

  // 	console.log("allRequest...",allRequest)
  // };

  const moveToreset = () => {
    history.push("/auth/resetpassword");
  };

  const theme = "light";

  return (
    <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={0} sm={0} md={0} lg={12}>
          <div className="d-flex flex-column  h-100" style={backgroundStyle}>
            <Row justify="center" style={{ position: "absolute" }}>
              <Col xs={0} sm={0} md={0} lg={20}>
                <div style={{ marginTop: "50%" }}>
                  <h1 className="text-white">“</h1>
                  <p className="text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <Row className="justify-content-between">
                    <p className="text-white">
                      Vincent Obi <CheckCircleOutlined className="bg-success" />
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
              <Col xs={24} sm={24} md={20} lg={12} xl={24}>
                <p>
                  <a href="/auth/login-1">
                    <LeftOutlined className="mr-1" />
                    Back
                  </a>
                </p>
              </Col>
            </Row>
            <Row className="mt-5 mx-5">
              <Col xs={24} sm={24} md={20} lg={16} xl={18} className="mx-5">
                <div className="text-left">
                  <h3 className="mt-3 font-weight-bold text-center">
                    Forgot Password?
                  </h3>
                  <p className="mb-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
                <Row justify="left">
                  <Col xs={24} sm={24} md={20} lg={24}>
                    <Form layout="vertical" name="forget-password">
                      <Form.Item
                        name="email"
                        label="Email Address*"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email address",
                          },
                          {
                            type: "email",
                            message: "Please enter a validate email!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter email address"
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
                          onClick={moveToreset}
                        >
                          {loading ? "Sending" : "Continue..."}
                        </Button>
                      </Form.Item>
                      <p>
                        <LockOutlined />
                        &nbsp; Your Info is safely secured
                      </p>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// redux/actions/Auth

// const mapDispatchToProps = {
// 	changePassword,
// 	showAuthMessage,
// 	showLoading,
// 	hideAuthMessage,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)

export default ForgotPassword;
