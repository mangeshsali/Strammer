export const checkValidate = (email, password) => {
  const isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const ispassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isemailValid) {
    return "Email is not Valid";
  }

  if (!ispassValid) {
    return "Password is not valid";
  }

  return null;
};
