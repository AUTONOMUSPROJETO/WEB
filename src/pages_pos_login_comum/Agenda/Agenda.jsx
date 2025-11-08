import React, { useState } from 'react';
import styles from './Agenda.module.css';
import Header from "../../components/Header/Header"
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import Button from "../../components/Button/Button"

function Agenda() {
    const timeSlots = [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
        '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
    ];

    const days = [
        { key: 'domingo', label: 'Domingo' },
        { key: 'segunda', label: 'Segunda' },
        { key: 'terca', label: 'Terça' },
        { key: 'quarta', label: 'Quarta' },
        { key: 'quinta', label: 'Quinta' },
        { key: 'sexta', label: 'Sexta' },
        { key: 'sabado', label: 'Sábado' }
    ];

    const [currentDay, setCurrentDay] = useState('segunda');
    const [availability, setAvailability] = useState({
        domingo: [],
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: [],
        sabado: []
    });

    const toggleTimeSlot = (time) => {
        setAvailability(prev => {
            const currentSlots = prev[currentDay];
            const index = currentSlots.indexOf(time);

            if (index > -1) {
                return {
                    ...prev,
                    [currentDay]: currentSlots.filter(slot => slot !== time)
                };
            } else {
                return {
                    ...prev,
                    [currentDay]: [...currentSlots, time].sort()
                };
            }
        });
    };

    const saveAvailability = () => {
        alert('Configurações salvas com sucesso!');
    };


  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

    return (
        <div className={styles.container}>

            {isMobile ? <HeaderMobile /> : <Header />}

            <div className={styles.header}>
                <h1 className={styles.title}>
                    Configure sua disponibilidade semanal
                </h1>
                <p className={styles.subtitle}>
                    Escolha os dias e horários que você ESTÁ disponível para agendamentos
                </p>
            </div>
            <div className={styles.card}>


                <div className={styles.content}>
                    <div className={styles.dayTabs}>
                        {days.map((day) => (
                            <button
                                key={day.key}
                                onClick={() => setCurrentDay(day.key)}
                                className={`${styles.dayTab} ${currentDay === day.key ? styles.dayTabActive : ''
                                    }`}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>

                    <p className={styles.instructions}>
                        Clique nos horários que você ESTÁ DISPONÍVEL nas {days.find(day => day.key === currentDay)?.label}:
                    </p>

                    <div className={styles.timeGrid}>
                        <div className={styles.timeColumn}>
                            {timeSlots.slice(0, 8).map((time) => {
                                const isSelected = availability[currentDay].includes(time);

                                return (
                                    <div key={time} className={styles.timeSlotContainer}>
                                        <button
                                            onClick={() => toggleTimeSlot(time)}
                                            className={styles.timeSlotButton}
                                        >
                                            <div className={`${styles.radioButton} ${isSelected ? styles.radioButtonSelected : ''
                                                }`}>
                                                {isSelected && (
                                                    <div className={styles.radioButtonInner}></div>
                                                )}
                                            </div>
                                            <span className={styles.timeLabel}>{time}</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.timeColumn}>
                            {timeSlots.slice(8, 16).map((time) => {
                                const isSelected = availability[currentDay].includes(time);

                                return (
                                    <div key={time} className={styles.timeSlotContainer}>
                                        <button
                                            onClick={() => toggleTimeSlot(time)}
                                            className={styles.timeSlotButton}
                                        >
                                            <div className={`${styles.radioButton} ${isSelected ? styles.radioButtonSelected : ''
                                                }`}>
                                                {isSelected && (
                                                    <div className={styles.radioButtonInner}></div>
                                                )}
                                            </div>
                                            <span className={styles.timeLabel}>{time}</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>


                        <div className={styles.timeColumn}>
                            {timeSlots.slice(16).map((time) => {
                                const isSelected = availability[currentDay].includes(time);

                                return (
                                    <div key={time} className={styles.timeSlotContainer}>
                                        <button
                                            onClick={() => toggleTimeSlot(time)}
                                            className={styles.timeSlotButton}
                                        >
                                            <div className={`${styles.radioButton} ${isSelected ? styles.radioButtonSelected : ''
                                                }`}>
                                                {isSelected && (
                                                    <div className={styles.radioButtonInner}></div>
                                                )}
                                            </div>
                                            <span className={styles.timeLabel}>{time}</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <div className={styles.saveButtonContainer}>
                        <Button
                            onClick={saveAvailability}
                            className={styles.saveButton}
                            text="Salvar"
                        >
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agenda