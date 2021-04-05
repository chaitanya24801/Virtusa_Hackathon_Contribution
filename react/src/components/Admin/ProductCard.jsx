import { useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalTitle,
  ModalBody,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { deleteProduct } from "../../redux/actions/products";
import { useDispatch } from "react-redux";
import { delete_product, edit_product } from "../../api";

const ProductCard = ({ Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(Product);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setProduct(Product);
  };
  const dispatch = useDispatch();

  const saveEditedProduct = async (e) => {
    e.preventDefault();
    const res = await edit_product({
      ...product,
      description: product.description
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"'),
    });
    if (res.error) alert("Try again later");
    else dispatch({ type: "EDIT_PRODUCT", payload: product });
    console.log({ ...product });
    toggleModal();
  };

  const delete_Product = async (e) => {
    const res = await delete_product(product.book_id);
    if (res.error) alert("Try again later");
    else dispatch(deleteProduct(product));
  };

  return (
    <Row className="product-card">
      <Col sm="2">
        <img src={product.imageurl} alt="" className="product-img" />
      </Col>
      <Col sm="8">
        <div className="product-details">
          <p className="product-name">{Product.name}</p>
          <p className="product-author">{"Author: " + Product.author}</p>
          <p className="product-genre">Genre: {Product.genre}</p>
          <p className="product-desc">{Product.description}</p>
          <div className="product-avail">
            <p className="product-stock">Stock: {Product.stock}</p>
            <p className="product-price">
              <span className="fa fa-inr fa-lg"></span>
              {"  " + Product.price}
            </p>
          </div>
        </div>
      </Col>
      <Col sm="2">
        <div className="product-edits">
          <button className="product-edit" onClick={toggleModal}>
            <span className="fa fa-pencil fa-lg"></span>
          </button>
          <button className="product-delete" onClick={delete_Product}>
            <span className="fa fa-trash fa-lg"></span>
          </button>
        </div>
      </Col>
      <Modal className="admin-modal" show={isOpen} onHide={toggleModal}>
        <ModalTitle className="modal-title">Edit Product</ModalTitle>
        <ModalBody className="modal-body">
          <Form className="form" onSubmit={saveEditedProduct}>
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
              <button type="submit">Save Changes</button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Row>
  );
};

export default ProductCard;
