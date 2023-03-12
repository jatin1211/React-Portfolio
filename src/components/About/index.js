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
                        <p className="lead">I am a software developer with a passion for creating high-quality software solutions. I'm proficient in HTML, CSS, JavaScript, jQuery, Python, Bootstrap, Tailwind, JSON, AJAX, REST API, Handlebars, React.js, Node.js, Express, MySQL, MongoDB, User authenctication. I also have basic knowledge of AWS development.
Throughout my academic and professional experiences, I have gained a strong understanding of software development best practices, 
including agile methodologies and version control with Git. I have also worked on various projects, including a stocks dashboard application for 
managing stocks baskets with social interaction and a habit tracker app for tracking exercise routines and blog content.<p>

</p>

I am currently seeking opportunities to work as a full-time, part-time, contract jobs . I am eager 
to apply my skills and knowledge to contribute to innovative and challenging projects. Please feel free to contact me to discuss 
potential collaborations or opportunities.
                         <br></br>Email: <a href = 'mailto:sainijatin247@gmail.com'>sainijatin247@gmail.com</a>
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