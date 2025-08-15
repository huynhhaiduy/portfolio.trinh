import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Xin chào, mình là{" "}
                        <span className="purple">Thùy Trinh </span>- sinh viên
                        năm 2 ngành <span className="purple"> Marketing.</span>
                        <br />
                        <br />
                        Mình có niềm đam mê với việc sáng tạo và viết lách tạo
                        ra các bài ấn phẩm truyền thông mang tính đột phá và
                        thực tiễn.
                        <br />
                        <br />
                        Trong tương lai minh mong muốn trở thành một Marketer
                        chuyên nghiệp và nhiệt huyết - người nắm vững các kỹ
                        năng quản lý và phát triển các kênh thông tin số, có khả
                        biên soạn nội dung chất lượng, đồng thời hỗ trợ hiệu quả
                        cho các hoạt động tuyển dụng và sự kiện việc làm.
                        <br />
                        <br />
                        Mục tiêu của mình là không chỉ mang lại giá trị cho
                        thương hiệu mà còn tạo ra những đóng góp ý nghĩa cho
                        cộng đồng.
                        <br />
                        <br />
                        🎓 Học vấn: Trường Đại học Mở TPHCM - Chuyên ngành
                        Marketing.
                        <br />
                        <br />
                        Ngoài việc học ở trường, mình còn có một vài sở thích:
                    </p>
                    <ul>
                        <li className="about-activity">📖 Đọc sách</li>
                        <li className="about-activity">🎵 Nghe nhạc</li>
                        <li className="about-activity">🎨 Vẽ tranh</li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Life is Short, Smile While You Still Have Teeth"{" "}
                    </p>
                    <footer className="blockquote-footer">
                        Mallory Hopkins
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
