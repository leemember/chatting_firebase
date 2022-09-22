import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input

      
    return (
        <div className="authBox">
          <form className="auth-wrapper">
            <label>Example</label>
            <input name="example" defaultValue="test" {...register("example")} />

            <label></label>
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <p>This field is required</p>}

            <input type="submit" />
          </form>
        </div>
    )
}

export default RegisterPage