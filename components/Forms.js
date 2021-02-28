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
  },
  form: {
    width: "50vw",
  },
  label: {
    display: "inline-block",
    width: "150px",
  },
  containerInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
  },
  active: {
    backgroundColor: "blue",
  },
  error: {
    backgroundColor: "red",
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
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
    errors.password = "Password harus minimal 8 karakter!";
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
      {render(input, label, rest)}
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

const RenderInput = createRenderer((input, label, rest) => (
  <input type={rest.type} {...input} placeholder={label} />
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
