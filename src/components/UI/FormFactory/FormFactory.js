/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import FormInput from './FormInput/FormInput';

const FormFactory = props => {
  const { formProps, title, children: Children } = props;

  const generateObj = payload => {
    const readOnly =
      payload.elementLabel !== null ? payload.elementLabel.includes('readonly') : true;
    const prefill = payload.elementLabel !== null ? payload.elementLabel.includes('prefill') : true;
    const enabled = payload.elementLabel !== null ? payload.elementLabel.includes('enabled') : true;

    return {
      ID: Math.floor(Math.random() * 100000000),
      value: prefill ? payload.prefillValue : '',
      name: payload.variableName,
      type: payload.elementType,
      readOnly,
      prefill,
      enabled,
    };
  };

  const [formValue, setFormValue] = useState(() => {
    const dataObj = {};
    formProps.map(item => {
      if (item.elementType === 'GROUP') {
        if (item.replicable) {
          dataObj[`${item.variableName}`] = {
            replicable: true,
            elements: [
              {
                type: 'GROUP',
                element: item.subElements.map(item1 => generateObj(item1)),
                enabled: true,
              },
            ],
          };
        } else {
          dataObj[`${item.variableName}`] = {
            type: 'GROUP',
            element: item.subElements.map(item1 => generateObj(item1)),
            enabled: true,
          };
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (item.replicable) {
          dataObj[`${item.variableName}`] = {
            replicable: true,
            elements: [generateObj(item)],
          };
        } else {
          dataObj[`${item.variableName}`] = generateObj(item);
        }
      }
      return null;
    });
    return dataObj;
  });

  const handleChange = (ID, value) => {
    Object.keys(formValue).map(key => {
      if (formValue[key].replicable) {
        formValue[key].elements.map((_, index) => {
          if (formValue[key].elements[index].ID === ID) {
            formValue[key].elements[index].value = value;
          }
          if (
            formValue[key].elements[index].ID === undefined &&
            formValue[key].elements[index].type === 'GROUP'
          ) {
            formValue[key].elements[index].element.map((__, index1) => {
              if (formValue[key].elements[index].element[index1].ID === ID) {
                formValue[key].elements[index].element[index1].value = value;
              }
            });
          }
        });
      } else if (formValue[key].ID === ID) {
        formValue[key].value = value;
      } else if (formValue[key].type === 'GROUP') {
        formValue[key].element.map((__, index1) => {
          if (formValue[key].element[index1].ID === ID) {
            formValue[key].element[index1].value = value;
          }
        });
      }
    });

    setFormValue({ ...formValue });
  };

  return (
    <form>
      <h1>{title}</h1>
      {Object.keys(formValue).map(item => (
        <>
          {formValue[item].replicable ? (
            formValue[item].elements.map((item1, index) => (
              <>
                <FormInput key={item1.ID} {...item1} handleChange={handleChange} />
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      const temp = { ...formValue[item].elements[0] };
                      if (formValue[item].elements[0].type === 'GROUP') {
                        const test = temp.element.map(item2 => {
                          const temp1 = { ...item2 };
                          temp1.value = '';
                          temp1.ID = Math.floor(Math.random() * 100000000);
                          return temp1;
                        });
                        temp.element = test;
                      } else {
                        temp.value = '';
                        temp.ID = Math.floor(Math.random() * 100000000);
                      }
                      formValue[item].elements.push(temp);
                      setFormValue({ ...formValue });
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      formValue[item].elements.splice(index, 1);
                      setFormValue({ ...formValue });
                    }}
                  >
                    -
                  </button>
                )}
                <br />
              </>
            ))
          ) : (
            <FormInput key={item.ID} {...formValue[item]} handleChange={handleChange} />
          )}
          <br />
        </>
      ))}
      <Children
        formData={(() => {
          const dataObj = {};
          Object.keys(formValue).map(key => {
            if (formValue[key].value !== undefined) {
              dataObj[key] = formValue[key].value;
            }
            if (formValue[key].value === undefined) {
              if (formValue[key].elements && formValue[key].elements[0].type === 'GROUP') {
                dataObj[key] = formValue[key].elements.map(item => {
                  const obj = {};
                  item.element.map(item1 => (obj[item1.name] = item1.value));
                  return obj;
                });
              } else if (formValue[key].type && formValue[key].type === 'GROUP') {
                const obj = {};
                formValue[key].element.map(item => {
                  obj[item.name] = item.value;
                });
                dataObj[key] = obj;
              } else {
                dataObj[key] = formValue[key].elements.map(item => item.value);
              }
            }
          });
          return dataObj;
        })()}
      />
    </form>
  );
};

export default FormFactory;
