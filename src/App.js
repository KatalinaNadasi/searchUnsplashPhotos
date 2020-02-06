import React, {useState} from 'react';
import './App.css';
import unsplash from './api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


function App() {

  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term },
    });
    setImages(response.data.results)
    console.log(response);
  }

  const wrapperStyle = {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }

  const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      width: '1270px',
      margin: '3rem auto',
      gridGap: '0 5px',
      gridAutoRows: '10px',
  }

  return (
    <div style={wrapperStyle}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
        <div style={containerStyle }>
          <ImageList images={images} />
        </div>
    </div>
  );
}

export default App;
