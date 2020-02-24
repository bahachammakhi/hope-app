import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Form, Icon, Input, Button } from "antd";
import useForm from "../../hooks/useForm";
import useApi from "../../hooks/useApi";
import { getStartwar as startwars } from "../../requests";
// Redux actions
import startupActions from "../../redux/startup";

const Test = ({ logo }: any) => {
  //Dispatch functions !
  const dispatch = useDispatch();
  // Api hook !
  const { ...calls } = useApi({ startwars });
  console.log("calls:", calls);
  // All redux states
  const redux = useSelector((state: any) => state);
  console.log(redux);
  const handleSubmitCallback = () => {
    console.log("sumbit");
  };
  const validationCallback = () => {
    console.log("validation");
  };
  const initialValues = {
    firstname: "test",
    password: "test"
  };
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setForm,
    form,
    errors,
    success,
    submitting
  } = useForm({
    handleSubmitCallback,
    validationCallback,
    initialValues
  });
  //console form values
  console.log(form);
  // On componenet did Mount Run Start up action
  useEffect(
    () => {
      dispatch(startupActions.startup());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form layout="inline">
        <Form.Item>
          <Input
            name="firstname"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              calls.startwars.call();
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Test;
