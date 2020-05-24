import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import ImageSlider from "../subcomponents/ImageSlider";
import { serverUrl } from "../../config";

const { Meta } = Card;
const { Text } = Typography;

function CustomerProductCardview() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    Axios.post(serverUrl + "/products/getProducts").then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col key={product._id} lg={6} md={8} xs={24}>
        <Link to={"/productDetails/" + product._id}>
          <Card
            hoverable={true}
            cover={<ImageSlider images={product.images} />}
          >
            <Meta
              title={product.productName}
              description={`Rs.${product.productPrice}`}
            />
            <div className="additional">
              <Text type="warning">{product.productDiscount}% Discount</Text>
              <br />
              <Text type="secondary">{product.productQnt} items available</Text>
            </div>
          </Card>
        </Link>
      </Col>
    );
  }).reverse();

  return (
    <div style={{ width: "75%", margin: "3rem auto", marginTop: 70 }}>
      <div style={{ textAlign: "center" }}>
        <h1>
          {" "}
          <Text type="warning">New Arrivals</Text>
        </h1>
      </div>

      {/* Product card view  */}
      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
    </div>
  );
}

export default CustomerProductCardview;
