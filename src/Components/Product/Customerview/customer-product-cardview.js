import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import {Col, Card, Row, Typography } from 'antd';
import {Link} from "react-router-dom";
import ImageSlider from "../subcomponents/ImageSlider";
import {serverUrl} from "../../config";

const { Meta } = Card;
const { Text } = Typography;

function CustomerProductCardview() {

    const [Products, setProducts] = useState([])

    useEffect(() => {

        Axios.post(serverUrl+'/products/getProducts')
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                    console.log(response.data.products)

                } else {
                    alert('Failed to fectch product datas')
                }
                console.log(response.data.products);
            })

    }, [])

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<Link to={"/storeManager/edit/"+product._id}><ImageSlider images={product.images} /></Link>}
            >
                <Meta
                    title={product.productName}
                    description={`Rs.${product.productPrice}`}
                />
                <div className="additional">

                    <Text type="warning">{product.productDiscount}% Discount</Text>
                    <br/>
                    <Text type="secondary">{product.productQnt} items available</Text>
                </div>
            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto', marginTop: 70}}>
            <div style={{ textAlign: 'center' }}>
                <h1> <Text type="warning">New Arrivals</Text></h1>
            </div>

            {/* Product card view  */}
            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>
                        {renderCards}
                    </Row>
                </div>
            }
        </div>
    )
}

export default CustomerProductCardview
