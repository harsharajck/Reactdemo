import React from 'react';
import styled from 'styled-components' 

const Container = styled.div`
background-color: cyan;
width: 1600px;
height: 250px;
.a{background-color:yellow;
color:green
height: 50;}
.d{background-color: blue;}


`


const Home_new = () => {
  return (<Container><div>Home_new</div>
  <div className="a">harsha</div>
  <div className="d">salman</div>
  </Container>
  )
}

export default Home_new