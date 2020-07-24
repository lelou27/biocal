import './FaireDon.css';
import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonPage,
    IonList,
    IonRadioGroup,
    IonImg,
    IonLabel,
    IonRow,
    IonCol,
    IonListHeader,
    IonItem,
    IonRadio,
    IonButton
} from '@ionic/react';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {getActuelsXp} from "../../services/UserService";
import {setDon} from "../../services/DonService";

const FaireDon: React.FC = () => {
    const [xp, setXp] = useState<any>(null);
    const [error, setError] = useState(Boolean);

    useEffect(() => {
        if(xp === null) {
            getXp();
        }
    });

    const getXp = async () => {
        try {
            const xp = await getActuelsXp('5f19b195691187b0b8421dbe');

            setXp(xp);
        } catch (e) {
            setError(true);
        }
    };

    const postDon = async  (user: String, association: String, montantDon: number) => {
        try {
            const don = await setDon(user, association, montantDon);
        } catch (e) {
            setError(true);
        }
    };

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
                                    <IonImg src={require('../../assets/images/Biocal_Jauge.png')} class='imageJaugeDon'/>
                                    <p className={'nbPoints'}>{xp} points</p>
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
                        <IonButton href={'Fidelity'} className={'donButton'} onClick={ () => postDon('5f19b195691187b0b8421dbe', '5f19dfd467ee324848f3f5b5', 20)}> Valider le don</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
export default FaireDon;
