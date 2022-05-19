import Menu from "./Menu";

const menuList = [
    {
        title: "Tech",
        inMenu: [
            {
                title: "Java",
                link: "/tech/java",
                id: '0_0'
            },
            {
                title: "Javascript",
                link: "/tech/javascript",
                id: '0_1'
            },
        ],
        id: '0'
    },
    {
        title: "etc",
        id: '1',
    }
]

const Header = () => {
    let isOpen = true;

    const toggleSlideMenu = () => {
        document.getElementById('slider').setAttribute('aria-view', isOpen);
        isOpen = !isOpen;
    }

    return (
        <div className="header">
            <button onClick={toggleSlideMenu}>Menu</button>
            <div id="slider" className="sidebar">
                {menuList.map((menu, index) => (
                    <Menu key={"nav_" + index} item={menu}/>
                ))}
            </div>
        </div>
    )
}

export default Header;