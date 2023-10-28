import React, { useState, useEffect } from 'react';
// import { AuthenticationContext } from "../../contexts";

function SetTokenInterval(Component, axios) {
  function WrappedComponent(props) {
    // const authContext = useContext(AuthenticationContext);
    const [interceptor] = useState(
      axios.interceptors.request.use(config => {
        const configObject = config;
        configObject.headers.Authorization = `${localStorage.getItem(`authToken`)}`;
        return configObject;
      }),
    );
    useEffect(
      () => () => {
        axios.interceptors.request.eject(interceptor);
      },
      [],
    );

    return (
      <>
        <Component {...props} />
      </>
    );
  }
  return WrappedComponent;
}
export default SetTokenInterval;
