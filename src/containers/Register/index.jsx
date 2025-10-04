import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup'; 

import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg';
import { api } from '../../services/api'
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link,
} from './styles';

export function Register() {
    const navigate = useNavigate();
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
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
                .required('Confirme sua senha!'),
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

        try {
            const { status } = await api.post(
                '/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,
                }
            );

            if (status === 200 || status === 201) {
                setInterval(() => {
                    navigate('/login')
                }, 2000);
                toast.success('Conta criada com sucesso!');
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar.');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('😭 Falha no Sistema! Tente novamente.');
        }
    };



    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devBurger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar Conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>
                    Já possui conta? <Link to="/login">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );
}
