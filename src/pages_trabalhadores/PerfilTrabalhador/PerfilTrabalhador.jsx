import React, { useState, useEffect, useRef } from 'react';
import styles from './PerfilTrabalhador.module.css';
import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams, useSearchParams } from 'react-router-dom';
import api from "../../services/api";
import HeaderMainTrabalhador from '../../components/HeaderMainTrabalhador/HeaderMainTrabalhador';
import HeaderMobileTrabalhador from '../../components/HeaderMobileTrabalhador/HeaderMobileTrabalhador';
import { FaLocationDot, FaCamera } from "react-icons/fa6";
import FotoPerfilPadrao from "../../assets/fotoPerfilUser.png";
import IconeEstrela from "../../assets/icons/IconEstrela.svg";
import EditarPerfil from '../../components/EditarPerfil/EditarPerfil';

const generos = ['Masculino', 'Feminino', 'Outro'];
const estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
];;

function PerfilTrabalhador() {
    const [usuario, setUsuario] = useState({});
    const [profileImage, setProfileImage] = useState(FotoPerfilPadrao);
    const fileInputRef = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);

    const isMobile = useMediaQuery("only screen and (max-width:1445px)")
    const { id } = useParams();
    const opcoesGeneroFiltradas = generos.filter(
        (genero) => genero !== usuario?.generoPrestador
    );
    const opcoesEstadoFiltradas = estados.filter(
        (estado) => estado !== usuario?.estadoPrestador
    );


    const menuItems = [
        'Informações da conta',
        'Altere sua senha',
        'Sua conta',
        'Avaliações feitas por você',
        'Editar seu perfil'
    ];

    async function getUser() {
        const response = await api.get(`/PrestadorFiltro/${id}`);
        setUsuario(response.data);
        console.log(response.data)
        if (response.data.fotoPerfil) {
            setProfileImage(response.data.fotoPerfil);
        }
    }

    useEffect(() => {
        const menuIndexFromUrl = searchParams.get('menu');
        setActiveMenuIndex(parseInt(menuIndexFromUrl) || 0);

        getUser();
    }, [id, searchParams]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                console.log("Nova imagem selecionada:", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSquareClick = () => {
        fileInputRef.current.click();
    };

    const handleMenuItemClick = (index) => {
        setSearchParams({ menu: index });
    };

    const renderContent = () => {
        switch (activeMenuIndex) {
            case 0:
                return (
                    <>
                        <div className={styles.cima}>
                            <div className={styles.profileImageContainer} onClick={handleSquareClick}>
                                <img src={profileImage} alt="Foto de Perfil" className={styles.profileImage} />
                                <div className={styles.overlay}>
                                    <FaCamera size={30} color="white" />
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <div className={styles.perfilCard}>
                                <div className={styles.cabecalhoPerfil}>
                                    <span className={styles.seta}></span>
                                </div>
                                <div className={styles.conteudoPerfil}>
                                    <div className={styles.nomeLocalizacao}>
                                        <h3 className={styles.nomeUsuario}>
                                            {usuario?.nomePrestador} {usuario?.sobrenomePrestador}
                                        </h3>
                                        <div className={styles.localizacao}>
                                            <FaLocationDot /> {usuario?.estadoPrestador}
                                        </div>
                                    </div>
                                    <h1 className={styles.tituloAvaliacoes}>Avaliações</h1>
                                    <div className={styles.avaliacao}>
                                        <div className={styles.estrelas}>
                                            <img src={IconeEstrela} alt="estrela" />
                                            <img src={IconeEstrela} alt="estrela" />
                                            <img src={IconeEstrela} alt="estrela" />
                                            <img src={IconeEstrela} alt="estrela" />
                                            <img src={IconeEstrela} alt="estrela" />
                                        </div>
                                        <div className={styles.nota}>5.0</div>
                                    </div>
                                    <div className={styles.data}>(3 avaliações)</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.secao}>
                            <h2 className={styles.tituloInformacoes}>Informações da conta</h2>
                            <ul className={styles.listaMenu}>
                                <div className={styles.containerInfo}>
                                    <div className={styles.infoGrid}>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Gênero</span>
                                            <span className={styles.infoUsuario}>{usuario?.generoPrestador}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Estado</span>
                                            <span className={styles.infoUsuario}>{usuario?.estadoPrestador}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Nome</span>
                                            <span className={styles.infoUsuario}>{usuario?.nomePrestador}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Email</span>
                                            <span className={styles.infoUsuario}>{usuario?.emailPrestador}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Sobrenome</span>
                                            <span className={styles.infoUsuario}>{usuario?.sobrenomePrestador}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Telefone</span>
                                            <span className={styles.infoUsuario}>{usuario?.telefonePrestador}</span>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </>
                );
            case 1:
                return (
                    <div className={styles.secao}>
                        <h2 className={styles.tituloInformacoes}>Altere sua senha</h2>
                        <div className={styles.changePasswordForm}>
                            <div className={styles.passwordInputGroup}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Senha atual</span>
                                    <input type="password" className={styles.passwordInput} />
                                </div>
                            </div>
                            <div className={styles.passwordInputGrid}>
                                <div className={styles.passwordInputGroup}>
                                    <label className={styles.infoLabel}>Senha nova</label>
                                    <input type="password" className={styles.passwordInput} placeholder="A senha deve conter pelo menos 8 caracteres" />
                                </div>
                                <div className={styles.passwordInputGroup}>
                                    <label className={styles.infoLabel}>Confirmar senha nova</label>
                                    <input type="password" className={styles.passwordInput} />
                                </div>
                            </div>
                            <button className={styles.saveButton}>Salvar</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <>
                        <div className={styles.secao}>
                            <h2 className={styles.tituloInformacoes}>Alterar informações da conta</h2>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Gênero</label>
                                    <select className={styles.inputField} defaultValue={usuario?.generoPrestador}>
                                        <option value={usuario?.generoPrestador} disabled hidden>
                                            {usuario?.generoPrestador}
                                        </option>

                                        {opcoesGeneroFiltradas.map((genero, index) => (
                                            <option key={index} value={genero}>
                                                {genero}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Nome</label>
                                    <input type="text" className={styles.inputField} defaultValue={usuario?.nomePrestador} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Sobrenome</label>
                                    <input type="text" className={styles.inputField} defaultValue={usuario?.sobrenomePrestador} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Email</label>
                                    <input type="email" className={styles.inputField} defaultValue={usuario?.emailPrestador} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Telefone</label>
                                    <input type="tel" className={styles.inputField} defaultValue={usuario?.telefonePrestador} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Estado</label>
                                    <select className={styles.inputField} defaultValue={usuario?.estadoPrestador}>
                                        <option value={usuario?.estadoPrestador} disabled hidden>
                                            {usuario?.estadoPrestador}
                                        </option>
                                        {opcoesEstadoFiltradas.map((estado, index) => (
                                            <option key={index} value={estado}>
                                                {estado}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button className={styles.saveButton}>Salvar</button>
                        </div>

                        <div className={`${styles.secao} ${styles.dangerSection}`}>
                            <h2 className={styles.tituloInformacoes}>Exclua sua conta</h2>
                            <p className={styles.alertText}>
                                <span className={styles.alertTitle}>ATENÇÃO:</span> Ao clicar no botão abaixo, sua conta será excluída permanentemente. Todos os seus dados, histórico e informações serão removidos da plataforma e não poderão ser recuperados.
                            </p>
                            <button className={styles.deleteButton}>Excluir</button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <div className={styles.secao}>
                        <h2 className={styles.tituloInformacoes}>Avaliações feitas por você</h2>
                        <p>Nenhuma avaliação até agora...</p>
                    </div>
                );
            case 4:
                return <EditarPerfil />;
            default:
                return null;
        }
    };

    return (
        <>
            {isMobile ? <HeaderMobileTrabalhador /> : <HeaderMainTrabalhador />}
            <div className={styles.container}>
                <div className={styles.menuConfiguracoes}>
                    <div className={styles.esquerda}>
                        <h2 className={styles.tituloSecao}>Configurações</h2>
                        <ul className={styles.listaMenu}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${styles.itemMenu} ${activeMenuIndex === index ? styles.ativo : ''}`}
                                    onClick={() => handleMenuItemClick(index)}
                                >
                                    <a className={styles.link}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.direita}>
                        <h1 className={styles.tituloPrincipal}>Meu perfil<span className={styles.badgeCliente}>Profissional</span></h1>
                        {renderContent()}
                    </div>
                </div>
            </div >
        </>
    );
}

export default PerfilTrabalhador;