import React from 'react';

const FormInput = props => {
  // eslint-disable-next-line no-unused-vars
  const { ID, value, name, type, readOnly, enabled, element, handleChange } = props;

  if (enabled) {
    switch (type) {
      case 'TEXT':
        return (
          <>
            <label>{name}</label>
            <input
              className="contactInput"
              type="text"
              name={name}
              // placeholder={
              //   elementLabel === 'prefill|readonly|enabled' ? prefillValue : ''
              // }
              defaultValue={value}
              onChange={e => {
                handleChange(ID, e.target.value);
              }}
              readOnly={readOnly}
              // disabled={!formItem.enable}
            />
          </>
        );

      case 'GROUP':
        return element.map(item => (
          <FormInput key={item.ID} {...item} handleChange={handleChange} />
        ));

      default:
        break;
    }
  }
  return null;
};

export default FormInput;
