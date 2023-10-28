const DeleteModel = props => {
  const {
    submitBtnText,
    submitBtnHandler,
    cancelBtnText,
    cancelBtnHandler,
    closeModel,
    from,
  } = props;

  return (
    <div
      className="modal coman-modal fade in"
      tabIndex="-1"
      role="dialog"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button type="button" className="close" onClick={() => closeModel()}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h2>
            {from === 'Logout'
              ? 'Are you sure you want to logout?'
              : 'Are you sure you want to Delete?'}
          </h2>
          <div className="clearfix" style={{ textAlign: 'center' }}>
            {cancelBtnText !== undefined &&
              cancelBtnText != null &&
              cancelBtnText !== '' && (
                <button
                  type="submit"
                  className="btn btn-primary m-l-sm"
                  onClick={() => {
                    if (typeof cancelBtnHandler === 'function') {
                      cancelBtnHandler();
                      closeModel();
                    } else closeModel();
                  }}
                >
                  {cancelBtnText}
                </button>
              )}
            {submitBtnText !== undefined &&
              submitBtnText != null &&
              submitBtnText !== '' && (
                <button
                  type="button"
                  className="btn btn-primary  m-l-sm"
                  onClick={() => {
                    if (typeof submitBtnHandler === 'function') {
                      submitBtnHandler();
                      // closeModel();
                    } else closeModel();
                  }}
                >
                  {submitBtnText}
                </button>
              )}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade in" />
    </div>
  );
};

export default DeleteModel;
