import React from 'react'
import {render } from 'react-dom'
import { withFormik } from 'formik'

import Yup from 'yup'

const App =({
    values,
    handleChange
})=>(
    <div>
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
    </div>
)

const FormikApp = withFormik({
    mapPropsToValues({email}){
        return{
            email: email || ''
        }
    }
})(App)

export default FormikApp