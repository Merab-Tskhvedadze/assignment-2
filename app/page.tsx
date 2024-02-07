'use client'
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from './global-redux/features/test/testSlice'

const Home = () => {
  const count = useSelector((state) => state.test.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
