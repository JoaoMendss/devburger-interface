import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg';
import { api } from '../../services/api'
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title
} from './styles';

export function Register() {

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório!'),
            email: yup
                .string().email('Digite um e-mail válido!')
                .required('O e-mail é obrigatório!'),
            password: yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha!'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref])
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log(errors)

    const onSubmit = async (data) => {
        const response = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem vindo(a) de volta! 👏',
                error: 'E-mail ou senha Incorretos',
            },
        );




    console.log(response);
}

return (
    <Container>
        <LeftContainer>
            <img src={Logo} alt='logo-devBurger' />
        </LeftContainer>
        <RightContainer>
            <Title>
                Olá, seja bem vindo ao <span>Dev Burguer!</span>
                <br />
            </Title>
            <Title>
                Acesse com seu<span> Login e senha.</span>
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <label>Email</label>
                    <input type="email" placeholder='E-mail' {...register("email")} />
                    <p>{errors?.email?.message}</p>
                </InputContainer>

                <InputContainer>
                    <label>Senha</label>
                    <input type="password" placeholder='Senha' {...register("password")} />
                    <p>{errors?.password?.message}</p>
                </InputContainer>
                <Button type="submit">Entrar</Button>
            </Form>
            <p>
                Não possui conta? <a>Clique aqui.</a>
            </p>
        </RightContainer>
    </Container>
);
}
