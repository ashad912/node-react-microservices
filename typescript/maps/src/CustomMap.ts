
export default function customMapFactory({ mapCreator, markerCreator, infoWindowCreator, element }: MapFactory): ICustomMap {


    const googleMap = new mapCreator(element, {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0,
        }
    })

    return Object.freeze({
        addMarker
    })

    function addMarker(mappable: Mappable): void {

        const marker = createMarker()
        const infoWindow = createInfoWindow()

        registerInfoWindowClickListener()


        function createMarker(): Marker {
            return new markerCreator({
                map: googleMap,
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }
            })
        }

        function createInfoWindow(): InfoWindow {
            return new infoWindowCreator({
                content: mappable.markerContent()
            })
        }

        function registerInfoWindowClickListener(): void {
            marker.addListener('click', onClickHandler)

            function onClickHandler() {
                infoWindow.open(googleMap, marker)
            }
        }

        type Marker = {
            addListener(event: string, cb: Function): void;
        }

        type InfoWindow = {
            open(googleMap: object, marker: Marker): void;
        }

    }
}

type MapFactory = {
    mapCreator: MapClass;
    markerCreator: { new(opts?: object) };
    infoWindowCreator: { new(opts?: object) }
    element: HTMLElement
}

type MapClass = { new(mapDiv: Element, opts?: MapOptions) }

type MapOptions = {
    zoom: number,
    center: {
        lat: number,
        lng: number,
    }
}

export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}


export interface ICustomMap {
    addMarker(mappable: Mappable): void;
}
