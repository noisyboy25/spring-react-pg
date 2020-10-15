import React, { Component } from 'react'
import { Row, Col, Card, Button} from 'react-bootstrap';
import './Product_Card.css'
import sopping_cart from './shopping-cart-32.png'
export default class Product_Card extends Component {

  render() {
    const Star = ({ marked, starId }) => (
      <span className="Card-rating" star-id={starId} role="button">
        {marked ? "\u2605" : "\u2606"}
      </span>

    );
    // возвращает рейтинг товара относительно параметра {product.reating}
    const StarRating = props => {
      const [rating] = React.useState(
        typeof props.rating == "number" ? props.rating : 0
      );
      const [selection] = React.useState(0);

      return (
        <div>
          {Array.from({ length: 5 }, (v, i) => (
            <Star
              starId={i + 1}
              key={`star_${i + 1} `}
              marked={selection ? selection >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
      );
    };

    // Описани карточки товара
    const productItems = this.props.products.map(product => (
      <Card bg="white" key={product.id} >
        <Row >
          <Col className="Product-card">
            {/* <a href={`/product/${product.id}`} > */}

            <Row >
              <Col className="Card-img">
                <img src={`products_img/${product.sku}.jpg`} alt="image-tovara" />
              </Col>
            </Row>

            <Row className="Card-title">
              <Col >
                <div>{product.title}</div>
              </Col>
            </Row>

            <Row className="Card-rating">
              <Col>
                <StarRating rating={product.reating} />
              </Col>
            </Row>
            {/* </a> */}


            <Row className="price">
              <Col>
                <span ><b>{product.price} ₽</b></span>
              </Col>
            </Row>

            <Row>
              <Col className="btn-add-cart">
                <Button variant="danger" id="addcart" ><span><img src={sopping_cart} style={{width: "20%"}}/> <b>В корзину</b></span></Button>
              </Col>
            </Row>

            {/* //лишняя для карточки инфа
              <Row>
                <Col>
                  <ul >
                    <li>{product.description1}</li>
                    <li>{product.description2}</li>
                    <li>{product.description3}</li>
                    <li>{product.description4}</li>
                    <li>{product.description5}</li>
                    <li>{product.description6}</li>
                    <li>{product.description7}</li>
                    <li>{product.description8}</li>
                  </ul>
                </Col>
              </Row>
            */}
          </Col>
        </Row>




      </Card >
    ));

    return (
      <>
        {productItems}
      </>
    )
  }
}