import React from 'react';
import { useParams } from 'react-router-dom';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from '../../content_option';

export const Single = () => {
    const { id } = useParams(); // Get the ID from the URL
    const item = dataportfolio[id]; // Find the corresponding portfolio item by index

    if (!item) {
        return <div>Project not found</div>;
    }

    return (
        <HelmetProvider>
            <Container className="Single-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{item.description} | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Details</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <img src={item.img} alt={item.description} style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                    
                        <div>
                        <h1 className="display-4 mb-4">{item.title}</h1>
                            <p>{item.description}</p>
                            <hr></hr>
                            <span>Designer: {item.Designer} <br></br>Category: {item.Category}</span>  
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
