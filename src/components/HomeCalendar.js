import React from "react"
import { Container } from "react-bootstrap"
import UseCalendar from "../hooks/use-Calendar"
import { Row, Col, Button } from "react-bootstrap"

const HomeCalendar = () => {
  const calendarEvents = UseCalendar()

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center text-uppercase">Upcoming Performances</h2>
      {calendarEvents.map(event => (
        <Row>
          <Col>
            <p>{event.startDate}</p>
            <hr />
            <p>{event.location}</p>
          </Col>
          <Col>
            <p>{event.name}</p>
          </Col>
          <Col>
            <a href={event.link}>
              <Button>Tickets</Button>
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default HomeCalendar
