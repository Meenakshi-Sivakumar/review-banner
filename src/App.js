import React, { useState } from 'react';
import reviews from './data';
import Review from './Review';

function App() {
  
  return (
    <main>
      <section className='container'>
        <Review />
      </section>
    </main>
  );
}

export default App;
