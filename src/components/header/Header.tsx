import "./header.css"
const Header = () => {
    return (
        <section className="header">
            <div className="left">
                <span><img src="./images/screw.png" alt="" /></span>
                <h2>Wrench CRM</h2>
            </div>
            <div className="right">
                <span><img src="./images/user.png" alt="" /></span>
                <h2>Имя Фамилия</h2>
            </div>
        </section>
    );
}
 
export default Header;