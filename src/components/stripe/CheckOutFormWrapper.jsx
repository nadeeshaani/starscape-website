import { useState } from "react";
import StripeCheckOut from "./StripeCheckOut";
import OrderSummary from "./OrderSummary";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BillingAddress from "./BillingAddress";
import { styled } from "@mui/system";
const AddressDetails = () => {
  const [isFilled, setIsfilled] = useState(false);
  const [addrErr, setAddrErr] = useState("");
  return (
    <Wrapper className="sec-wrapper ">
      <div className="container ">
        <Grid2 container>
          <Grid2
            item
            md={7}
            lg={8}
            paddingX={{ xs: 2, md: 3 }}
            direction="column"
            container
            spacing={{ xs: 3, md: 7 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            // alignItems={{ xs: "center" }}
          >
            {/* DELIEVERY INFO */}
            <Grid2 item>
              <header>
                <h5>Delivery Information</h5>
              </header>
              <BillingAddress setIsfilled={setIsfilled} />
              <span id="addr-error">{addrErr}</span>
            </Grid2>
            {/* STRIPE */}
            <Grid2 item paddingX={{ xs: 2, md: 3 }}>
              <StripeCheckOut isFilled={isFilled} setAddrErr={setAddrErr} />
            </Grid2>
          </Grid2>

          <Grid2 item md={5} lg={4} display={{ xs: "none", md: "block" }}>
            <OrderSummary />
          </Grid2>
        </Grid2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled("section")`
  min-height: 100vh;

  header {
    margin-bottom: 1rem;
  }

  #addr-error {
    display: block;
    color: var(--txt-alert);
    line-height: 20px;
    margin-top: 12px;
    text-transform: capitalize;
  }
`;

export default AddressDetails;
