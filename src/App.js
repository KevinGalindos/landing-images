import { useEffect, useState } from 'react'

import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Gallery } from './components/Gallery'
import { IconViews } from "./components/IconViews";
import { SeeMore } from "./components/SeeMore";
import { Footer } from './components/Footer';

import useFetch from "./@common/hooks/useFetch";

const App = () => {
  const [page, setPage] = useState(1);
  const { loading, result } = useFetch({ url: `photos?page=${page}` });
  const [data, setData] = useState([]);
  
  const onClickSeeMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if(!loading){
      setData([...data, ...result])
    }
  },[loading, result]);

  console.log(data)
  return loading? <Loading />:  (
    <div className="App">
      <Header />
      <Banner />
      <IconViews />
      <Gallery data={data} />
      <SeeMore functionOnCLick={onClickSeeMore}/>
      <Footer/>
    </div>
  );
};

export default App;
