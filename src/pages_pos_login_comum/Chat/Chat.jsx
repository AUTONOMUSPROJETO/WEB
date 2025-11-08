/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Search, Send, X, ArrowLeft } from 'lucide-react';
import styles from './Chat.module.css';
import Header from "../../components/Header/Header"
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState('roberto');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const contacts = [
    { id: 'roberto', name: 'Roberto de Souza', lastMessage: 'Preciso de ajuda para configurar o sistema do meu...', time: '14:30', unread: true, avatar: '👨‍💼' },
    { id: 'luana', name: 'Luana dos Santos', lastMessage: 'Oi', time: '14:25', unread: false, avatar: '👩‍💼' },
    { id: 'gabriel', name: 'Gabriel Medeiros', lastMessage: 'Oi, tudo bem? É a sua primeira vez aqui e procura do...', time: '14:20', unread: false, avatar: '👨‍🎓' },
    { id: 'gabriela', name: 'Gabriela Fernandes', lastMessage: 'Oi estou bem! Vi que você postou um anúncio...', time: '14:15', unread: false, avatar: '👩‍💻' }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'me',
        content: message.trim(),
        time: getCurrentTime()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');

      setTimeout(() => {
        const messagesContainer = document.getElementById('messages-container');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 100);
    }
  };

  const selectedContact = contacts.find(c => c.id === selectedChat);

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  return (
    <div className={styles.container}>

      {isMobile ? <HeaderMobile /> : <Header />}

      <div className={styles.mainContainer}>
        {/* Sidebar */}
        <div className={isMobileSidebarOpen ? styles.sidebarMobile : `${styles.sidebar} ${window.innerWidth >= 1024 ? styles.flex : styles.hidden}`}>
          {isMobileSidebarOpen ? (
            <div className={`${styles.sidebarHeader} ${styles.sidebarHeaderMobile}`}>
              <h2 className={styles.sidebarTitle}>Mensagens</h2>
              <button onClick={() => setIsMobileSidebarOpen(false)} className={styles.menuButton}>
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className={styles.sidebarHeader}>
              <h2 className={styles.sidebarTitle}>Mensagens</h2>
              <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} size={16} />
                <input type="text" placeholder="Pesquisar" className={styles.searchInput} />
              </div>
            </div>
          )}

          <div className={styles.tabs}>
            <button className={styles.tabActive}>Mensagens</button>
          </div>

          <div className={styles.contactsList}>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => {
                  setSelectedChat(contact.id);
                  setIsMobileSidebarOpen(false);
                }}
                className={selectedChat === contact.id ? styles.contactItemSelected : styles.contactItem}
              >
                <div className={styles.contactAvatar}>{contact.avatar}</div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactHeader}>
                    <h3 className={styles.contactName}>{contact.name}</h3>
                    <span className={styles.contactTime}>{contact.time}</span>
                  </div>
                  <p className={styles.contactMessage}>{contact.lastMessage}</p>
                </div>
                {contact.unread && <div className={styles.unreadDot}></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={styles.chatArea}>
          {selectedContact ? (
            <>
              <div className={styles.chatHeader}>
                <div className={styles.chatUserInfoWrapper}>
                  {isMobile && (
                    <button
                      onClick={() => setIsMobileSidebarOpen(true)} // AQUI ESTÁ A MUDANÇA
                      className={styles.backButton}
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  <div className={styles.chatAvatar}>{selectedContact.avatar}</div>
                  <div className={styles.chatUserInfo}>
                    <h3 className={styles.chatUserName}>{selectedContact.name}</h3>
                    <p className={styles.chatUserStatus}>Online</p>
                  </div>
                </div>
              </div>

              <div id="messages-container" className={styles.messagesContainer}>
                {messages.map((msg) => (
                  <div key={msg.id} className={msg.sender === 'me' ? styles.messageWrapperMe : styles.messageWrapper}>
                    <div className={`${styles.messageBubble} ${msg.sender === 'me' ? styles.messageBubbleMe : styles.messageBubbleOther}`}>
                      <p className={styles.messageText}>{msg.content}</p>
                      <p className={styles.messageTime}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.inputContainer}>
                <div className={styles.inputWrapper}>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      e.target.style.height = 'auto';
                      e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Quando poderemos nos encontrar?"
                    className={styles.messageInput}
                  />
                  <button
                    onClick={sendMessage}
                    className={message.trim() ? styles.sendButton : styles.sendButtonDisabled}
                    disabled={!message.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateContent}>
                <div className={styles.emptyStateIcon}>💬</div>
                <p>Selecione uma conversa para começar</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobileSidebarOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileSidebarOpen(false)} />
      )}
    </div>
  );
}