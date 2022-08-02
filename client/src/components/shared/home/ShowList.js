import { Link } from "react-router-dom";
import { Container, Row, ListGroup } from "react-bootstrap";

const ShowList = ({ workouts }) => {
  return (
    <>
      <Container>
        <ListGroup variant="flush">
          {workouts.slice(0, 3).map((p) => (
            <>
              <Container style={{ display: "flex", flexDirection: "row" }}>
                <Row>
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
                </Row>
              </Container>
            </>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default ShowList;
