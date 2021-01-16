import React from "react";
import {
    MDBContainer,
    MDBFooter,
    MDBRow,
    MDBCol,
} from "mdbreact";

import bl from '../../3. Assets/img/marketplace/bukalapak.png';
import shp from '../../3. Assets/img/marketplace/shopee.png';
import tkp from '../../3. Assets/img/marketplace/tokopedia.png';

const marketplace = [
    {
        text: "bukalapak",
        image: bl,
        url: "https://www.bukalapak.com/u/"
    },
    {
        text: "shopee",
        image: shp,
        url: "https://shopee.co.id/"
    },
    {
        text: "tokopedia",
        image: tkp,
        url: "https://www.tokopedia.com/"
    },
]

const FooterSection = ({settings}) => {
  return (
    <MDBFooter color="special-color-dark" className="font-small py-5">
      <MDBContainer className="text-center text-md-left">

        <MDBRow>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">
                {settings ? settings.name : ""}
            </h5>
            <small className="opacity-70">
              {settings ? settings.description : ""}
            </small>
          </MDBCol>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">
              Marketplace
            </h5>
            {marketplace.map(item => (
                <a
                    key={item.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={settings ? item.url + settings[item.text] : ""}
                >
                    <img
                        className="rounded m-2"
                        src={item.image} 
                        alt={item.text}
                        height={60}
                    />
                </a>
            ))}
          </MDBCol>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">Offline Store</h5>
            <div className="opacity-70">
                <span>
                    {settings ? settings.address : ""}
                </span>
            </div>
          </MDBCol>
        </MDBRow>

        <hr className="border-white my-5" />

        <div className="text-center spacing-1">
            &copy; {new Date().getFullYear()} <span className="text-uppercase">{settings ? settings.name : ""}</span> - All Rights Reserved.
        </div>

      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterSection;