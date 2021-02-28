import React from "react";
import { reduxForm, Field } from "redux-form";
import isValidEmail from "sane-email-validation";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflowY: "scroll",
    backgroundImage:
      "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
  },
  form: {
    width: "550px",
    backgroundColor: "#a8eb12",
    padding: "15px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 15px 1px #FFFFFF",
  },
  label: {
    display: "inline-block",
    width: "20%",
  },
  containerInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    width: "100%",
    padding: "5px",
    borderRadius: "5px",
  },
  active: {
    backgroundColor: "rgba(42, 211, 245, 0.5)",
  },
  error: {
    backgroundColor: "rgb(242, 146, 44)",
  },
  input: {
    width: "50%",
    marginRight: "10px",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid #8d9b9e",
    outline: "none",
    paddingLeft: "10px",
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    alignSelf: "center",
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Isi isial ini";
  }
  if (!values.lastName) {
    errors.lastName = "Isi isial ini";
  }
  if (!values.email) {
    errors.email = "Isi isial ini";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Email tidak valid";
  }
  if (!values.password) {
    errors.password = "Isi isial ini";
  } else if (values.password.length < 8) {
    errors.password = "Minimal 8 karakter!";
  }
  return errors;
};
const createRenderer = (render) => ({
  input,
  meta,
  label,
  styles,
  ...rest
}) => {
  console.log(meta);
  return (
    <div
      className={[
        styles.container,
        meta.error && meta.touched ? styles.error : "",
        meta.active ? styles.active : "",
      ].join(" ")}
    >
      <label className={styles.label}>{label}</label>
      {render(input, label, styles, rest)}
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

const RenderInput = createRenderer((input, label, styles, rest) => (
  <input
    className={styles.input}
    type={rest.type}
    {...input}
    placeholder={label}
  />
));

function Forms() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <Field
          name="firstName"
          label="First Name"
          styles={{
            label: classes.label,
            container: classes.containerInput,
            active: classes.active,
            error: classes.error,
            input: classes.input,
          }}
          component={RenderInput}
        />
        <Field
          name="lastName"
          label="Last Name"
          styles={{
            label: classes.label,
            container: classes.containerInput,
            active: classes.active,
            error: classes.error,
            input: classes.input,
          }}
          component={RenderInput}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          styles={{
            label: classes.label,
            container: classes.containerInput,
            active: classes.active,
            error: classes.error,
            input: classes.input,
          }}
          component={RenderInput}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          styles={{
            label: classes.label,
            container: classes.containerInput,
            active: classes.active,
            error: classes.error,
            input: classes.input,
          }}
          component={RenderInput}
        />
        <Button className={classes.btn}>Register</Button>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}
Forms = reduxForm({
  form: "formRegist",
  destroyOnUnmount: false,
  validate,
})(Forms);
export default Forms;
