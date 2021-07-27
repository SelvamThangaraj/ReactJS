import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

const validateEmployee = empData => {
    const errors = {};
  
    if (!empData.Name) {
      errors.Name = 'Please Enter Employee Name';
    } else if (empData.Name.length > 20) {
      errors.Name = 'Name cannot exceed 20 characters';
    }
  
    if (!empData.Location) {
      errors.Location = 'Please Enter Employee Location';
    } 
  
    if (!empData.EmailId) {
      errors.EmailId = 'Please Enter Email ID';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
      errors.EmailId = 'Invalid email address';
    }
  
    return errors;
  };

const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Id: '',
            Name: '',
            Location: '',
            Salary: '',
            EmailId:''
        },
        validate:validateEmployee,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    return (
        <div>
            <h2>Enter Employee Details...</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee ID </label>
                    <input
                        id="Id"
                        name="Id"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Id}
                    />
                </p>

                <p>
                    <label htmlFor="Name">Employee Name </label>
                    <input
                        id="Name"
                        name="Name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Name}
                        onBlur="handleBlur"
                    />
                    {formik.touched.Name && formik.errors.Name ?
                     <span style={{color:'red'}}>
                         {formik.errors.Name}
                     </span> :null}
                </p>
                <p>
                    <label htmlFor="Location">Employee Location </label>
                    <input
                        id="Location"
                        name="Location"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Location}
                        onBlur="handleBlur"
                    />
                    {formik.touched.Location && formik.errors.Location ?
                     <span style={{color:'red'}}>
                         {formik.errors.Location}
                     </span> :null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary </label>
                    <input
                        id="Salary"
                        name="Salary"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Salary}
                    />
                </p>
                <p>
                    <label htmlFor="EmailId"> Email Id </label>
                    <input 
                        id="EmailId"
                        name="EmailId"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.EmailId}
                        onBlur="handleBlur"
                    />
                    {formik.touched.EmailId && formik.errors.EmailId ?
                     <span style={{color:'red'}}>
                         {formik.errors.EmailId}
                     </span> :null}
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

};

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element, document.getElementById('root'));
