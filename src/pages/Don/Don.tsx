import React, {useState} from 'react';
import {
    IonContent,
    IonPage,
    IonImg,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonPopover,
    IonButton,
    IonRadio, IonList, IonRadioGroup, IonListHeader, IonItemDivider, IonSearchbar
} from '@ionic/react';
import './Don.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Don: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [selected, setSelected] = useState<string>('');
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <div className={'searchContainer'}>
                    <IonSearchbar className={'searchField'} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                    <IonImg className={'imgFilter'} onClick={() => setShowPopover(true)} src={require("../../assets/images/BIOCAL_Filtres.png")}/>
                </div>
                <IonPopover cssClass={'popover'} isOpen={showPopover} onDidDismiss={e => setShowPopover(false)}>
                    <IonRadioGroup className={'popupList'} value={selected} onIonChange={e => setSelected(e.detail.value)}>
                        <IonItem className={'IonItem1'}>
                            <IonLabel className={'labelFilter'}>Environement</IonLabel>
                            <IonRadio slot="start" value="Environement"/>
                        </IonItem>
                        <IonItem className={'IonItem2'}>
                            <IonLabel className={'labelFilter'}>Écologie</IonLabel>
                            <IonRadio slot="start" value="Écologie"/>
                        </IonItem>
                        <IonItem className={'IonItem3'}>
                            <IonLabel className={'labelFilter'}>Solidarité</IonLabel>
                            <IonRadio slot="start" value="Solidarité"/>
                        </IonItem>
                        <IonItem className={'IonItem4'}>
                            <IonLabel className={'labelFilter'}>Développement durable</IonLabel>
                            <IonRadio slot="start" value="Développement durable"/>
                        </IonItem>
                        <IonItem className={'IonItem5'}>
                            <IonLabel className={'labelFilter'}>Biodiversité</IonLabel>
                            <IonRadio slot="start" value="Biodiversité"/>
                        </IonItem>
                    </IonRadioGroup>
                    <div className={'containerValidButton'}>
                        <button ion-button className={'validButton'} onClick={e => setShowPopover(false)}>Valider</button>
                    </div>
                </IonPopover>
                <div className={'assoContainer'}>
                    <div className={'association'}>
                        <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                        <div className={'assoInfoContaine'}>
                            <h1 className={'assoName'}>GreenPeace</h1>
                            <button ion-button className={'assoButton'}>A propos</button>
                            <button ion-button className={'assoButton'}>Faire don</button>
                        </div>
                    </div>
                    <div className={'association'}>
                        <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                        <div className={'assoInfoContaine'}>
                            <h1 className={'assoName'}>GreenPeace</h1>
                            <button ion-button className={'assoButton'}>A propos</button>
                            <button ion-button className={'assoButton'}>Faire don</button>
                        </div>
                    </div>
                    <div className={'association'}>
                        <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                        <div className={'assoInfoContaine'}>
                            <h1 className={'assoName'}>GreenPeace</h1>
                            <button ion-button className={'assoButton'}>A propos</button>
                            <button ion-button className={'assoButton'}>Faire don</button>
                        </div>
                    </div>
                    <div className={'association'}>
                        <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                        <div className={'assoInfoContaine'}>
                            <h1 className={'assoName'}>GreenPeace</h1>
                            <button ion-button className={'assoButton'}>A propos</button>
                            <button ion-button className={'assoButton'}>Faire don</button>
                        </div>
                    </div>
                    <div className={'association'}>
                        <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                        <div className={'assoInfoContaine'}>
                            <h1 className={'assoName'}>GreenPeace</h1>
                            <button ion-button className={'assoButton'}>A propos</button>
                            <button ion-button className={'assoButton'}>Faire don</button>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Don;
