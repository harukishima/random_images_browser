import { useState } from 'react';
import './App.css';
import Header from './Header';
import loli from './api/setup';
import PhotoAlbum from './PhotoAlbum';

interface PhotoItem {
  num: string;
  function: string;
  url: string[];
}

export interface PhotoQuery {
  num: number;
  r18: boolean;
}

interface ApiPayload {
  code: string;
  message: string;
  time: number;
  version: string;
  data: PhotoItem;
}

const PhotoFetcher = async (query: PhotoQuery) => {
  const res = await loli.get('/', {
    params: query,
  });
  const data: ApiPayload = res.data;
  return data.data;
};

function App() {
  const [images, setImages] = useState<string[]>([]);

  const PhotoRenderer = async (query: PhotoQuery) => {
    setImages([]);
    const data = await PhotoFetcher(query);
    setImages(data.url);
  };

  return (
    <div>
      <Header callback={PhotoRenderer} />
      <PhotoAlbum images={images} />
    </div>
  );
}

export default App;
