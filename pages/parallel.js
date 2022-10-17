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
  h1 {
    font-family: 'Michroma', sans-serif;
    margin: 0;
    padding: 0;
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
      <Header />
    </ParallelWrapper>
  )
}

const HeaderWrapper = styled.div`
  margin: 0 60px;
  h1 {
    font-size: 150px;
    line-height: 170px;
  }
  p {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="text-left">Land a job</h1>
      <h1 className="text-right">the easy way</h1>
      <p>
        The best place to discover & apply to the coolest start up jobs, without
        the black box.
      </p>
    </HeaderWrapper>
  )
}

export default Parallel
