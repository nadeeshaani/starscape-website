import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { styled } from "@mui/system";

const BillingAddress = ({ setIsfilled }) => {
  const [details, setDetails] = useState({
    name: "",
    mobileNumber: "",
    city: "",
    email: "",
    address: "",
    floornumber: "",
    flatnumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    details.email &&
    details.name &&
    details.city &&
    details.flatnumber &&
    details.floornumber &&
    details.mobileNumber &&
    details.address
      ? setIsfilled(true)
      : setIsfilled(false);
  };

  return (
    <Wrapper onSubmit={handleSubmit} onChange={handleChange}>
      <Grid2
        container
        spacing={{ xs: 5, md: 4, xl: 5 }}
        justifyContent={{ xs: "center", sm: "flex-start" }}
      >
        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            name="name"
            value={details.name}
            // //onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>

        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            value={details.email}
            // onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            size="small"
            name="mobileNumber"
            value={details.mobileNumber}
            // onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>

        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            name="city"
            value={details.city}
            // onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>

        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            name="address"
            value={details.address}
            //onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%", marginBottom: "25px" }}
            id="outlined-basic"
            label="Floor Number"
            variant="outlined"
            size="small"
            name="floornumber"
            value={details.floornumber}
            //onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={6}
          md={12}
          lg={6}
          container
          paddingX={{ xs: 0, sm: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ width: "85%" }}
            id="outlined-basic"
            label="Flat Number"
            variant="outlined"
            size="small"
            name="flatnumber"
            value={details.flatnumber}
            //onChange={(e) => handleChange(e)}
            className="del-input"
          />
        </Grid2>
        <div>
          {/* <button className="" disabled={isFilled}>
      k
    </button> */}
        </div>
      </Grid2>
    </Wrapper>
  );
};

const Wrapper = styled("form")`
  padding: 40px;
  width: 85%;
  border-radius: 7px;
  backround-color: red !important;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);

  .del-input .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root {
    top: 2% !important;
  }

  .del-input .Mui-focused {
    color: var(--txt-clr-2) !important;
  }

  input {
    width: 100% !important;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    padding: 40px 30px;
  }
  @media (max-width: 539px) {
    padding: 40px 30px;
  }
`;

export default BillingAddress;
