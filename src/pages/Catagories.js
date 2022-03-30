import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/catagories/categories';
import classes from './Catagories.module.css';

const Catagories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.catagories);

  const handleCategoryCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className={classes.catagories}>
      <button
        onClick={handleCategoryCheckStatus}
        type="button"
        className={classes.button}
      >
        Check status
      </button>
      <h2>{status}</h2>
    </div>
  );
};

export default Catagories;
