import React, { useContext } from 'react';
import Context from '../utils/context';


const Home = () => {
  const context = useContext(Context)
  
  return (
    <div>
      <RenderWelcomeMessage profile={context.authObj.userProfile}/>
    </div>
  ) 
};

function RenderWelcomeMessage(props) {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Home;
