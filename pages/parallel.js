import styled from 'styled-components'

import { Button } from '../components/parallel/Button/Button'
import { Navbar } from '../components/parallel/Navbar/Navbar'

const ParallelWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Work+Sans:wght@400;500;700&display=swap');

  button {
    font-family: 'Work Sans', sans-serif;
  }
  a {
    font-family: 'Work Sans', sans-serif;
  }

  .michroma {
    font-family: 'Michroma', sans-serif;
  }
  .work-sans {
    font-family: 'Work Sans', sans-serif;
  }
`

const Parallel = () => {
  return (
    <ParallelWrapper>
      <Navbar />
      <h1>Default</h1>
      <Button label="Sign up Free"></Button>
    </ParallelWrapper>
  )
}

export default Parallel
