import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import UseCalendar from "../hooks/use-AllCalendar"
import CalendarItem from "../components/calendar-item"
import { css } from "@emotion/core"

const HomeCalendar = () => {
  const today = new Date()
  const calendarEvents = UseCalendar()
  // filter events to only published and future events and limit 3
  const publishedEvents = calendarEvents
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .filter(event => event.isPublished && today < new Date(event.startDate))
    .slice(0, 3)

  return (
    <Container className="mt-5 mb-5">
      <h2
        className="text-center text-uppercase h1"
        css={css`
          color: #2c3e50;
          font-family: "Merriweather", serif;
          font-size: 36px;
          font-weight: 400;
          line-height: 60px;
          text-transform: uppercase;
          margin-top: 0;
          margin-bottom: 48px;
        `}
      >
        Upcoming Performances
      </h2>
      {publishedEvents ? (
        publishedEvents.map(event => <CalendarItem event={event} />)
      ) : (
        <p className="text-muted">No Events. Please check back soon.</p>
      )}
      <Link className="text-center d-block h4" to="/calendar">
        View Calendar
        <FaChevronRight />
      </Link>
    </Container>
  )
}

export default HomeCalendar
