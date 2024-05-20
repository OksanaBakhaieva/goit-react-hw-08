import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundPage}>
        <PageTitle>Page not found</PageTitle>
        <p className={css.infoMessage}>
        Sorry, the page you visited does not exist!
        </p>
        <button className={css.backHome}>
            <Link to="/">Back home</Link>
        </button>
    </div>
  );
};
