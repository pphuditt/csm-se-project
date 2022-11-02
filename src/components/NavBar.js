import "../css/NavBar.css"
// import { ReactComponent as YourSvg } from '../statics/images/Untitled-1.svg';
import { ReactComponent as UserSvg } from '../statics/user.svg';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="user-button">
                <div className="user-icon">
                    <UserSvg />
                </div>
            </div>
        </div>
    );
}

export default NavBar;