import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const Form = () => {
    let formik=useFormik({
        initialValues:{
            username:'',
            password:'',
        },
        validationSchema:Yup.object({
            username:Yup.string().required("Username is required"),
            password:Yup.string().required("password is a must").min(8,"Minimum of 8 chars is a must")
            .matches(/[a-z]/,"Must contain atleast 1 lower character")
            .matches(/[A-Z]/,"Must contain atleast 1 Cap character")
            .matches(/[0-9]/,"Must contain atleast 1 number")
            .matches(/[^a-zA-Z0-9]/,"Must contain atleast contain 1 speical character"),

        }),
        onSubmit:values=>{
            alert(JSON.stringify(values,null,2));
        },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
            {formik.touched.username && formik.errors.username?(
                <div style={{color:'red'}}>{formik.errors.username}</div>
            ):null}
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            {formik.touched.username && formik.errors.password?(
                <div style={{color:'red'}}>{formik.errors.password}</div>
            ):null}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form
