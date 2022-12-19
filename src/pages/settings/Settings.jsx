import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://i.pinimg.com/474x/07/76/02/077602df81a45f0fd53fd9da27dfc3f8.jpg" 
                    alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Oluwakemi"/>
                <label>Email</label>
                <input type="email" placeholder="oluwakemisobogun@gmail.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
