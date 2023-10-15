import {Fragment} from "react";


/* HOC A EK FUNCTION CHE HOC MEANS HIGHER ORDER COMPONENTS JYRE SAME FUNCTIONALITY USE KARVI HOI ANE HOC MA NAKHOI DEVU */
export const HOC = (Component, menu) => {

/* AHI COMPONENT LAKHYU CHE AMA BDHA COMPONENT AAVSE AMA COMPONENT NI JAGYA A BIJU PN KAI ANME API SAKAY */
    /* NEW COMPONENT A EK COMPONENT CHE */
  const NewComponent = () => {
    return (
      <Fragment>
        <div className="row m-0 g-0">
            {/* AA PART BDHA MA SAME HOI ATLE A BDHE SAME AAVSE REPEATED PART AHI AVE */}
          <div className="col-2 sidebar">
            <h4>Sidebar</h4>
            <h3><a href="#Home">Home</a></h3>
            <h3><a href="#About">About</a></h3>
          </div>

          <div className="col-10">
            {/* AMA APRE J COMPONENT BATAVVO HOI ANE CALL KARVANO */}
            <div className="bg-dark p-4 text-white">Header</div>
            {menu}
            <Component />
          </div>
        </div>
      </Fragment>
    );
  }

  return NewComponent

};
