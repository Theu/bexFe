import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validateInput, utiliseForm) => {
    // I need initial name, email, psw
    // I want to handle errors
    // I want to be able to submit

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                // happy path
                utiliseForm();
                setSubmitting(false);
            } else {
                // handle errors
                setSubmitting(false);
            }
        }
    }, [errors, isSubmitting, utiliseForm]);

    // handle changes (inputs)
    // handle blur (check values when click away)
    // handle submit (submit...)
    const handleChange = (event) => {
        event.persist();
        console.log('event.target.value :>> ', event.target.value);
        setValues((previousValue) => ({
            ...previousValue,
            [event.target.name]: event.target.value,
        }));
    };

    const handleBlur = () => {
        const errorsOnValidation = validateInput(values);
        setErrors(errorsOnValidation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // check for errors on submit and inform useEffect that I am submitting
        const errorsOnValidation = validateInput(values);
        setErrors(errorsOnValidation);
        setSubmitting(true);
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};

export default useFormValidation;
