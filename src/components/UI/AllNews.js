import React from 'react'
import Card from './Card'
import { Col, Row } from 'antd'

export default function AllNews({ news }) {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Discover Our News</h1>
            <Row gutter={45}>
                {news?.map(singleNews => <Card key={singleNews.id} singleNews={singleNews} />)}
            </Row>
        </div>
    )
}
