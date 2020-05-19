import React from "react";
import { Route, Switch } from "react-router-dom";
import allRoutes, { AuthRoutes, GuestRoutes } from "./core/routes";
import { connect } from "react-redux";
import { getProfile } from "./core/selectors";

const Routes = (props) => (
  <Switch>
    {props.profile
      ? AuthRoutes.map(({ component, path, exact }) => (
          <Route
            exact={true}
            path={path}
            component={component}
            key={`route_path_${path}`}
          />
        ))
      : GuestRoutes.map(({ component, path, exact }) => (
          <Route
            exact={true}
            path={path}
            component={component}
            key={`route_path_${path}`}
          />
        ))}
    {allRoutes.map(({ component, path, exact }) => (
      <Route
        exact={true}
        path={path}
        component={component}
        key={`route_path_${path}`}
      />
    ))}
  </Switch>
);
const mapStateToProps = (state) => ({
  profile: getProfile(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
