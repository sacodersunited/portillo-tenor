import { graphql, useStaticQuery } from "gatsby"

const UseCalendar = () => {
  const data = useStaticQuery(graphql`
    query {
      allCalendarYaml(limit: 3) {
        edges {
          node {
            id
            name
            link
            startDate(formatString: "MMM")
            location
            endDate
          }
        }
      }
    }
  `)

  return data.allCalendarYaml.edges.map(calendarEvent => ({
    id: calendarEvent.node.id,
    name: calendarEvent.node.name,
    link: calendarEvent.node.link,
    startDate: calendarEvent.node.startDate,
    endDate: calendarEvent.node.endDate,
    location: calendarEvent.node.location,
  }))
}

export default UseCalendar
