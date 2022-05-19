import { Link } from "react-router-dom"

function linkComponent(item) {
    
    return (
        <Link key={item.id} to={item.link}>- {item.title}</Link>
    )
}

function menuComponent(item) {

    const hasInMenu = item.inMenu ? true : false;
    const hasLink = item.link ? true : false;

    return (
        <div key={"_" + item.id}>
            {hasLink ? linkComponent(item) : (<div key={item.id}>{item.title}</div>)}
            {hasInMenu ? item.inMenu.map(menuComponent) : (<></>)}
        </div>
    )
}

export default ({ item }) => {
    
    return menuComponent(item);
}