import React from "react";
import {Formik, FormikValues} from "formik";

const OrderForm: React.FC = () => {

    return (
      <div>
            <Formik
                initialValues={{}}
                onSubmit={(values: FormikValues) => {
                    console.log("kid");
                    console.log(values)
                }}

            >
                {
                    props => (
                        <form onSubmit={props.handleSubmit}>
                            <input
                                type={"text"}
                            />
                            <button type={"submit"}/>
                        </form>
                    )
                }
            </Formik>
      </div>
    );
}
export default OrderForm;