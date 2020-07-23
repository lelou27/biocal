import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Fidelity.css';

const Fidelity: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                    <IonGrid>
                        <IonRow class='ion-align-items-center'>
                            <IonCol>
                                <IonImg src={require('../../assets/images/Biocal_Jauge.png')} class='imageJauge'/>
                                <p className={'nbPoints'}>Tant de points</p>
                            </IonCol>
                        </IonRow>
                        <IonRow class={'points'}>
                            <IonCol>
                                <p>Nb de points cumulés</p>
                            </IonCol>
                            <IonCol>
                                <p>5€ dons cumulés</p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                            <h1>Carte de fidelité</h1>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonImg src={require('../../assets/images/Biocal_Carte.png')} class={'imageCarte'}/>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Fidelity;
