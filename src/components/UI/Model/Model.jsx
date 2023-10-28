/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react';
import { CLOSE_SVG } from '../../../assets/images';

const Model = props => {
  const {
    headerTitle,
    children,
    // submitBtnText,
    // submitBtnHandler,
    // cancelBtnText,
    // cancelBtnHandler,
    closeModel,
    modalId,
    modalClass,
    errorMsg,
    successMsg,
    isDisable,
    FooterComponent,
    footerModalClass,
    zIndex,
  } = props;

  useEffect(() => {
    document.body.className = 'modal-open';
    return () => (document.body.className = '');
  }, []);

  return (
    <>
      <div
        className="modal show"
        id={modalId || ''}
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block', paddingRight: 5, zIndex: zIndex || 1041 }}
        aria-labelledby=""
        aria-hidden="true"
        onClick={closeModel}
      >
        <div
          className={`modal-dialog ${modalClass || ''} modal-dialog-centered`}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-content animated fadeInDownBig">
            {(headerTitle !== undefined || headerTitle != null) && (
              <div className="modal-header">
                <h4 className="modal-title">{headerTitle}</h4>
                <button type="button" className="close" disabled={isDisable} onClick={closeModel}>
                  {/* <span aria-hidden="true">&times;</span> */}
                  <img src={CLOSE_SVG} alt="" />
                </button>
              </div>
            )}
            {children}
            {(errorMsg || successMsg) && (
              <div className="mb-4 error-section">
                <div className="error-message text-center">{errorMsg}</div>
                <div className="success-message text-center">{successMsg}</div>
              </div>
            )}
            {FooterComponent && (
              <div className={`modal-footer d-flex flex-column ${footerModalClass || ''}`}>
                <FooterComponent />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" style={zIndex ? { zIndex: zIndex - 1 } : {}} />
    </>
  );
};

export default Model;
