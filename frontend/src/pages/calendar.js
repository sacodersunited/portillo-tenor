import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseAllCalendar from "../hooks/use-AllCalendar"
import Moment from "react-moment"

const Calendar = () => {
  const calendarEvents = UseAllCalendar()
  const currentYear = new Date().getFullYear()

  // console.log(`The year in our Lord ${currentYear}`)

  const today = new Date()
  const futureEvents = calendarEvents.filter(
    event => today < new Date(event.startDate)
  )

  return (
    <Layout>
      <SEO title="David Portillo tenor calendar of events, shows, productions " />
      <h1>Upcoming Events</h1>

      <h1>Past Perfomances</h1>
      <pre>{JSON.stringify(futureEvents, null, 2)}</pre>
    </Layout>
  )
}

export default Calendar
