import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';

import {Button, Error, Input} from './../../../ui/UI';
import logo from './../../../../assets/images/logo.svg';
import {postSignin} from './../../../../assets/scripts/Services';

import './Signin.scss';



const Signin = () => {
    const { register, handleSubmit, formState: { isSubmitting, isValid } } = useForm({ mode: 'onSubmit', defaultValues: {} });

    const navigate = useNavigate();

    const mutation = useMutation(postSignin, {
        onSuccess: (response) => {
            localStorage.setItem('token', response.token);
            setTimeout(() => {
                navigate('/app/editor', {replace: true});
            }, 200);
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <main data-area="public">
            <form className="form-container" onSubmit={onSubmit}>
                <img className="form-logo" src={logo} alt="logo" />
                <Input type="text" {...register("name", {required: true})} placeholder="Username" />
                <Input type="password" {...register("password", {required: true})} placeholder="Password" />
                <Button type="submit" disabled={!isValid || isSubmitting || mutation.isLoading}>Login</Button>
                {
                    mutation.isError
                    &&
                        <Error>Authentication failed. Please, try again.</Error>
                }
            </form>
        </main>
    );
};

export default Signin;