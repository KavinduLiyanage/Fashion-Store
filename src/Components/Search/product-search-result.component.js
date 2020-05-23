import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import {Col, Card, Row, Button, Typography } from 'antd';
import {Link} from "react-router-dom";
import ImageSlider from "../Product/subcomponents/ImageSlider";
import CheckBox from "../Product/subcomponents/CheckBox";
import RadioBox from "../Product/subcomponents/RadioBox";
import { productBranches, productPrice } from '../Product/subcomponents/Datas';
import {serverUrl} from "../config";

const { Meta } = Card;
const { Text } = Typography;

function ProductSearchResultComponent(props) {

    console.log("first : "+props.match.params.id)
    const [Products, setProducts] = useState([])
    const [SearchTerms, setSearchTerms] = useState(props.match.params.id)
    console.log("second : "+SearchTerms)

    const [Filters, setFilters] = useState({
        productBranches: [],
        productPrice: []
    })

    useEffect(() => {

        const variables = {
            searchTerm: SearchTerms,
            filters: Filters,
        }

        getProducts(variables)


    },[])



    const getProducts = (variables) => {
        Axios.post(serverUrl + '/products/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                    console.log(response.data.products)

                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }


    const renderCards = Products.map((product, index) => {

        return <Col key={product._id} lg={6} md={8} xs={24}>
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

                <Row>
                    <Col span={12}>
                        <div>

                            <Link to={"/storeManager/editDis/"+product._id}><Button>Discounts</Button></Link>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>

                            <Link to={"/storeManager/edit/"+product._id}><Button>Edit Details</Button></Link>
                        </div>
                    </Col>
                </Row>

            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {

        const variables = {
            filters: filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)

    }



    const handlePrice = (value) => {
        const data = productPrice;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "productPrice") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }


    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }

    return (
        <div style={{ width: '75%', margin: '3rem auto', marginTop: 70}}>
            <div style={{ textAlign: 'center' }}>

                <h2> <Text strong>Search Results</Text></h2>
            </div>


            {/* Filter  */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox
                        list={productBranches}
                        handleFilters={filters => handleFilters(filters, "productBranches")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={productPrice}
                        handleFilters={filters => handleFilters(filters, "productPrice")}
                    />
                </Col>
            </Row>


            {/* Search  */}


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
            <br /><br />
        </div>
    )
}

export default ProductSearchResultComponent
