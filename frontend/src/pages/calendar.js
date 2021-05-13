import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseAllCalendar from "../hooks/use-AllCalendar"
import Moment from "react-moment"
import CalendarItem from "../components/calendar-item"
import { FaToiletPaper } from "react-icons/fa"

const Calendar = () => {
  // TODO: Group by Year
  const calendarEvents = UseAllCalendar()
  const today = new Date()

  const futureEvents = calendarEvents
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .filter(event => today < new Date(event.startDate))

  const pastEvents = calendarEvents
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .filter(event => today > new Date(event.endDate))

  const uniqueYears = pastEvents
    .reduce((total, event) => {
      const newEndDate = new Date(event.endDate)
      total.push(newEndDate.getFullYear())
      return total
    }, [])
    .filter((item, i, ar) => ar.indexOf(item) === i)

  return (
    <Layout>
      <SEO title="David Portillo tenor calendar of events, shows, productions " />
      <h1>Upcoming Schedule</h1>
      {futureEvents.map(event => (
        <CalendarItem event={event} isCalendarPage />
      ))}
      <h1>Past Perfomances</h1>
      {uniqueYears.length > 0 ? (
        <div class="col-md-12">
          <h2 class="text-center calendar-page-h2-year">{uniqueYears[0]}</h2>
        </div>
      ) : null}
      {uniqueYears.length > 0
        ? pastEvents
            .filter(event => {
              const newEndDate = new Date(event.endDate).getFullYear()
              if (newEndDate === uniqueYears[0]) {
                return event
              }
              return null
            })
            .map(calEvent => <CalendarItem event={calEvent} isCalendarPage />)
        : null}

      {uniqueYears.length > 1 ? (
        <div class="col-md-12">
          <h2 class="text-center calendar-page-h2-year">{uniqueYears[1]}</h2>
        </div>
      ) : null}

      {uniqueYears.length > 1
        ? pastEvents
            .filter(event => {
              const newEndDate = new Date(event.endDate).getFullYear()
              if (newEndDate === uniqueYears[1]) {
                return event
              }
              return null
            })
            .map(calEvent => <CalendarItem event={calEvent} isCalendarPage />)
        : null}
    </Layout>
  )
}

export default Calendar
