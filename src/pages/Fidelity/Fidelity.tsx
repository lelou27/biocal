import React, {useEffect, useState} from 'react';
import {IonContent, IonPage, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Fidelity.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {getBarCode} from '../../services/BarCodeService';
import {getUser} from '../../services/UserService';

const Fidelity: React.FC = () => {
    const [barcode, setBarCode] = useState('');
    const [user, setUser] = useState({ _id: String, userXP: Number});
    const [error, setError] = useState(Boolean);
    const [loaded, setLoaded] = useState(Boolean);

    useEffect(() => {
        if (barcode === '') {
            fetchBarCode();
        }

        if (!error && !loaded) {
            getLocalUser();
        }
    });

    const fetchBarCode = async () => {
        try {
            const barCodeBase64 = await getBarCode();

            setBarCode(barCodeBase64);
        } catch (e) {
            setBarCode('error');
        }
    };

    const getLocalUser = async () => {
        try {
            const user = await getUser('5f19b195691187b0b8421dbe');

            setUser(user);
            setLoaded(true);
        } catch (e) {
            setError(true);
            setLoaded(true);
        }
    };

    return (
        <IonPage>
            <AppHeader show={false}/>
            <IonContent>
                {!error && loaded && <IonGrid>
                        <IonRow class='ion-align-items-center'>
                            <IonCol>
                                <IonImg src={require('../../assets/images/Biocal_Jauge.png')} class='imageJauge'/>
                                <p className={'nbPoints'}>Tant de points</p>
                            </IonCol>
                        </IonRow>
                        <IonRow class={'points'}>
                            <IonCol>
                                <p>{user.userXP} points cumulés</p>
                            </IonCol>
                            <IonCol>
                                <p>5€ dons cumulés</p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                            <h1 className={'titreCarteFid'}>CARTE DE FIDELITÉ</h1>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="ionColFidelity">
                                <IonImg src={require('../../assets/images/Biocal_Carte.png')} class={'imageCarte'}/>
                                { barcode !== 'error' && barcode !== '' && <IonImg src={barcode} class={'barcodeImage'}/>}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                }
            </IonContent>
        </IonPage>
    );
};

export default Fidelity;
