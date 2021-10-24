import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStarships } from '../../store/starships/starships-reducer';
import Table from '../table/table';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNews = async () => {
      const {data} = await axios({
        method: `get`,
        url: `http://swapi.dev/api/vehicles`
      })

      dispatch(setStarships(data.results))
    }
    getNews();
  }, [])

  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
