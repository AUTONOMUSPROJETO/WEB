import React, { useState, useEffect } from 'react';
import styles from './ConfiguracaoPerfilSete.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import HeaderDoisTrabalhador from '../../components/HeaderDoisTrabalhador/HeaderDoisTrabalhador';
import api from '../../services/api';

const FORM_DATA_KEY = 'perfilFormData';

function ConfiguracaoPerfilSete() {
    const navigate = useNavigate();
    const location = useLocation();

    const [hourlyRate, setHourlyRate] = useState('');
    const [allData, setAllData] = useState(null);
    const [idPrestador, setIdPrestador] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Efeito para buscar ID e dados (location.state ou sessionStorage)
    useEffect(() => {
        // 1. Busca ID do localStorage (lógica de login)
        const storedId = localStorage.getItem("idUsuario");
        if (storedId) {
            setIdPrestador(parseInt(storedId, 10));
        } else {
            console.error("ID do Prestador não encontrado no localStorage!");
            alert("Erro: ID do usuário não encontrado. Faça login novamente.");
            navigate('/login'); // Redireciona para login
            return;
        }

        // 2. Tenta pegar dados do formulário do 'location.state'
        let data = location.state;

        if (!data) {
            // 3. Se não houver (ex: F5), tenta pegar do 'sessionStorage'
            try {
                const storedData = sessionStorage.getItem(FORM_DATA_KEY);
                data = storedData ? JSON.parse(storedData) : null;
            } catch (error) {
                console.error("Erro ao ler dados do backup:", error);
                data = null;
            }
        }

        // 4. Verifica se temos os dados do formulário
        if (data) {
            setAllData(data);
            // Pré-preenche o campo desta página
            if (data.valorPublicacaoPrestador) {
                // Formata o número (ex: 70.5) de volta para string (ex: "70,50")
                const valorString = String(data.valorPublicacaoPrestador).replace('.', ',');
                setHourlyRate(valorString);
            }
            console.log("Dados recebidos na Etapa 7:", data);
        } else {
            // 5. Se não há dados, força o reinício
            console.error("Dados das etapas anteriores não encontrados!");
            alert("Erro: Dados das etapas anteriores perdidos. Por favor, recomece a configuração.");
            navigate('/configuracao-perfil-pro-um');
        }
    }, [location.state, navigate]);

    // Função de sanitização do preço (Melhorada)
    const handlePriceChange = (e) => {
        let value = e.target.value;
        value = value.replace(/[^0-9,]/g, ''); // Permite só números e vírgula
        const parts = value.split(',');
        if (parts.length > 2) {
            value = parts[0] + ',' + parts.slice(1).join(''); // Só permite uma vírgula
        }
        setHourlyRate(value);
    };

    // Função FINAL de submit
    const handleCreateProfile = async () => {
        if (isLoading) return;
        if (!idPrestador || !allData) {
            alert("Erro: Dados essenciais (ID ou dados das etapas anteriores) estão faltando.");
            return;
        }

        // Converte o valor para número (ex: "70,50" -> 70.50)
        const valorNumerico = parseFloat(hourlyRate.replace(',', '.'));
        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            alert("Por favor, insira um valor por hora válido e maior que zero.");
            return;
        }

        setIsLoading(true);


        const apiPayload = {
            publicacaoPrestador: {
                idPublicacaoPrestador: 0,
                idPrestador: idPrestador,
                categoriaPublicacaoPrestador: allData?.categoria || '',
                descricaoPublicacaoPrestador: allData?.descricao || '',
                valorPublicacaoPrestador: valorNumerico,
                formaDeAtendimentoPrestador: allData?.formaDeAtendimento || '',
                dataPublicacaoPrestador: new Date().toISOString()
            },
            publicacaoPrestadorAbordagens: (allData?.abordagens || []).map(item => ({
                idPrestadorAbordagem: 0,
                idPublicacaoPrestador: 0,
                descricaoAbordagemPrestador: item
            })),
            publicacaoPrestadorExperiencias: (allData?.experiencias || []).map(item => ({
                idPrestadorExperiencia: 0,
                idPublicacaoPrestador: 0,
                descricaoExperienciaPrestador: item
            })),
            publicacaoPrestadorHabilidades: (allData?.habilidades || []).map(item => ({
                idPrestadorHabilidades: 0,
                idPublicacaoPrestador: 0,
                descricaoHabilidadePrestador: item
            })),
            publicacaoPrestadorQualidades: (allData?.qualidades || []).map(item => ({
                idPrestadorQualidades: 0,
                idPublicacaoPrestador: 0,
                descricaoQualidadePrestador: item
            })),
            publicacaoPrestadorSubcategorias: (allData?.especialidades || []).map(item => ({
                idPublicacaoPrestadorSubcategoria: 0,
                idPublicacaoPrestador: 0,
                subcategoriaPrestador: item
            })),
        };

        console.log("Payload final formatado para API:", apiPayload);

        try {
            const response = await api.post("/api/PublicacaoPrestador", apiPayload);
            if (response.status === 200 || response.status === 201) {
                alert('Perfil/Publicação criado com sucesso!');

                // --- LIMPEZA CRÍTICA ---
                // Limpa o "backup" do formulário após o sucesso
                sessionStorage.removeItem(FORM_DATA_KEY);

                navigate('/homeprestador');
            } else {
                alert(`Erro ${response.status}: ${response.data?.message || 'Erro ao criar perfil.'}`);
            }
        } catch (error) {
            console.error("Erro detalhado ao enviar formulário:", error);
            const errorMsg = error.response?.data?.title
                || error.response?.data?.message
                || error.message
                || 'Ocorreu um erro ao conectar com o servidor.';
            alert(`Erro ao enviar: ${errorMsg}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Renderização de loading
    if (!allData || !idPrestador) {
        return <div>Carregando dados...</div>;
    }

    return (
        <div className={styles.container}>
            <HeaderDoisTrabalhador />
            <div className={styles.mainContent}>
                <div className={styles.textColumn}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Quase tudo pronto! Vamos apenas definir o seu preço por hora de trabalho</h1>
                        <p className={styles.subtitle}>
                            Informe quanto você cobra por hora pelos seus serviços. Pense no valor que representa sua experiência, a qualidade do seu atendimento e o tipo de solução que você oferece. Os clientes verão esse taxa no seu perfil e nos resultados de pesquisa assim que você publicar seu perfil.
                        </p>
                        <div className={styles.priceSection}>
                            <h2 className={styles.inputTitle}>Valor por hora</h2>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    inputMode="decimal" // Melhora UX mobile
                                    className={styles.priceInput}
                                    placeholder="0,00"
                                    value={hourlyRate}
                                    onChange={handlePriceChange}
                                    disabled={isLoading}
                                />
                                <span className={styles.currencyLabel}>R$ /h</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img src="/src/assets/3d-homem-pulando.png" alt="Happy 3D character" className={styles.characterImage} />
                </div>
            </div>
            {/* Rodapé */}
            <footer className={styles.footer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: '100%' }}></div>
                </div>
                <div className={styles.footerButtons}>
                    {/* Botão Voltar (passa o estado de volta, como você já fazia) */}
                    <button
                        className={styles.backButton}
                        onClick={() => navigate("/configuracao-perfil-pro-seis", { state: allData })}
                        disabled={isLoading}
                    >
                        Voltar
                    </button>
                    {/* Botão Criar Perfil */}
                    <button
                        className={styles.nextButton}
                        onClick={handleCreateProfile}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Criando...' : 'Criar perfil'}
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ConfiguracaoPerfilSete;