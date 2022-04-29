import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import JokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br />
        <Row className="pb-5">
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="text-white movieImage">
              <Image
                src={duneImage}
                alt="Dune Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image
                src={everythingImage}
                alt="everything Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EVERYTHING</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image
                src={infiniteImage}
                alt="Infinite Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image
                src={JokerImage}
                alt="Dune Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image
                src={lightyearImage}
                alt="everything Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EVERYTHING</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image
                src={morbiusImage}
                alt="Infinite Movies"
                className="trendingImage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text classnName="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 2 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
