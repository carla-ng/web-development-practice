import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div style={{ margin: '1rem'}}>
            <h1>404 Not Found</h1>
            <Link to="/">Go to Homepage</Link>
        </div>       
    )
}

export default NotFoundPage
