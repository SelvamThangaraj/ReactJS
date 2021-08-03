import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CourseData = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.data.course}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.instructor}</CardSubtitle>         
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

  export default CourseData;