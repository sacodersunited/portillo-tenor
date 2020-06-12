import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import UseCalendar from "../hooks/use-AllCalendar"
import CalendarItem from "../components/calendar-item"

const HomeCalendar = () => {
  const today = new Date()
  const calendarEvents = UseCalendar()
  // filter events to only published and future events and limit 3
  const publishedEvents = calendarEvents
    .filter(event => event.isPublished && today < new Date(event.startDate))
    .slice(0, 2)

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center text-uppercase h1">Upcoming Performances</h2>
      {publishedEvents.map(event => (
        <CalendarItem event={event} />
      ))}
      <Link className="text-center d-block h4" to="/calendar">
        View Calendar
        <FaChevronRight />
      </Link>
    </Container>
  )
}

export default HomeCalendar
