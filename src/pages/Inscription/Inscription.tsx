import React, {useState} from 'react';
import {
    IonButton,
    IonCheckbox,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRadioGroup
} from '@ionic/react';
import './Inscription.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Inscription: React.FC = () => {
    const [checkedWoman, setCheckedWoman] = useState(false);
    const [checkedMan, setCheckedMan] = useState(false);

    const setCheckBoxMan = async () =>{
        setCheckedMan(true)
        if(checkedWoman){
            setCheckedWoman(false)
        }
    }

    const setCheckBoxWoman = async () =>{
        setCheckedWoman(true)
        if(checkedMan){
            setCheckedMan(false)
        }
    }

    return (
        <IonPage>
            <AppHeader show={false}/>
            <IonContent className={'inscriptionContainer'}>
                <h1 className={'inscriptionTitle'}>Inscription</h1>
                <div className={'sexChoice'}>
                    <IonItem className={'manCHoice'}>
                        <IonCheckbox checked={checkedMan} onClick={async () => await setCheckBoxMan()} />
                        <IonLabel className={'sexChoiceLabel'}>Homme</IonLabel>
                    </IonItem>
                    <IonItem className={'WomanCHoice'}>
                        <IonCheckbox checked={checkedWoman} onClick={async () => await setCheckBoxWoman()} />
                        <IonLabel className={'sexChoiceLabel'}>Femme</IonLabel>
                    </IonItem>
                </div>
                <IonInput className={'inscriptionField'} placeholder={'Nom'}></IonInput>
                <IonInput className={'inscriptionField2'} placeholder={'Prénom'}></IonInput>
                <IonInput className={'inscriptionField'} placeholder={'Date de naissance'}></IonInput>
                <IonInput className={'inscriptionField2'} placeholder={'Ville'}></IonInput>
                <IonInput className={'inscriptionField'} placeholder={'Email'}></IonInput>
                <IonInput className={'inscriptionField2'} placeholder={'Password'}></IonInput>
                <IonButton className={'inscriptionButton'} href={''}>Valider</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Inscription;