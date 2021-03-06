import { graphql, useStaticQuery } from "gatsby"

const UseAllCalendar = () => {
  const data = useStaticQuery(graphql`
    query AllEvents {
      allStrapiEvent(
        sort: { order: DESC, fields: start_date }
        filter: { published: { eq: true } }
      ) {
        edges {
          node {
            strapiId
            published
            type
            title
            role
            start_date
            end_date
            opera_house
            city
            state_country
            link
          }
        }
      }
    }
  `)
  return data.allStrapiEvent.edges.map(calendarEvent => ({
    id: calendarEvent.node.strapiId,
    isPublished: calendarEvent.node.published,
    type: calendarEvent.node.type,
    title: calendarEvent.node.title,
    role: calendarEvent.node.role,
    startDate: calendarEvent.node.start_date,
    endDate: calendarEvent.node.end_date,
    operaHouse: calendarEvent.node.opera_house,
    city: calendarEvent.node.city,
    stateCountry: calendarEvent.node.state_country,
    link: calendarEvent.node.link,
  }))
}

export default UseAllCalendar
