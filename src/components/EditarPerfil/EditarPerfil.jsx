import React, { useState } from 'react';
import styles from './EditarPerfil.module.css';
import { Pencil, Trash2 } from 'lucide-react';

const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const UserPlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>;
const BookmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>;

function EditarPerfil() {
  const [valorHora, setValorHora] = useState('70,00');
  const [tipoAtendimento, setTipoAtendimento] = useState('Presencial');

  const handleValorHoraChange = (e) => {
    const newValue = e.target.value;
    if (/^[0-9,.]*$/.test(newValue)) {
      setValorHora(newValue);
    }
  };

  return (
    <div className={styles.container}>
      {/* Seção de Estatísticas */}
      <div className={styles.statsSection}>
        <h2 className={styles.statsTitle}>Estatísticas <span className={styles.statsSubtitle}>Dos últimos 30 dias</span></h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Exibições</span>
            </div>
            <div className={styles.cardValue}>2,2 mil</div>
            <div className={styles.cardChange}>↑ 1,0 mil</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Visualizações</span>
            </div>
            <div className={styles.cardValue}>2,2 mil</div>
            <div className={styles.cardChange}>↑ 1,0 mil</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Novos contatos</span>
            </div>
            <div className={styles.cardValue}>2,2 mil</div>
            <div className={styles.cardChange}>↑ 1,0 mil</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Salvos</span>
            </div>
            <div className={styles.cardValue}>2,2 mil</div>
            <div className={styles.cardChange}>↑ 1,0 mil</div>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          {/* Seção de Categorias */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Categorias</h3>
              <span className={styles.editIcon}><Pencil size="18px" /></span>
            </div>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Tecnologia</span>
              <span className={styles.tag}>Suporte a hardware</span>
              <span className={styles.tag}>Configuração de redes e internet</span>
            </div>
          </div>

          {/* Seção de Descrição do anúncio */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Descrição do anúncio</h3>
              <span className={styles.editIcon}><Pencil size="18px" /></span>
            </div>
            <div className={styles.descriptionContent}>
              <h4>Sobre</h4>
              <p>Sou Técnico de TI com sólida experiência em suporte técnico, redes e infraestrutura de TI, atuando com eficiência na resolução de problemas e na manutenção da estabilidade dos sistemas corporativos. Ao longo da minha trajetória, desenvolvi um perfil analítico, ágil e orientado a resultados, sempre priorizando a qualidade do atendimento e a satisfação dos usuários. Tenho uma paixão genuína por tecnologia e um forte compromisso com a excelência. Estou constantemente em busca de inovações e atualizações no setor.</p>
              <h4>Experiências de trabalho</h4>
              <ul className={styles.list}>
                <li><span className={styles.checkedItem}>✓</span> Responsável pelo suporte técnico a mais de 200 usuários em ambiente corporativo</li>
                <li><span className={styles.checkedItem}>✓</span> Administração de rede interna, controle de acesso e manutenção de servidores</li>
                <li><span className={styles.checkedItem}>✓</span> Configuração de Active Directory, DNS, DHCP e GPO</li>
                <li><span className={styles.checkedItem}>✓</span> Apoio na migração de e-mails para Office 365 e Google Workspace</li>
              </ul>
              <h4>Abordagem</h4>
              <p>Sou prático, focado e organizado. Gosto de planejar antes de executar, entender o problema a fundo e aplicar soluções que realmente funcionam, sem improvisos que só resolvem por um tempo. Trabalho com responsabilidade, sempre pensando no impacto que cada decisão técnica pode ter no usuário final e no ambiente como um todo. Prefiro fazer bem feito na primeira vez, com atenção aos detalhes, clareza e profissionalismo em cada etapa.</p>
              <h4>O que faço?</h4>
              <ul className={styles.list}>
                <li><span className={styles.checkedItem}>✓</span> Suporte técnico presencial e remoto (Windows, Linux, Office 365)</li>
                <li><span className={styles.checkedItem}>✓</span> Manutenção de computadores, notebooks e periféricos</li>
                <li><span className={styles.checkedItem}>✓</span> Configuração de redes (roteadores, switches, firewalls, VPN)</li>
                <li><span className={styles.checkedItem}>✓</span> Organização de cabeamento e estrutura de rede física</li>
                <li><span className={styles.checkedItem}>✓</span> Configuração de impressoras, dispositivos móveis e sistemas corporativos</li>
              </ul>
              <h4>Por que me escolher?</h4>
              <ul className={styles.list}>
                <li><span className={styles.checkedItem}>✓</span> Tenho experiência sólida em suporte técnico, redes e infraestrutura, sempre focando em soluções rápidas e eficazes</li>
                <li><span className={styles.checkedItem}>✓</span> Me comunico de forma clara e objetiva, mesmo com usuários que não têm familiaridade com tecnologia</li>
                <li><span className={styles.checkedItem}>✓</span> Sou proativo, comprometido e estou sempre em busca de atualizações para oferecer o melhor atendimento possível</li>
                <li><span className={styles.checkedItem}>✓</span> Atendo com agilidade, responsabilidade e foco total na estabilidade dos sistemas e na satisfação do usuário</li>
              </ul>
            </div>
          </div>

          {/* Seção de Valor e Atendimento */}
          <div className={styles.bottomSection}>
            <div className={styles.inputGroup}>
              <div className={styles.sectionHeader}>
                <h3>Valor por hora</h3>
                <span className={styles.editIcon}><Pencil size="18px" /></span>
              </div>
              <div className={styles.inputField}>
                <span>R$</span>
                <input
                  type="text"
                  value={valorHora}
                  onChange={handleValorHoraChange}
                />
                <span>/hr</span>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.sectionHeader}>
                <h3>Tipo de atendimento</h3>
                <span className={styles.editIcon}><Pencil size="18px" /></span>
              </div>
              <select
                className={styles.selectField}
                value={tipoAtendimento}
                onChange={(e) => setTipoAtendimento(e.target.value)}
              >
                <option>Presencial</option>
                <option>Remoto</option>
                <option>Remoto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Coluna da direita */}
        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <h4>Detalhes do anúncio</h4>
            <button className={styles.actionItem} onClick={() => alert("Visualizar anúncio")}>
              <span>Visualizar anúncio como cliente</span>
              <EyeIcon />
            </button>
            <button className={styles.actionItem} onClick={() => alert("Excluir perfil")}>
              <span>Excluir perfil</span>
              <Trash2 />
            </button>
          </div>
          <div className={styles.card}>
            <h4>Status do perfil</h4>
            <div className={styles.statusBox}>
              <span className={styles.statusText}>Em análise</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btnSave}>
        Salvar alterações
      </button>
    </div>
  );
};

export default EditarPerfil;