import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { TbAnalyze } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaFacebook />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Viết bài truyền thông trên nền tảng mạng xã hội Facebook
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoCalendarOutline />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Lên kế hoạch Marketing
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbAnalyze />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Phân tích doanh nghiệp (SWOT, BCG...)
                </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <AiFillCustomerService />
                <div style={{ fontSize: "0.75rem", marginTop: "5px" }}>
                    Phân tích & nghiên cứu hành vi khách hàng
                </div>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSolidity />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col> */}
        </Row>
    );
}

export default Techstack;
