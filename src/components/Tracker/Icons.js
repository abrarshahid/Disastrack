import L from 'leaflet';
const Icons = () => {

    const fireIcon = new L.Icon({
        iconUrl:require('../../resources/fire.svg').default,
        iconSize:[25,35]
    });
    const stormIcon = new L.Icon({
        iconUrl:require('../../resources/storm.svg').default,
        iconSize:[25,35]
    });
    const volcanoIcon = new L.Icon({
        iconUrl:require('../../resources/volcano.svg').default,
        iconSize:[25,35]
    });
    const locationIcon = new L.Icon({
        iconUrl:require('../../resources/pin.svg').default,
        iconSize:[25,35]
    });
    return [fireIcon,stormIcon,volcanoIcon,locationIcon];
}

export default Icons;

