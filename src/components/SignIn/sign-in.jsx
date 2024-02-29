import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./styles.css";

function SignIn() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordDisabled, setIsPasswordIsDisabled] = useState(true);
  const [isSubmiteDisabled, setIsSubmitDisabled] = useState(true);

  const validateInput = (value, type) => {
    let isValid = false;
    switch (type) {
      case "email":
        setIsEmail(value);
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        isValid
          ? setIsPasswordIsDisabled(false)
          : setIsPasswordIsDisabled(true);
        break;
      case "password":
        setIsPassword(value);
        isValid = /^(?=.*[a-z])(?=.*[A-Z])(.{8,20})$/.test(value);
        isValid ? setIsSubmitDisabled(false) : setIsSubmitDisabled(true);
        break;
      default:
        isValid = true;
        break;
    }
    return isValid;
  };

  return (
    <div className="sign-in-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={isEmail}
            onChange={e => validateInput(e.target.value, "email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={isPassword}
            onChange={e => validateInput(e.target.value, "password")}
            disabled={isPasswordDisabled}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmiteDisabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
