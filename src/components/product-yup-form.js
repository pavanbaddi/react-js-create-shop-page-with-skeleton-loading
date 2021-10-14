import { useFormik } from 'formik';
import React from 'react'
import './product-form.css';
import * as yup from 'yup'

export default function ProductYupForm() {

    yup.addMethod( yup.mixed, 'file', function( error_message ) {
        return this.test( 'test-1', error_message, function( value ) {
            return ( value instanceof File )
        } )
    } )

    yup.addMethod( yup.mixed, 'allowedMime', function( mime, error_message=null  ) {
        return this.test( 'test-1', error_message, function( value ) {
            if( !value ){
                return
            }
            let _mime = value.type.split("/")[0]
            let { path, createError } = this
            return (
                _mime === mime ||
                createError( { path, message: ( error_message != null )? error_message : `Only ${mime} type of files are allowed` } )
            )
        } )
    } )

    const formik = useFormik({
        initialValues : {
            name : '',
            price : '',
            image : '',
        },
        validationSchema : yup.object(
            {
                name : yup.string().required("Name required."),
                price : yup.number().min(1).required("Price is required"),
                image : yup.mixed().required("File is required").file( "Must be a file" ).allowedMime("image"),
            }
        ),
        onSubmit: values => {
            console.log(`values`, values)
            // console.log(`formik`, formik)
        }
    })

    return (
        <div className="container" >
            <div className="center" >
                <form onSubmit={formik.handleSubmit} >
                    <div>
                        <label>Product Name</label>
                        <div>
                            <input onChange={formik.handleChange} name="name" type="text" value={formik.values.name} />
                            { formik.errors.name ? <div>{ formik.errors.name }</div> : null }
                        </div>
                    </div>

                    <div>
                        <label>Product Price</label>
                        <div>
                            <input onChange={formik.handleChange} name="price" value={formik.values.price} type="number" step="any" />
                            { formik.errors.price ? <div>{ formik.errors.price }</div> : null }
                        </div>
                    </div>

                    <div>
                        <label>Product Image</label>
                        <div>
                            <input type="file" onChange={ ( e ) => formik.setFieldValue( "image", e.target.files[0] ) } name="image" />
                            { formik.errors.image ? <div>{ formik.errors.image }</div> : null }
                        </div>
                    </div>
                    

                    <div>
                        <input type="submit" className="mt-20" value="Save" />
                    </div>

                </form>
            </div>
        </div>
    )
}
