import './Header.scss'
/* eslint-disable react/prop-types */

function Header({ appName }) {

    return (
      <>
        <div className="header">
            <div className="container">
                <div className="header-side">
                    <h1>
                        {appName}
                    </h1>
                </div>
                <div className="header-side">
                    <button className="btn secondary">+ Add To-Do</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Header