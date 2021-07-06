import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumboTitle = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">{props.date}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumboTitle;