
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
        <div className=" max-w-1/2 mt-4 mb-4 ml-auto mr-auto p-8 rounded-xl bg-white">
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <form className=" flex-col w-80 gap-10 pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex-col justify-center gap-5 mb-5">
                    <label>Email: </label>
                    <input className='border-[1px] border-gray-400 rounded-[5px] w-80' type="email" {...register("email",{required: "Email is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email format"}})}/>
                    {errors.email ? <span className="text-red-600 text-sm  mt-2">{errors.email.message}</span>:""}
                </div>
                <div className="flex-col justify-center gap-5 mb-5">
                    <label>Subject: </label>
                    <input className='border-[1px] border-gray-400 rounded-[5px] w-80' type="text" {...register("subject",{required: "Subject is required",pattern:{value: /^.{10,30}$/, message: "Subject must be between 10 and 30 characters"}})}/>
                    {errors.subject ? <span className="text-red-600 text-sm  mt-2">{errors.subject.message}</span>:""}
                </div>
                <div className="flex-col justify-center gap-5 mb-5">
                    <label>Message: </label><br/>
                    <textarea className='border-[1px] border-gray-400 rounded-[5px] w-80' rows="5" {...register("message",{required: true})} />
                    {errors.message ? <span className=" text-red-600 text-sm  mt-2">Message is required</span>:""}
                </div>
                <button type="submit" className="submit-btn py-2.5 px-5 bg-[#4CAF50] text-white border-none rounded-[5px] cursor-pointer ">Submit</button>
            </form>
        </div>
    );
}