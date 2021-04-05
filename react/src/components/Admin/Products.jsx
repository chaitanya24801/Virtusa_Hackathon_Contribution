import ProductCard from "./ProductCard";
import {
  Col,
  Container,
  Row,
  Modal,
  ModalTitle,
  ModalBody,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./css/products.css";
import { add_Product, getAllProducts } from "../../api";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    genre: "",
    stock: "",
    price: "",
    author: "",
    imageurl: "",
  });
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setProduct({
      name: "",
      description: "",
      genre: "",
      stock: "",
      price: "",
      author: "",
      imageurl: "",
    });
  };

  const add_product = async (e) => {
    e.preventDefault();
    const status = await add_Product({
      ...product,
      description: product.description
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"'),
    });
    if (status.error) alert("Try again later");
    else {const data = await getAllProducts();
      dispatch({type: "GET_PRODUCTS", payload: data})};
    toggleModal();
  };

  return (
    <Container>
      <Row>
        <Col sm="11">
          {products.map((product, idx) => (
            <div key={idx}>
              <ProductCard Product={product} />
            </div>
          ))}
        </Col>
        <Col sm="1">
          <button className="add-product" onClick={toggleModal}>
            Add Product
          </button>
        </Col>
        <Modal className="admin-modal" show={isOpen} onHide={toggleModal}>
          <ModalTitle className="modal-title">Add a Product</ModalTitle>
          <ModalBody className="modal-body">
            <Form className="form">
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  type="text"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Image Url</FormLabel>
                <FormControl
                  value={product.imageurl}
                  onChange={(e) =>
                    setProduct({ ...product, imageurl: e.target.value })
                  }
                  type="text"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Author</FormLabel>
                <FormControl
                  value={product.author}
                  onChange={(e) =>
                    setProduct({ ...product, author: e.target.value })
                  }
                  type="text"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormControl
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                  type="text"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Genre</FormLabel>
                <FormControl
                  value={product.genre}
                  onChange={(e) =>
                    setProduct({ ...product, genre: e.target.value })
                  }
                  type="text"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Stock</FormLabel>
                <FormControl
                  value={product.stock}
                  onChange={(e) =>
                    setProduct({ ...product, stock: "" + e.target.value })
                  }
                  type="number"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Price</FormLabel>
                <FormControl
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  type="number"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <button onClick={add_product}>Add</button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Row>
    </Container>
  );
};

export default Products;
