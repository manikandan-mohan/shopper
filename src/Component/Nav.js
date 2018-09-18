import React from 'react';
import './Cart/CartPage.css'
import TotalPrice from './TotalPrice/TotalPrice'


// const Nav = ({ items, activeTab, onTabChange }) => (
function Nav({ items, activeTab, onTabChange }) {
    
    return (<div>
        <nav className="App-nav">
            <ul>
                <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                    <NavLink index={0} onClick={onTabChange}>Items</NavLink>
                </li>
                <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                    <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
                </li>             
            </ul>
            <TotalPrice className='default-message' items={items}/>
        </nav>
    </div>)
}

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }
    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

export default Nav;
