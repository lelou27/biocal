import './FaireDon.css';
import React from "react";
import {IonContent, IonPage, IonList, IonRadioGroup, IonImg, IonLabel, IonRow, IonCol, IonListHeader,IonItem,IonRadio} from '@ionic/react';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const FaireDon: React.FC = () => {
    return(
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <div className="grid">
                    <div className="grid-image greenpeace">
                    </div>
                    <div className="grid-contenu-fairedon">
                        <div className="jauge">
                            <IonRow class='ion-align-items-center'>
                                <IonCol>
                                    <IonImg src={require('../../assets/images/Biocal_Jauge.png')} class='imageJauge'/>
                                    <p className={'nbPoints'}>Tant de points</p>
                                </IonCol>
                            </IonRow>
                        </div>
                        <div className="select-prix">
                            <IonList>
                                <IonRadioGroup>
                                    <IonItem>
                                        <IonLabel>0,05€</IonLabel>
                                        <IonRadio value="5" />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>0,10€</IonLabel>
                                        <IonRadio value="10" />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>0,15€</IonLabel>
                                        <IonRadio value="15" />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>0,20€</IonLabel>
                                        <IonRadio value="20" />
                                    </IonItem>
                                </IonRadioGroup>
                            </IonList>
                        </div>
                    </div>
                    <div className="button ">
                        <button ion-button  className={'accountButton'}> Valider le don</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default FaireDon;