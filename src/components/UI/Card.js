import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import { Col, Image } from "antd";
import Link from "next/link";

export default function Card({ singleNews }) {
    const { title, release_date, description, image_url, comment_count, id, category } = singleNews

    return (
        <Col span={6}>
            <Image height={400} style={{ objectFit: "cover" }} src={image_url} fill alt="drawing_image" />

            <h1 style={{ fontSize: "50px" }}>
                {title}
            </h1>
            <div
                className="line"
                style={{
                    height: "5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "95%",
                }}
            ></div>

            <p
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    color: "gray",
                    margin: "10px 0px",
                }}
            >
                <span>
                    <CalendarOutlined /> {release_date}
                </span>
                <span>
                    <CommentOutlined /> {comment_count} COMMENTS
                </span>
                <span>
                    <ProfileOutlined /> {category}
                </span>
            </p>

            <p style={{ fontSize: "20px" }}>
                {description}
            </p>
            <Link href={`news/${id}`}>
                <p
                    style={{
                        fontSize: "20px",
                        margin: "20px 0px",
                        backgroundColor: "black",
                        color: "white",
                        width: "168px",
                        padding: "2px 5px ",
                        fontWeight: "300",
                        letterSpacing: "3px",
                    }}
                >
                    Keep Reading <ArrowRightOutlined />
                </p></Link>
        </Col>
    )
}
