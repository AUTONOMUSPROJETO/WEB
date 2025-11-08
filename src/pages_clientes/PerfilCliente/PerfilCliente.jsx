import React, { useState, useEffect, useRef } from 'react';
import styles from './PerfilCliente.module.css';
import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams, useSearchParams } from 'react-router-dom';
import api from "../../services/api";
import HeaderMobileCliente from '../../components/HeaderMobileCliente/HeaderMobileCliente';
import { FaLocationDot, FaCamera } from "react-icons/fa6";
import FotoPerfilPadrao from "../../assets/fotoPerfilUser.png";
import IconeEstrela from "../../assets/icons/IconEstrela.svg";
import SuasPublicacoes from '../../components/SuasPublicacoes/SuasPublicacoes';
import HeaderMainCliente from '../../components/HeaderMainCliente/HeaderMainCliente';


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


function PerfilCliente() {
    const [usuario, setUsuario] = useState({});
    const [profileImage, setProfileImage] = useState(FotoPerfilPadrao);
    const fileInputRef = useRef(null);

    const [imageFile, setImageFile] = useState(null);

    const [formData, setFormData] = useState({
        idCliente: 0,
        nomeCliente: '',
        sobrenomeCliente: '',
        emailCliente: '',
        generoCliente: '',
        estadoCliente: '',
        telefoneCliente: '',
        senhaCliente: '',
        avaliacaoCliente: 0
    });

    

    const [searchParams, setSearchParams] = useSearchParams();
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);

    const isMobile = useMediaQuery("only screen and (max-width:1445px)")
    const { id } = useParams();
    const opcoesGeneroFiltradas = generos.filter(
        (genero) => genero !== usuario?.generoCliente
    );
    const opcoesEstadoFiltradas = estados.filter(
        (estado) => estado !== usuario?.estadoCliente
    );


    const menuItems = [
        'Informações da conta',
        'Altere sua senha',
        'Sua conta',
        'Avaliações feitas por você',
        'Suas publicações'
    ];

    //    async function getUser() {
    //     const response = await api.get(`/ClienteFiltro/${id}`);
    //     setUsuario(response.data);
    //     console.log(response.data)
    //     if (response.data.fotoPerfil) {
    //         setProfileImage(response.data.fotoPerfil);
    //     }
    // }

    async function getUser() {
        try {
            const response = await api.get(`/ClienteFiltro/${id}`);
            const userData = response.data;
            setUsuario(userData);

            setFormData({
                idCliente: id,
                nomeCliente: userData.nomeCliente || '',
                sobrenomeCliente: userData.sobrenomeCliente || '',
                emailCliente: userData.emailCliente || '',
                generoCliente: userData.generoCliente || '',
                estadoCliente: userData.estadoCliente || '',
                telefoneCliente: userData.telefoneCliente || '',
                senhaCliente: userData.senhaCliente || '',
                avaliacaoCliente: userData.avaliacaoCliente || 0
            });

            //if (userData.fotoPerfil) {
             //   setProfileImage(userData.fotoPerfil);
           // }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
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
            setProfileImage(URL.createObjectURL(file));
            setImageFile(file);
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setProfileImage(reader.result);
            //     console.log("Nova imagem selecionada:", reader.result);
            // };
            // reader.readAsDataURL(file);
        }
    };

    const handleSquareClick = () => {
        fileInputRef.current.click();
    };

    const handleMenuItemClick = (index) => {
        setSearchParams({ menu: index });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async (e) => {

        e.preventDefault();

        try {
            const response = await api.put(`/Cliente`, formData);
            if (response.status === 200) {
                alert('Perfil atualizado com sucesso!');
            }
        } catch (error) {
            console.error("Erro ao atualizar o perfil:", error);
            alert('Ocorreu um erro ao atualizar o perfil. Tente novamente.');
        }

    };

    async function handleDelete(){
        try{
            const response = await api.delete(`/Cliente`, {
                params:{idCliente: id}
            });
            if (response.status === 200) {
                alert('Perfil deletado com sucesso!');
            }
        }
        catch(erro){
            console.error("Erro ao deletar o perfil:", error);
            alert('Ocorreu um erro ao deletar o perfil. Tente novamente.');
        }
    }



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
                                            {usuario?.nomeCliente} {usuario?.sobrenomeCliente}
                                        </h3>
                                        <div className={styles.localizacao}>
                                            <FaLocationDot /> {usuario?.estadoCliente}
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
                                            <span className={styles.infoUsuario}>{usuario?.generoCliente}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Estado</span>
                                            <span className={styles.infoUsuario}>{usuario?.estadoCliente}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Nome</span>
                                            <span className={styles.infoUsuario}>{usuario?.nomeCliente}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Email</span>
                                            <span className={styles.infoUsuario}>{usuario?.emailCliente}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Sobrenome</span>
                                            <span className={styles.infoUsuario}>{usuario?.sobrenomeCliente}</span>
                                        </div>
                                        <div className={styles.infoItem}>
                                            <span className={styles.infoLabel}>Telefone</span>
                                            <span className={styles.infoUsuario}>{usuario?.telefoneCliente}</span>
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
                            <form className={styles.formGrid} onSubmit={handleSave}>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Gênero</label>
                                    <select name="generoCliente" className={styles.inputField} defaultValue={formData.generoCliente} onChange={handleInputChange}>
                                        <option value={usuario?.generoCliente} disabled hidden>
                                            {usuario?.generoCliente}
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
                                    <input type="text" name="nomeCliente" className={styles.inputField} defaultValue={formData.nomeCliente} onChange={handleInputChange} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Sobrenome</label>
                                    <input type="text" name="sobrenomeCliente" className={styles.inputField} defaultValue={formData.sobrenomeCliente}  onChange={handleInputChange} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Email</label>
                                    <input type="email" name="emailCliente" className={styles.inputField} defaultValue={formData.emailCliente}  onChange={handleInputChange}/>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Telefone</label>
                                    <input type="tel" name="telefoneCliente"  className={styles.inputField} defaultValue={formData.telefoneCliente}  onChange={handleInputChange}/>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.infoLabel}>Estado</label>
                                    <select name="estadoCliente" className={styles.inputField} defaultValue={formData.estadoCliente} onChange={handleInputChange}>
                                        <option value={usuario?.estadoCliente} disabled hidden>
                                            {usuario?.estadoCliente}
                                        </option>
                                        {opcoesEstadoFiltradas.map((estado, index) => (
                                            <option key={index} value={estado}>
                                                {estado}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className={styles.saveButton} type="submit">Salvar</button>
                            </form>

                        </div>

                        <div className={`${styles.secao} ${styles.dangerSection}`}>
                            <h2 className={styles.tituloInformacoes}>Exclua sua conta</h2>
                            <p className={styles.alertText}>
                                <span className={styles.alertTitle}>ATENÇÃO:</span> Ao clicar no botão abaixo, sua conta será excluída permanentemente. Todos os seus dados, histórico e informações serão removidos da plataforma e não poderão ser recuperados.
                            </p>
                            <button className={styles.deleteButton} onClick={handleDelete}>Excluir</button>
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
                return <SuasPublicacoes />;
            default:
                return null;
        }
    };

    return (
        <>
            {isMobile ? <HeaderMobileCliente /> : <HeaderMainCliente />}
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
                        <h1 className={styles.tituloPrincipal}>Meu perfil<span className={styles.badgeCliente}>Cliente</span></h1>
                        {renderContent()}
                    </div>
                </div>
            </div >
        </>
    );
}

export default PerfilCliente;