import { useState, useEffect } from "react"
import { Heading } from "@chakra-ui/react"
import { LauchItem } from "./components/LauchItem"
import * as API from "./services/launches"

export function App() {
  
  const[launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
      <section>
        {
          launches.map(launch => (
            <LauchItem key={launch.flight_number} {...launch}/>
          ))
        }
      </section>
    </>
  )
}
