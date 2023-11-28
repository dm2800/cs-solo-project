import Button from "react-bootstrap/esm/Button";
import { Form, Container } from "react-bootstrap";

const Form1 = (props)=>{


    const {submitHandler, onChangeHandler, instrument, errors, buttonText } = props; 

    return(
        <Container className="form-container">
            <h2>List an Instrument</h2>
            <h5>Please enter your item info.</h5>
            <Form className="" onSubmit={submitHandler}>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Title</Form.Label>
                    <Form.Control className= "form-field" name = "title" value = {instrument.title} onChange = {onChangeHandler} type = "text"></Form.Control>

                {
                    errors.title?
                    <span>{errors.title.message}</span>
                    :null 
                }

                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Price</Form.Label>
                    <Form.Control className= "form-field" name = "price" value = {instrument.price} onChange = {onChangeHandler} type = "text"></Form.Control>
                {
                    errors.price?
                    <span>{errors.price.message}</span>
                    :null 
                }

                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Description</Form.Label>
                    <Form.Control className= "form-field" name = "description" value = {instrument.description} onChange = {onChangeHandler} type = "text"></Form.Control>
                {
                    errors.description?
                    <span>{errors.description.message}</span>
                    :null 
                }
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Image Url</Form.Label>
                    <Form.Control className= "form-field" name = "image" value = {instrument.image} onChange = {onChangeHandler} type = "text"></Form.Control>
                {
                    errors.image?
                    <span>{errors.image.message}</span>
                    :null 
                }
                </Form.Group>
                <br></br>
                
                <Button className = "custom-btn" type="submit">{buttonText}</Button>
                
                

                
            </Form>
        </Container>
    )
}

export default Form1;