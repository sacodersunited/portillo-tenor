import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseAllCalendar from "../hooks/use-AllCalendar"
import CalendarItem from "../components/calendar-item"
import BackgroundSection from "../components/backgroundSection"
import { Container } from "react-bootstrap"
import { css } from "@emotion/react"
import UseBanner from "../hooks/use-Banner"
import { getImage } from "gatsby-plugin-image"

const Calendar = () => {
  const banner = UseBanner()
  const acclaimData = banner.filter(acclaim => acclaim.page === "calendar")
  const image = getImage(acclaimData[0].image)

  const calendarEvents = UseAllCalendar()
  const today = new Date()

  const futureEvents = calendarEvents
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .filter(event => today < new Date(event.endDate))

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
    .slice(0, 3) // Only keep the first 3 years

  const filteredPastEvents = pastEvents.filter(event => {
    const eventYear = new Date(event.startDate).getFullYear()
    return uniqueYears.includes(eventYear)
  })

  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor calendar of events, shows, productions" />
      <BackgroundSection
        image={image}
        Tag="section"
        title={acclaimData[0].title}
      />
      <Container>
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
          Upcoming Schedule
        </h2>
        {futureEvents.map(event => (
          <CalendarItem event={event} isCalendarPage key={event.id} />
        ))}
        <h2
          className="text-center text-uppercase h1"
          css={css`
            color: #2c3e50;
            font-family: "Merriweather", serif;
            font-size: 36px;
            font-weight: 400;
            line-height: 60px;
            text-transform: uppercase;
            margin-top: 48px;
            margin-bottom: 48px;
          `}
        >
          Past Performances
        </h2>

        {uniqueYears.map(year => (
          <React.Fragment key={year}>
            <div className="col-md-12">
              <h2 className="text-center calendar-page-h2-year font-weight-lighter mt-5 mb-5 display-4">
                {year}
              </h2>
            </div>
            {filteredPastEvents
              .filter(event => new Date(event.startDate).getFullYear() === year)
              .map(calEvent => (
                <CalendarItem
                  event={calEvent}
                  isCalendarPage
                  key={calEvent.id}
                />
              ))}
          </React.Fragment>
        ))}
      </Container>
    </Layout>
  )
}

export default Calendar
