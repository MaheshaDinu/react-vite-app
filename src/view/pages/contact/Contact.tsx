
import './Contact.css';
import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}
export function Contact() {
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

    const onSubmit = (data: FormData) =>{
        console.log("Form data submitted:", data);
        alert(`Submitted your case: ${data.subject}`);
    }

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" {...register("email",{required: "Email is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email format"}})}/>
                    {errors.email ? <span className="error">{errors.email.message}</span>:""}
                </div>
                <div className="form-group">
                    <label>Subject: </label>
                    <input type="text" {...register("subject",{required: "Subject is required",pattern:{value: /^.{10,30}$/, message: "Subject must be between 10 and 30 characters"}})}/>
                    {errors.subject ? <span className="error">{errors.subject.message}</span>:""}
                </div>
                <div className="form-group">
                    <label>Message: </label>
                    <textarea rows="5" {...register("message",{required: true})} />
                    {errors.message ? <span className="error">Message is required</span>:""}
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}