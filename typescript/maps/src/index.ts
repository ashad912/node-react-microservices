import { User } from './User'
import createCompany from './Company'
import customMapFactory from './CustomMap'
import faker from 'faker'

const company = createCompany({ faker })
//const company = new Company({faker})
const user = new User()

const customMap = customMapFactory({
    mapCreator: google.maps.Map,
    markerCreator: google.maps.Marker,
    infoWindowCreator: google.maps.InfoWindow,
    element: document.querySelector('#map'),
})

customMap.addMarker(user)
customMap.addMarker(company)

