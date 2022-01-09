import React, { useState, useEffect } from 'react';
import {
    Row, Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Button, Spinner
} from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useGeolocation } from 'react-use';

import { baseURL } from '../../constants/defaultValues';
import axios from 'axios';



const containerStyle = {
    width: '100%',
    height: '560px'
}

    ;

const BlankPage = ({ match }) => {




    const [infoWindowPos, setInfoWindowPos] = useState({ lat: 0, lng: 0, title: '', show: false });
    const [modalOpen, setModalOpen] = useState(false)
    const [centerPos, setCenterPos] = useState({ latitude: null, longitude: null })


    const getCentrePosition = () => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            let obj = { latitude: position.coords.latitude, longitude: position.coords.longitude }
            setCenterPos({ ...obj })
        }, (error) => {
            console.log(error);
        }, { enableHighAccuracy: true })
    }





    useEffect(() => {
        if (centerPos.latitude == null) {
            getCentrePosition();
        }
        setInfoWindowPos(infoWindowPos);
        setModalOpen(modalOpen)
    }, [infoWindowPos, modalOpen, centerPos])

    const getDestinations = () => {
        // return axios.post(`${baseURL}/authenticate`, {
        //     username: username,
        //     password: password
        // });
        return [{ "lat": 22.395582, "lon": 87.741882, "name": "Toilet 1", "condition": 1 }, { "lat": 29.372442, "lon": 78.135849, "name": "Toilet 2", "condition": 0 }, { "lat": 30.483997, "lon": 76.593948, "name": "Toilet 3", "condition": 1 }, { "lat": 22.762886, "lon": 78.352478, "name": "Toilet 4", "condition": 0 }, { "lat": 26.469999, "lon": 79.519997, "name": "Toilet 5", "condition": 1 }, { "lat": 28.68, "lon": 76.919998, "name": "Toilet 6", "condition": 0 }, { "lat": 11.191447, "lon": 77.268883, "name": "Toilet 7", "condition": 0 }, { "lat": 29.962072, "lon": 76.817825, "name": "Toilet 8", "condition": 1 }]


    }

    const submitClick = () => {
        console.log(infoWindowPos);
        window.launchnavigator.navigate([infoWindowPos.lat, infoWindowPos.lng], {})
        setModalOpen(false);
    }

    return (
        <>

            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="pages.navigation-modal-title" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Row>
                <Colxx xxs="12" className="mb-4">
                    {/* <p>
            <IntlMessages id="menu.blank-page" />
          </p> */}
                    {console.log(centerPos)}
                    {centerPos.latitude != null && centerPos.longitude != null ? <LoadScript
                        googleMapsApiKey="AIzaSyAmkTKsh4HFFl8aZ7AkhSGg9OdpDCRavHM"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: centerPos.latitude, lng: centerPos.longitude }}
                            zoom={10}
                            options={{ fullscreenControl: false, streetViewControl: false, rotateControl: false, mapTypeControl: false }}
                        >

                            <Marker
                                position={{ lat: centerPos.latitude, lng: centerPos.longitude }}

                            />
                            {getDestinations().map(item => {
                                return <Marker
                                    position={{ lat: item.lat, lng: item.lon }}
                                    title={item.name}
                                    key={`${item.name}_marker`}
                                    icon={item.condition == 1 ? './assets/img/navigation/location_pin_clean_green.png' : './assets/img/navigation/location_pin_dirty_red.png'}
                                    onClick={e => {
                                        setModalOpen(true)
                                        setInfoWindowPos({ lat: item.lat, lng: item.lon, title: item.name, show: false })

                                    }}
                                    onDblClick={e => {
                                        setModalOpen(true)
                                    }}
                                />
                            })}
                            {/* {infoWindowPos.show ? <InfoWindow position={{ lat: infoWindowPos.lat, lng: infoWindowPos.lng }} onCloseClick={() => { setInfoWindowPos({ show: false }) }}>
                                <div >
                                    <h1>{infoWindowPos.title}</h1>
                                </div>
                            </InfoWindow> : null} */}

                        </GoogleMap>
                    </LoadScript> : <Spinner color="primary" />}
                </Colxx>
            </Row>
            <Modal
                isOpen={modalOpen}

                wrapClassName="modal-sm"
                backdrop="static"
            >
                <ModalHeader>
                    <IntlMessages id="pages.navigation-modal-title" />
                </ModalHeader>
                <ModalBody>
                    <IntlMessages id="pages.navigation-modal-header" />
                    {`${infoWindowPos.title}?`}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" outline onClick={() => { setModalOpen(false) }}>
                        <IntlMessages id="pages.cancel" />
                    </Button>
                    <Button color="primary" onClick={() => { submitClick() }}>
                        <IntlMessages id="pages.submit" />
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    );
};

export default BlankPage;
