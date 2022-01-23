import { useParams, useHistory } from 'react-router-dom';

const Movie = () => {
    const { title } = useParams();
    const { goBack } = useHistory();

    return (
        <>
            <h1>Movie {title}</h1>
            <button className='btn' onClick={goBack}>go back</button>
        </>
    );
};

export default Movie;