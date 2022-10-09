import styled from 'styled-components'

import { Button } from '../stories/parallel/Button'

const ParallelWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Work+Sans:wght@400;500;700&display=swap');

  button {
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
      <h1>Default</h1>
      <h1 className="michroma">Michroma</h1>
      <h1 className="work-sans">Work Sans</h1>
      <Button label="Sign up Free"></Button>
    </ParallelWrapper>
  )
}

export default Parallel
