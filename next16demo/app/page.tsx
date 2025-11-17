import React from 'react' // this is not required for next js

const Home = () => {
  console.log('component type') // this will log on the server side, but next16 will indicate what type of componnent this is
  return (
    <div>hey</div>
  )
}

export default Home