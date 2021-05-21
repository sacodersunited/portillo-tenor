import React from "react"
import { Row, Col } from "react-bootstrap"
import Moment from "react-moment"
import { css, cx } from "@emotion/react"

const CalendarItem = ({ event, isCalendarPage }) => {
  const today = new Date()
  console.log("calender item", event)
  return (
    <Row className="mb-4" key={event.id}>
      <Col md={{ span: 2, offset: 2 }}>
        <h4
          className="text-center"
          css={css`
            color: #2c3e50;
            font-family: "Open Sans", sans-serif;
            font-size: 22px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 5px;
          `}
        >
          <Moment format="MMM DD">{event.startDate}</Moment>
        </h4>
        <hr
          className="mt-0 mb-1"
          css={css`
            width: 39px;
            background-color: #e58e1a;
            border: 1px solid #e58e1a;
          `}
        />
        <h5
          className="text-center"
          css={css`
            color: #2c3e50;
            font-family: "Open Sans", sans-serif;
            font-size: 19px;
            font-weight: 700;
          `}
        >
          {event.city}
        </h5>
      </Col>
      <Col className="text-center" md={4}>
        <h4
          css={css`
            color: #2c3e50;
            font-family: "Open Sans", sans-serif;
            font-size: 32px;
            font-weight: 600;
            font-style: italic;
            text-transform: uppercase;
            margin-top: 0;
          `}
          className="text-center"
        >
          {event.title}
        </h4>
        {isCalendarPage && (
          <p
            css={css`
              color: #2c3e50;
              font-family: "Merriweather", serif;
              font-size: 18px;
              font-weight: 200;
            `}
          >
            as {event.role}
          </p>
        )}
      </Col>
      <Col md={{ span: 2, offset: 1 }}>
        {today < new Date(event.endDate) && (
          <a
            className="btn btn-outline-primary btn-lg btn-block"
            href={event.link}
            target="_blank"
            rel="noreferrer"
          >
            Tickets
          </a>
        )}
      </Col>
    </Row>
    // </>
  )
}

export default CalendarItem
