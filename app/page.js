import { Container, Row, Col } from "react-bootstrap";
import Robot from "./Components/Home_intro/home_banner";
import classes from "./Home.module.css";
import Button from "./Components/GS_Button/button";


export default function Home() {
  return (
    <Container fluid className={`overflow-x-hidden ${classes.body}`}>
      <Row>
        <div className={`d-block d-lg-none w-100`}>
          <video autoPlay loop muted width="100%">
            <source src="/robot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`d-none d-lg-block ${classes.robot}`}>
          <Robot />
        </div>
        <div>
          <h2 className={classes.txt}>Welcome to the <span className={classes.qq}>QUIZ QUEST!!</span> </h2>
          < p className={classes.p}>
            Test your web dev skills with a quick quiz on HTML, CSS, JavaScript, and React. Answer questions, get instant feedback, and see how much you know!
          </p>
        </div>
        <div className={`d-flex gap-3 justify-content-center overflow-x-hidden ${classes.btn}`}>
          <Button href="/category" text="Play Now"/>
          <Button href="/results" text="Get Results"/>
        </div>
      </Row>
    </Container>
  );
}
