import React, { useState } from "react";
import HeaderDois from '../../components/headerdois/headerdois.jsx';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import { useMediaQuery } from "@uidotdev/usehooks";
import styles from './Login.module.css';
import Button from "../../components/Button";
import FooterDois from "../../components/FooterDois/FooterDois.jsx";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";


import { VscEye, VscEyeClosed } from "react-icons/vsc";




function Login() {
    const isMobile = useMediaQuery("only screen and (max-width:1024px)");
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try{
            const body = {email, senha}
            const response = await api.post("/api/Login", body)
            const data = response.data
            if(data.length > 0){
                const usuario = data[0].tipo
                const idUsuario = data[0].idUsuario
                localStorage.setItem("idUsuario", idUsuario)
                navigate(`/home${usuario}`)
            }
        }
        catch(erro){
            console.log(erro)
        }
    }


    return (
        <>
            {isMobile ? <HeaderMobile /> : <HeaderDois />}
            <div className={styles.background}>
                <div className={styles.loginContainer}>
                    <div className={styles.header}>
                        <h1>Entre e tenha acesso completo à plataforma</h1>
                        <p>Não possui uma conta? <a href="/tipocadastro">Cadastre-se aqui</a></p>
                    </div>

                    <div className={styles.loginForm}>
                        <h2>LOGIN</h2>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="senha">Senha</label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="senha"
                                    name="senha"
                                    onChange={e => setSenha(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className={styles.showPasswordButton}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <span><VscEye /></span> // Ícone quando a senha está visível
                                    ) : (
                                        <span><VscEyeClosed /></span> // Ícone quando a senha está oculta
                                    )}
                                </button>
                            </div>
                            <a href="/esqueciminhasenha" className={styles.forgotPassword}>Esqueci minha senha</a>
                        </div>

                        <div className={styles.formActions}>
                            <Button text="Entrar" onClick={handleLogin}></Button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterDois />
        </>
    );
}

export default Login;