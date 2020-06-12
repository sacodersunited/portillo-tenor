import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseAllCalendar from "../hooks/use-AllCalendar"
import Moment from "react-moment"
import CalendarItem from "../components/calendar-item"

const Calendar = () => {
  const calendarEvents = UseAllCalendar()
  const currentYear = new Date().getFullYear()

  // console.log(`The year in our Lord ${currentYear}`)

  const today = new Date()

  const futureEvents = calendarEvents
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .filter(event => today < new Date(event.startDate))

  const pastEvents = calendarEvents
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .filter(event => today > new Date(event.endDate))

  return (
    <Layout>
      <SEO title="David Portillo tenor calendar of events, shows, productions " />
      <h1>Upcoming Schedule</h1>
      {futureEvents.map(event => (
        <CalendarItem event={event} isCalendarPage />
      ))}
      <h1>Past Perfomances</h1>
      {pastEvents.map(event => (
        <CalendarItem event={event} isCalendarPage />
      ))}
      {/* <pre>{JSON.stringify(futureEvents, null, 2)}</pre> */}
    </Layout>
  )
}

export default Calendar
