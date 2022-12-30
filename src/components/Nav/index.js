import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function MyNav(props) {

    // pass the nav tabs down from App so we can control what renders
    const {
        tabs = [],
        setCurrentView,
        currentView,
    } = props;
    // handles the nav link highlighting when the mouse is over the selection
    const changeButtonColor = (e, remove) => {
        const linkStyle = 'background-color: rgba(208, 121, 227, 0.767); border-radius: 5px;)';
        const target = e.target;
        remove ? target.matches('span') ?
            target.parentElement.style = '' :
            target.style = '' :
            target === 'span' ? target.parentElement.style = linkStyle :
                target.style = linkStyle
    }
    // NAV RETURN
    return (
        <Container fluid className='navBar'>
            <Navbar className={'d-flex flex-wrap justify-content-between p-3'}>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Navbar.Brand onClick={() => window.location.reload()} ><h1 className='navTitle '>Jatin Saini</h1> </Navbar.Brand>
                </div>
                <Nav className='d-flex flex-wrap justify-content-center'>
                    {tabs.map((tabs) => (
                        <Nav.Link
                            onPointerOver={(e) => { changeButtonColor(e) }}
                            onPointerOut={(e) => { changeButtonColor(e, true) }}
                            href={`#${tabs.name}`}
                            key={tabs.name}
                            className={`navLink text-white ${currentView.name === tabs.name && 'navActive pulse'}`}
                            onClick={() => { setCurrentView(tabs) }}
                        >{tabs.name}</Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </Container>
    );
}