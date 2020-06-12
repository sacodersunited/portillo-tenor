import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const CalendarItem = ({ event, isCalendarPage }) => {
  const today = new Date()

  return (
    <Row key={event.id}>
      <Col>
        <p>{event.startDate}</p>
        <hr />
        <p>{event.city}</p>
      </Col>
      <Col>
        <p>{event.title}</p>
        {isCalendarPage && <p>as {event.role}</p>}
      </Col>
      <Col>
        {today < new Date(event.endDate) && (
          <a href={event.link} target="_blank" rel="noreferrer">
            <Button variant="outline-primary">Tickets</Button>
          </a>
        )}
      </Col>
    </Row>
  )
}

export default CalendarItem
