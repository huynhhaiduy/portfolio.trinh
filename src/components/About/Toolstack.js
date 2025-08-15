import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiCanva,
    SiLeaderprice,
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiCanva />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Biết sử dụng các phần mềm thiết kế hình ảnh, video: Canva,
                    Capcut
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TfiMicrosoft />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Khả năng tin học văn phòng: Doc, Word, Excel, Gmail...
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLeaderprice />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Làm việc nhóm hiệu quả: Có kinh nghiệm làm nhóm trưởng trong
                    hơn 10 môn học tại trường, thể hiện khả năng dẫn dắt, phân
                    công công việc hợp lý, dẫn dắt và thúc dẩy tinh thần đồng
                    đội
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GiSatelliteCommunication />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Giao tiếp tốt: Tự tin trong việc giao tiếp với nhiều đối
                    tượng, biết lắng nghe và truyền đạt thông tin hiệu quả
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaBusinessTime />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Quản lý thời gian hiệu quả: Biết cách tổ chức, phân bổ thời
                    gian và công việc một cách khoa học; thường xuyên lập kế
                    hoạch và theo dõi tiến độ để đảm bảo hiệu quả công việc
                </div>
            </Col>
        </Row>
    );
}

export default Toolstack;
