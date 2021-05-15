import "./App.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  yup,
} from "react-bootstrap/";

export default function App() {
  return (
    <div style={{ backgroundColor: "#ACC4E8" }}>
      <Container>
        <Row
          className="align-items-center"
          style={{ backgroundColor: "#ACC4E8", height: "100vh" }}
        >
          <Col
            className="col-12 rounded"
            style={{ backgroundColor: "#ACDDE7" }}
          >
            <Form className="">
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>

                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Label>Teacher 1</Form.Label>

                  <Form.Control placeholder="Teacher 1" />
                </Col>
                <Col>
                  <Form.Label>Teacher 2</Form.Label>

                  <Form.Control placeholder="Teacher 2" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Label>Did you like it? </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      backgroundColor: "#ACDDE7",
                    }}
                  >
                    <Form.Check
                      inline
                      label="Angry"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="Sad"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="Okay"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="Happy"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="Excellent"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Label>How much would you rate it? </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      backgroundColor: "#ACDDE7",
                    }}
                  >
                    <Form.Check
                      inline
                      label="1"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="5"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-1`}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      placeholder="Pleaes explain briefly"
                      rows={3}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-5 mt-3 mb-3 col-sm-2">
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Please Rate us</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
