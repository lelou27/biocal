import React, {useEffect, useState} from 'react';
import {IonContent, IonPage, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Fidelity.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {getBarCode} from '../../services/BarCodeService';

const Fidelity: React.FC = () => {
    const [barcode, setBarCode] = useState('');

    useEffect(() => {
        if (barcode === '') {
            fetchBarCode();
        }
    });

    const fetchBarCode = async () => {
        try {
            const barCodeBase64 = await getBarCode();

            setBarCode(barCodeBase64);
        } catch (e) {
            setBarCode('error');
        }
    }

    return (
        <IonPage>
            <AppHeader show={false}/>
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
            </IonContent>
        </IonPage>
    );
};

export default Fidelity;
