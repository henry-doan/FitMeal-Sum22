import { Link } from "react-router-dom";
import { Container, Row, ListGroup, Col } from "react-bootstrap";

const ShowList = ({ workouts }) => {
  return (
    <>
      <Container>
        <ListGroup variant="flush">
          <Row xs={1} md={2} xl={4} className="g-4 justify-content-center">
            {workouts.slice(0, 4).map((p) => (
              <Container>
                <Col>
                  <Link
                    to={`/workouts/${p.id}`}
                    state={{
                      wimage: p.wimage,
                      wname: p.wname,
                      difficulty: p.difficulty,
                    }}
                  >
                    <img
                      src={p.wimage}
                      alt={p.wname}
                      style={{
                        width: "302px",
                        height: "112px",
                      }}
                    />
                  </Link>
                </Col>
              </Container>
            ))}
          </Row>
        </ListGroup>
      </Container>
    </>
  );
};

export default ShowList;
