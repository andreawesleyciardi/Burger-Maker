import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';

import Input from './../../../ui/Input';
import Button from './../../../ui/Button';
import logo from './../../../../assets/images/logo.svg';
import {postSignin} from './../../../../assets/scripts/Services';

import './Signin.scss';



const Signin = () => {
    const { register , handleSubmit , setValue , getValues , watch , getFieldState , setError , clearErrors , trigger , control , formState: { errors , isSubmitting , isValid , isDirty } } = useForm({mode: 'onSubmit' ,defaultValues: {}});

    let navigate = useNavigate();

    const mutation = useMutation(postSignin, {
        onSuccess: (response) => {
            // localStorage.setItem('token', response.headers.token);
            localStorage.setItem('token', 'testtoken');
            navigate('../app/editor');
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <main>
            <form className="form-container" onSubmit={onSubmit}>
                <img className="form-logo" src={logo} alt="logo" />
                <Input type="text" {...register("name", {required: true})} />
                <Input type="password" {...register("password", {required: true})} />
                <Button type="submit" disabled={!isValid || mutation.isLoading}>Login</Button>

                {
                    mutation.isError
                    &&
                        <p>ERROR: {mutation.error.message || 'Generic Error'}</p>
                }
            </form>
        </main>
    );
};

export default Signin;