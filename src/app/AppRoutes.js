import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../src/configs/AppConfig";

import Spinner from "../app/shared/Spinner";
import EditCompanyList from "./managment/EditCompanyList";


// import SubscriberManagment from './managment/SubscriberManagment'
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./managment/Buttons"));
const Dropdowns = lazy(() => import("./managment/Dropdowns"));
const Typography = lazy(() => import("./managment/Typography"));
const CompanyManage = lazy(() => import("./managment/Company"));
const UserManagment = lazy(() => import("./managment/UserManagment"));
const SubscriberManagment = lazy(() =>
  import("./managment/SubscriberManagment")
);
const ExtraPage = lazy(() => import("./managment/ExtraPage"));
const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));
const ChartJs = lazy(() => import("./charts/ChartJs"));
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));
const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Lockscreen = lazy(() => import("./user-pages/Lockscreen"));
const BlankPage = lazy(() => import("./general-pages/BlankPage"));

class AppRoutes extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />

            <Route
              path={`${AUTH_PREFIX_PATH}/login`}
              component={lazy(() => import(`./authentication/login`))}
            />
            <Route
              path={`${AUTH_PREFIX_PATH}/login-1`}
              component={lazy(() => import(`./authentication/login-1`))}
            />
            <Route
              path={`${AUTH_PREFIX_PATH}/login-2`}
              component={lazy(() => import(`./authentication/login-2`))}
            />

           
            <Route
              path={`${AUTH_PREFIX_PATH}/validation`}
              component={lazy(() => import(`./authentication/validation`))}
            />
            <Route
              path={`${AUTH_PREFIX_PATH}/resetpassword`}
              component={lazy(() =>
                import(`./authentication/ResetPassword/ResetPassword`)
              )}
            />
            <Route
              path={`${AUTH_PREFIX_PATH}/loginValidation`}
              component={lazy(() => import(`./authentication/loginValidation`))}
            />

            <Route exact path="/EditCompanyList" component={EditCompanyList} />

            <Route path="/basic-ui/buttons" component={Buttons} />
            <Route path="/basic-ui/dropdowns" component={Dropdowns} />
            <Route path="/basic-ui/typography" component={Typography} />
            <Route path="/management/CompanyManage" component={CompanyManage} />
            <Route path="/management/usermanagment" component={UserManagment} />
            <Route
              path="/management/subscribermanagment"
              component={SubscriberManagment}
            />
            <Route path="/management/extrapage" component={ExtraPage} />
            <Route
              path="/form-Elements/basic-elements"
              component={BasicElements}
            />

            <Route path="/tables/basic-table" component={BasicTable} />
            <Route path="/icons/mdi" component={Mdi} />
            <Route path="/charts/chart-js" component={ChartJs} />
            <Route path="/user-pages/login-1" component={Login} />
            <Route path="/user-pages/register-1" component={Register1} />
            <Route path="/user-pages/lockscreen" component={Lockscreen} />
            <Route path="/error-pages/error-404" component={Error404} />
            <Route path="/error-pages/error-500" component={Error500} />
            <Route path="/general-pages/blank-page" component={BlankPage} />

            <Redirect to="auth/login-1" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default AppRoutes;
