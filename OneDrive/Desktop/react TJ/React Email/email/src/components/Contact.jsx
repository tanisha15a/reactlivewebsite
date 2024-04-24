import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', form.current,'YOUR_USER_ID')
        .then(
            (result) => {

                console.log(result.text);
                console.log("message sent")
            },
            (error) =>{
             console.log(error.text);

            }
        );
    };
    return(
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='user_name'/>
                <br/><br/>
                <label>Email</label>
                <input type='email' name='user_email'/>
                <br/><br/>
                <label>Message</label>
                <textarea name='message'/>
                <br/><br/>
                <input type='submit' value='Send'/>

            </form>
        </div>
    );
}
export default Contact;