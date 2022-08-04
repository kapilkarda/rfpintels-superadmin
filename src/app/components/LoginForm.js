import React, { useState ,useEffect} from "react";
import { Button, Form, Input, Divider, Alert, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import {  notification } from 'antd';
// import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
import { UserLoginAction } from "../Redux/Action/UserAction";






const openNotification = () => {
  notification.open({
  
    description:
      'User Login Successfully',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};



const openNotifications = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'Wrong Password',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};




export const LoginForm = (props) => {
  // console.log(props, "props in the component")
  let history = useHistory();
  const dispatch =  useDispatch()

  const {
    otherSignIn,
    showForgetPassword,
    onForgetPasswordClick,
    // showLoading,
    extra,
    loading,
    showMessage,
    message,
  } = props;

  const initialCredential = {
    email: "",
    password: "",
  };

  const TodoComponent = {
    position: "absolute",
    bottom: 13,
    left: 192,
  };
  const forgetstyle = {
    position: "relative",
    left: 238,
  };


const userloginreducers = useSelector((state) =>  state.userloginreducer.user)
console.log(userloginreducers, "userloginreducersuserloginreducersuserloginreducers")

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [state] = useState("");


  
  useEffect(() => {

    if(userloginreducers && userloginreducers.success===true){
      history.push("/management/CompanyManage");
      openNotification ()
      
    }
    else {
      openNotifications();  
    }
   
   
},[userloginreducers,history])

  const RedirectSupertadmin = (state) => {
   
    dispatch(UserLoginAction(state))
    }
   

  const onLogin = (values) => {
    console.log(values, "values in component")
    // showLoading();
    const loginOtpRequest = {
      email: values.email,
      password: values.password,
    };
   console.log(loginOtpRequest, "loginOtpRequest in the component")
   dispatch(UserLoginAction(loginOtpRequest));

  };

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          {/* or connect with */}
        </span>
      </Divider>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}> </Alert>
      </motion.div>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}

      >
        <Form.Item
          name="email"
          label="Email address"
          autoComplete="none"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a validate  manvish.com",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-primary rounded-pill" />}
            className="py-3 "
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Item>
        <Form.Item
          name="password"
          autoComplete="none"
          label={
            <div className="">
              <span>Password</span>
              <span className=" justify-content-end">
                <a
                  href="/auth/forgot-password"
                  className="text-end"
                  style={forgetstyle}
                >
                  (Forget Password?)
                </a>
              </span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted "
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password ",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-primary" />}
            className="py-3  "
            type="password"
            name="email"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          className="text-left"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="py-4"
            onClick={() => RedirectSupertadmin(state)}
          >
            <span style={TodoComponent}> Login </span>
          </Button>
        </Form.Item>
        {otherSignIn ? renderOtherSignIn : null}
        {extra}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

export default LoginForm;

