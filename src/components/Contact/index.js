import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';
export default function Contact() {
    const initialState = { name: '', from_Email: '', message: '' };
    const [entry, setFormState] = useState(initialState);
    const { name, from_Email, message } = entry;
    const [errorMessage, setErrorMessage] = useState('');
    const [emailConfirmation, setConfirmation] = useState(null);

    const handleOnChange = e => {
        setFormState({ ...entry, [e.target.name]: e.target.value });
        if (e.target.name === 'from_Email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...entry, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validateEmail(from_Email);
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;
        const refresh = () => {
            // const form = new FormData(entry)
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setConfirmation('Your message was sent successfully!');
            setFormState(initialState);
            setTimeout(() => {
                setConfirmation(null);
                document.location.reload()
            }, 4000);

        }

        errorMessage ? alert(errorMessage) :
            !name && from_Email && message ? alert('Name is required') :
                !from_Email && name && message ? alert('Email is required') :
                    !message && from_Email && name ? alert('Message is required') :
                        !message && !from_Email && !name ? alert('Fields can not be blank!') :
                            !isValid ? alert('Your email is invalid') :
                                refresh();
    }

    return (
        <section className='col-12 d-flex flex-wrap justify-content-center mt-5'>
            <div className='col-12 text-center mb-5 text-success'>{emailConfirmation}</div>
            <Form className='col-11 col-sm-11 col-md-6 col-lg-5 col-xl-4 bg-dark contactForm p-5 boxShadow' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='text-white textShadow'>Let's get in touch!</h1>

                <Form.Group controlId="nameControl">
                    <Form.Label><i className="bi bi-person-square" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i> <span className='text-white'>Who are you?</span> </Form.Label>
                    <Form.Control
                        className='formLabel'
                        type="text"
                        placeholder="John Smith"
                        onBlur={handleOnChange}
                        defaultValue={name}
                        name="name"
                    />
                </Form.Group>
                <Form.Group controlId="emailControl">
                    <Form.Label> <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i>  <span className='text-white'>What's your email?</span> </Form.Label>
                    <Form.Control
                        className='formLabel'
                        type="email"
                        name="from_Email"
                        placeholder="name@example.com"
                        onBlur={handleOnChange}
                        defaultValue={from_Email}
                    />
                </Form.Group>
                <Form.Group controlId="messageControl">
                    <Form.Label> <i className="bi bi-pencil-square" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i> <span className='text-white'>Leave a message</span>  </Form.Label>
                    <Form.Control
                        className='formLabel'
                        defaultValue={message}
                        onBlur={handleOnChange}
                        placeholder="Required"
                        name="message"
                        as="textarea"
                        rows={5}

                    />
                </Form.Group>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
                <div className='col-12 d-flex flex-wrap justify-content-end m-1 p-2'>
                    <button type='submit'
                        className='lightGreen p-3 m-1 text-white textShadow boxShadow submit'
                    // onSubmit={(e) => handleSubmit(e)}
                    // onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </section>

    );
}