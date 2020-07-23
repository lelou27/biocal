import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonPage,
    IonImg,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonPopover,
    IonButton,
    IonRadio, IonList, IonRadioGroup, IonListHeader, IonItemDivider, IonSearchbar, IonText
} from '@ionic/react';
import './Don.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {useRouteMatch} from "react-router";
import {getAssociation} from "../../services/AssociationService";


const Don: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [selected, setSelected] = useState<string>('');
    const [searchText, setSearchText] = useState('');
    const [associations, setAssociations] = useState<any>([]);

    useEffect(() => {
        if (selected === '') {
            getAssociationLocal();
        }
    });

    const getAssoFiltered = async () =>{
        const assoFiltered: any[] = [];

        setShowPopover(false);
        setAssociations([]);

        const assos = await getAssociation();
        setAssociations(assos);

        if (selected !== ''){
            for (const asso of associations){
                for (const tag of asso.tags) {
                    if (tag === selected && !assoFiltered.includes(asso)){
                        assoFiltered.push(asso);
                    }
                }
            }

            setAssociations(assoFiltered);
        }
    }

    const getAssociationLocal = async () => {
      try {
          if (associations.length === 0) {
              const assos = await getAssociation();
              setAssociations(assos);
          }
      } catch (e) {
          setAssociations(e);
      }
    };

    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <div className={'searchContainer'}>
                    <IonSearchbar
                        className={'searchField'}
                        value={searchText}
                        onIonChange={e => setSearchText(e.detail.value!)}>
                    </IonSearchbar>
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
                        <button ion-button className={'validButton'} onClick={async () => await getAssoFiltered()}>Valider</button>
                    </div>
                </IonPopover>
                <div className={'assoContainer'}>
                    { associations.map((asso: any) => {
                        return (
                            <div className={'association'}>
                                <IonImg className={'imgAsso'} src={require("../../assets/images/Greenpeace-logo-1.jpg")}/>
                                <div className={'assoInfoContaine'}>
                                    <h1 className={'assoName'}>{asso.name}</h1>
                                    <IonButton className={'assoButton'} href={'/Apropos'}>A propos</IonButton>
                                    <IonButton className={'assoButton'} href={'FaireDon'}>Faire don</IonButton>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Don;
