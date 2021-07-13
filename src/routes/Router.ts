import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AuthLayout from "@layouts/Auth";

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}){
  const Layout = AuthLayout;

  return (React.createElement(Route, Object.assign({}, rest, { 
      render: props => (
        React.createElement(Layout, null,
        React.createElement(Component, Object.assign({}, props)))) 
  })));
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false,
}