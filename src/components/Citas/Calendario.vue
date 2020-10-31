<template>
  <div class="q-pa-md">
    <DaykeepCalendar
      :event-array="eventArray"
      :tab-labels="labelsCalendar"
      :sunday-first-day-of-week="true"
      calendar-locale="es"
      calendar-timezone="America/Lima"
      :allow-editing="false"
      :render-html="true"
    />
    <!--    <div class="q-gutter-md">-->
    <!--      <q-date-->
    <!--        class="full-width"-->
    <!--        v-model="date"-->
    <!--        :events="events"-->
    <!--        :event-color="date => (date[9] % 2 === 0 ? 'teal' : 'orange')"-->
    <!--      />-->

    <!--      <q-date-->
    <!--        class="full-width"-->
    <!--        v-model="date"-->
    <!--        :events="eventsFn"-->
    <!--        :event-color="date => (date[9] % 2 === 0 ? 'teal' : 'orange')"-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>

<script>
import {
  DaykeepCalendar,
  DaykeepCalendarMonth,
  DaykeepCalendarAgenda,
  DaykeepCalendarMultiDay
} from "@daykeep/calendar-quasar";
export default {
  name: "Calendario",
  components: {
    DaykeepCalendar,
    DaykeepCalendarMonth,
    DaykeepCalendarAgenda,
    DaykeepCalendarMultiDay
  },
  data() {
    return {
      date: "2019/02/01",
      labelsCalendar: {
        month: "MES",
        week: "SEMANA",
        threeDay: "3 DIAS",
        day: "DIA",
        agenda: "AGENDA"
      },
      eventArray: [
        {
          id: 1,
          summary: "Auto de Benja",
          description: "Cambio de Llanta",
          location: "Oficina de los olivos",
          start: {
            dateTime: "2020-10-16T14:00:00",
            timeZone: "America/Lima"
          },
          end: {
            dateTime: "2020-10-16T14:00:00",
            timeZone: "America/Lima"
          },
          color: "positive",
          attendees: [
            {
              id: 1,
              email: "baldeonbenja@reinventing.com.pe",
              displayName: "Benjamin Baldeon",
              organizer: false,
              self: false,
              resource: false
            }
          ]
        },
        {
          id: 2,
          summary: "Pinche Chamo",
          description: "LLantas nuevas",
          color: "orange",
          start: {
            dateTime: "2020-10-31T18:51:00",
            timeZone: "America/Lima"
          },
          end: {
            dateTime: "2020-10-31T18:55:00",
            timeZone: "America/Lima"
          }
        },
        {
          id: 3,
          summary: "Pinche Boba",
          description: "Rompio el motor",
          start: {
            dateTime: "2020-10-16T17:30:00",
            timeZone: "America/Lima"
          },
          end: {
            dateTime: "2020-10-16T17:30:00",
            timeZone: "America/Lima"
          }
        }
      ]
    };
  },

  methods: {},
  async created() {
    this.$q.$on("click-day-MYCALENDAR", function(day) {
      // do something here
      console.log("Evento DAY");
    });
    this.$root.$on("click-event-MYCALENDAR", function(eventDetailObject) {
      // do something here
      console.log("Evento DAY eventDetailObject");
    });
    this.q.$on("click-event-MYCALENDAR", function(eventDetailObject) {
      // do something here
      console.log("Evento DAY eventDetailObject");
    });
  }
};
</script>

<style scoped></style>
