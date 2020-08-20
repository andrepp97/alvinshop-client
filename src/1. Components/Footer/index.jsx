import React from "react";
import {
    MDBContainer,
    MDBFooter,
    MDBRow,
    MDBCol,
} from "mdbreact";
import './footer.css';

import bl from '../../3. Assets/img/marketplace/bukalapak.png';
import shp from '../../3. Assets/img/marketplace/shopee.png';
import tkp from '../../3. Assets/img/marketplace/tokopedia.png';

const links = [
    {
        text: "Link 1",
        url: "https://www.youtube.com/"
    },
    {
        text: "Link 2",
        url: "https://www.youtube.com/"
    },
    {
        text: "Link 3",
        url: "https://www.youtube.com/"
    },
]

const marketplace = [
    {
        text: "Bukalapak",
        image: bl,
        url: "https://www.bukalapak.com/"
    },
    {
        text: "Shopee",
        image: shp,
        url: "https://shopee.co.id/"
    },
    {
        text: "Tokopedia",
        image: tkp,
        url: "https://www.tokopedia.com/"
    },
]

const FooterSection = () => {
  return (
    <MDBFooter color="special-color-dark" className="font-small py-5">
      <MDBContainer className="text-center text-md-left">

        <MDBRow>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">Alvinshop</h5>
            <small className="opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem soluta architecto rem facere nisi unde recusandae placeat ab ad reprehenderit quasi, laboriosam voluptatum.
            </small>
          </MDBCol>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">Useful Links</h5>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {links.map((link,idx) => (
                            <li key={idx} className="useful-links border-bottom">
                                <a href={link.url}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        {links.map((link,idx) => (
                            <li key={idx} className="useful-links border-bottom">
                                <a href={link.url}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </MDBCol>
          <MDBCol md="4" className="mb-5">
            <h5 className="text-uppercase">Offline Store</h5>
            <div className="opacity-70">
                <span>Mall Baru Buka</span>
                <br/>
                <span>Jl. Buntu 69</span>
                <br/>
                <span>Jakarta</span>
            </div>
          </MDBCol>
        </MDBRow>

        <div className="text-center">
            <h5 className="text-uppercase mb-3">
                Marketplace
            </h5>
            {marketplace.map(item => (
                <a key={item.text} href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                        className="rounded mx-2"
                        src={item.image} 
                        alt={item.text}
                        height={60}
                    />
                </a>
            ))}
        </div>

        <hr className="border-white my-5" />

        <div className="text-center spacing-1">
            &copy; {new Date().getFullYear()} ALVINSHOP - All Rights Reserved.
        </div>

      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterSection;