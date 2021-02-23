import React from 'react';
import Heading from './Heading';
import Card from './Card';
import Footer from './Footer';

function App(){
  return(
    <div>
      <Heading />
      <Card
        name="Paramount Mountains"
        img="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png"
        email="mountains@gmail.com" 
      />
      <Footer />
    </div>
  )
}

export default App;
