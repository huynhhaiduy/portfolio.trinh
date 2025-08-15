import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import lavie from "../../Assets/Projects/lavie.png";
import kingSport from "../../Assets/Projects/kingSport.png";
import history from "../../Assets/Projects/history.png";
import openDay from "../../Assets/Projects/openDay.png";
import vinasoy from "../../Assets/Projects/vinasoy.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Đây là một vài dự án mà mình đã thực hiện gần đây.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={openDay}
                            isBlog={false}
                            title="Viết bài truyền thông"
                            description="Trong dự án này, mình phụ trách ý tưởng và biên tập nội dung ấn phẩm truyền thông ngắn gọn, cuốn hút, truyền tải thông điệp rõ ràng. Quá trình này giúp mình rèn kỹ năng viết súc tích, biết điều chỉnh ngôn từ phù hợp với đối tượng mục tiêu và kỹ năng làm việc nhóm và trao đổi hiệu quả với designer, bộ phận in ấn."
                            // ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://www.facebook.com/share/p/16wRPVy11R/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={vinasoy}
                            isBlog={false}
                            title="Phân tích doanh nghiệp Vinasoy và kế hoạch Marketing Mix sản phẩm sữa Fami"
                            description="Dự án tập trung phân tích toàn diện doanh nghiệp Vinasoy và kế hoạch Marketing Mix cho sản phẩm sữa Fami theo mô hình 4P. Qua quá trình thực hiện, mình rèn luyện kỹ năng nghiên cứu thị trường, phân tích dữ liệu, lập kế hoạch marketing, trình bày báo cáo và kỹ năng tư duy chiến lược."
                            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                            // demoLink="https://blogs.soumya-jit.tech/"
                            demoLink="/vinasoy.pdf"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={kingSport}
                            isBlog={false}
                            title="Lên kế hoạch Truyền thông Marketing tích hợp cho sản phẩm “Máy chạy bộ Gen2” Kingsport"
                            description="Dự án tập trung xây dựng chiến lược truyền thông marketing tích hợp (IMC) cho việc ra mắt sản phẩm máy chạy bộ GEN2 mới. Trong quá trình thực hiện, mình rèn luyện kỹ năng lập kế hoạch IMC, nghiên cứu thị trường, xác định insight khách hàng, sáng tạo thông điệp, lựa chọn kênh truyền thông phù hợp, phối hợp làm việc nhóm và trình bày ý tưởng thuyết phục."
                            // ghLink="https://github.com/soumyajit4419/Editor.io"
                            // demoLink="https://editor.soumya-jit.tech/"
                            demoLink="/kingSport.pdf"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={lavie}
                            isBlog={false}
                            title="Lên kế hoạch Truyền thông Marketing tích hợp cho dòng sản phẩm nuớc khoáng Lavie"
                            description="Đây là bản phác thảo giả lập cho chương trình truyền thông marketing tích hợp (IMC) của thương hiệu nước khoáng Lavie. Qua dự án, mình học được cách khai thác insight khách hàng và phối hợp hiệu quả các công cụ truyền thông để xây dựng chiến dịch đồng bộ, sáng tạo và có tính thuyết phục cao."
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            // demoLink="https://plant49-ai.herokuapp.com/"
                            demoLink="/lavie.pdf"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={history}
                            isBlog={false}
                            title="Phân tích hành vi khách hàng & tạo app học lịch sử"
                            description="Dự án tập trung phân tích hành vi của học sinh, sinh viên Việt Nam đối với môn Lịch sử, từ đó phát triển ý tưởng ứng dụng học tập tương tác. Qua dự án mình đã biết cách thực hiện phỏng vấn người dùng, khai thác insight và phân tích dữ liệu thu thập được, qua đó đề xuất tính năng và thiết kế tối ưu, đáp ứng đúng nhu cầu và thói quen học tập của đối tượng mục tiêu."
                            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                            demoLink="/history.pdf"
                        />
                    </Col>

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
                        />
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
