import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-trinh.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        {/* <p className="home-about-body">
                            I fell in love with programming and I have at least
                            learnt something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple">
                                    {" "}
                                    C++, Javascript and Go.{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">
                                    Web Technologies and Products{" "}
                                </b>{" "}
                                and also in areas related to{" "}
                                <b className="purple">Blockchain.</b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with{" "}
                            <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p> */}

                        <p className="home-about-body">
                            Xin chào, mình là Thùy Trinh - sinh viên năm 2 ngành
                            <i>
                                <b className="purple"> Marketing. </b>
                            </i>
                            <br />
                            <br />
                            Mình có niềm đam mê với việc sáng tạo và viết lách
                            tạo ra các bài ấn phẩm truyền thông mang tính
                            <i>
                                <b className="purple">
                                    {" "}
                                    đột phá và thực tiễn.{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            Trong tương lai minh mong muốn trở thành một
                            Marketer chuyên nghiệp và nhiệt huyết – người nắm
                            vững các kỹ năng quản lý và phát triển các kênh
                            thông tin số, có khả biên soạn nội dung chất lượng,
                            đồng thời hỗ trợ hiệu quả cho các hoạt động tuyển
                            dụng và sự kiện việc làm. &nbsp;
                            {/* <i>
                                <b className="purple">
                                    Web Technologies and Products{" "}
                                </b>{" "}
                                and also in areas related to{" "}
                                <b className="purple">Blockchain.</b>
                            </i> */}
                            <br />
                            <br />
                            Mục tiêu của mình là không chỉ mang lại giá trị cho
                            thương hiệu mà còn tạo ra những đóng góp ý nghĩa cho
                            cộng đồng.
                            {/* <b className="purple">Node.js</b> and */}
                            {/* <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i> */}
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar-trinh"
                            />
                        </Tilt>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soumyajit4419/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row> */}

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>CONTACT ME</h1>
                        <ul
                            className="home-about-social-links"
                            style={{ listStyle: "none", paddingLeft: 0 }}
                        >
                            <li
                                className="social-icons"
                                style={{
                                    marginBottom: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <AiOutlineMail
                                    size={30}
                                    style={{ marginRight: "10px" }}
                                />
                                <span
                                    className="purple"
                                    style={{ marginRight: "10px" }}
                                >
                                    Email:
                                </span>
                                <span>letrinh038038@gmail.com</span>
                            </li>
                            <li
                                className="social-icons"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <AiOutlinePhone
                                    size={30}
                                    style={{ marginRight: "10px" }}
                                />
                                <span
                                    className="purple"
                                    style={{ marginRight: "10px" }}
                                >
                                    Phone number:
                                </span>
                                <span>038 4455823</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
