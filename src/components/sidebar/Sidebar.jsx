import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/474x/07/76/02/077602df81a45f0fd53fd9da27dfc3f8.jpg"
            alt=""
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum veniam exercitationem aperiam adipisci, facere sed temporibus illo.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}
