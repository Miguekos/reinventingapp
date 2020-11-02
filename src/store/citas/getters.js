import { date } from 'quasar'

let timeStamp = Date.now()

export function getCitas(state) {
  // co_citope: 15
  // co_docide: "44826152"
  // co_marveh: "31"
  // co_modveh: "367"
  // co_plaveh: "ABQ077"
  // co_tipope: "1"
  // fe_progra: "2020-08-24 17:00:00"
  // no_colveh: "NEGRO"
  // no_estcit: "Pendiente"
  // no_marveh: "HYUNDAI"
  // no_modveh: "TUCSON"
  // no_person: "Bobadilla Jose Luis"
  // no_tipope: "Conversión GNV"
  // nu_telefo: "965763028"
  // ti_estcit: "1"
  let data = [];
  // console.log(formattedString);
  for (let index = 0; index < state.getCitas.length; index++) {
    const element = state.getCitas[index];
    // console.log(element);
    const json = {
      id: index,
      summary: `${element.no_tipope}`,
      description: element.no_tipope,
      location: "Oficina de los olivos",
      start: {
        dateTime: date.formatDate(element.fe_progra, 'YYYY-MM-DDTHH:mm:ss'),
        timeZone: "America/Lima"
      },
      end: {
        dateTime: date.formatDate(element.fe_progra, 'YYYY-MM-DDTHH:mm:ss'),
        timeZone: "America/Lima"
      },
      color: "orange",
      attendees: [
        {
          id: index,
          auto: element.no_marveh,
          // email: "baldeonbenja@reinventing.com.pe",
          displayName: element.no_person,
          organizer: false,
          self: false,
          resource: false
        }
      ]
    }
    data.push(json)

  }
  // console.log(data);
  return data;
  // return state.getCitas;
}

export function getCitasFilter(state) {
  return state.getCitasFilter;
}

export function callAddCitas(state) {
  return state.getCitas;
}
