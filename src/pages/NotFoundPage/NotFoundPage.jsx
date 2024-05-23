import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundPage}>
        <title className={css.title}>Page not found</title>
        <p className={css.infoMessage}>
        Sorry, the page you visited does not exist!
        </p>
        <button className={css.goBackBtn}>
            <Link to="/">Back home</Link>
        </button>
    </div>
  );
};
