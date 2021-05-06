import React from "react";
import {Formik, useFormik} from "formik";

const OrderForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
          console.log("kid")
        },
    });

    return (
      <div>
          <form onSubmit={formik.handleSubmit}>
              <button type={"submit"}>Submit</button>
          </form>
      </div>
    );
}
export default OrderForm;