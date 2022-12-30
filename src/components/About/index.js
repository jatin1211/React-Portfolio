import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
export default function About() {
    return (
        <div className="container-fluid m-0 p-2 lightGray">
            <div className="container mt-1 p-0 ">
                <Row className="d-flex flex-wrap justify-content-center p-3">
                    {/* HEADING */}
                    <Col xs={{ span: 10, order: 1 }} >
                        <h1 className='headingTitle mt-lg-5 text-center'>Hello, I'm Jatin</h1>
                    </Col>
                    {/* CONTENT */}
                    <Col xs={{ span: 10, order: 3 }} className='mt-5'>
                        <p className="lead">Full Stack Web Developer with proven experience as a maintenance engineer. Skills in HTML, CSS, JavaScript, React.js, RWD, and agile development. Passionate about solving problems and providing meaningful web applications with a mobile-first approach that improve the lives of those around me.
                         <br></br>Email: <a href = 'sainijatin247@gmail.com'>sainijatin247@gmail.com</a>
                        </p>
                    </Col>
                    {/* IMAGE/AVATAR */}
                    <Col xs={{ span: 10, order: 2 }} className=' d-flex justify-content-center'>
                        <img className='avatar' src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                            alt='Avatar' />
                    </Col>
                </Row>
            </div>
        </div >
    )
}