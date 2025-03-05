import { NavLink } from "react-router-dom";
import MyNavbar from "../../components/navbar/navbar";
import './article.css'
import { Link , Outlet } from "react-router-dom";
function Article(){

    return(
        <div className="articleWrapper">
    <MyNavbar />
    <h1>صفحه مقالات</h1>
    <hr />

    <div className="btnContainer ">
        <Link  to="/article/php" className='linkBtn'>php Article</Link>
        <Link to="/article/javascript" className="linkBtn">javascript article</Link>
        <Link to="/article/react" className="linkBtn">react article</Link>
    </div>
    <hr />

<Outlet />

</div>
    );
}

export default Article;