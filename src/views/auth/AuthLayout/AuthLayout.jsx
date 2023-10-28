
/* eslint-disable no-unused-vars */
const AuthLayout = props => {
  const { children } = props;
  return (
    // <div className="container content-center">
    //   {children}
    // </div>
    <div className="container-fluid" style={{ paddingLeft: 0 }}>
      <div className="row">
        Auth Layout
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
