import Container from "../../common/Container"
import MainHeader from "../../common/MainHeader"
import Section from "../../common/Section"

const About = () => {
  return (
    <Container>
      <MainHeader title="O projekcie" />
      <Section
        title="Opis"
        body="Prosta lista zadań w React.js"
      />
      <Section
        title="Technologie i konwencje"
        body="CSS-Flexbox, CSS-Grid, Immutability, LocalStorage, useState, useEffect, useRef, custom hooks, styled components, redux, redux-saga"
      />
    </Container>
  )
}

export default About