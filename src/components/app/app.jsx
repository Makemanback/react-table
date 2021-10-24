import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsList, setStarships } from '../../store/starships/starships-reducer';
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

        const { results } = data
        dispatch(setStarships(results));

        let cargo_capacity = [];
        let cost_in_credits = [];
        let max_atmosphering_speed = [];
        let name = [];

        for (const starship of results) {
          cargo_capacity.push({
            url: starship.url,
            value: starship.cargo_capacity
          })
          cost_in_credits.push({
            url: starship.url,
            value: starship.cost_in_credits
          })
          max_atmosphering_speed.push({
            url: starship.url,
            value: starship.max_atmosphering_speed
          })
          name.push({
            url: starship.url,
            value: starship.name
          })
        };

        dispatch(setItemsList({ listName: `cargo_capacity`, list: cargo_capacity }))
        dispatch(setItemsList({ listName: `cost_in_credits`, list: cost_in_credits }))
        dispatch(setItemsList({ listName: `max_atmosphering_speed`, list: max_atmosphering_speed }))
        dispatch(setItemsList({ listName: `name`, list: name }))
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
