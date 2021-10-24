import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStarships } from '../../store/starships/starships-reducer';
import Table from '../table/table';

const App = () => {
  const dispatch = useDispatch();
  const starships = useSelector(({ starships }) => starships.starships);


  useEffect(() => {
    if (!starships) {
      const getNews = async () => {
        const { data } = await axios({
          method: `get`,
          url: `http://swapi.dev/api/vehicles`
        })

        dispatch(setStarships(data.results))
      }

      getNews();
    }
  }, [starships])

  return (
    <div className="app">
      {
        starships
          ? <Table starships={starships} />
          : <div>loading...</div>
      }

    </div>
  );
}

export default App;
