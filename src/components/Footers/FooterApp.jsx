/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { MobilePhone, Mail, PropertyLocation } from "components/Icons";
function DarkFooter() {
  return (
    <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                <PropertyLocation width="22px" height="22px"/>
                <span className="px-2 pt-1 text-info">
                    Avenida la Dehesa 1201, Oficina 709, Edificio Oriente. Santiago.
                </span>
              </a>
            </li>
            <li>
              <a
                href="tel:+56966780540"
                target="_blank"
              >
                <MobilePhone width="22px" height="22px"/>
                <span className="px-2 pt-1 text-info">+569 66780540</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:vistalomas@tavacorp.cl"
                target="_blank"
              >
                <Mail width="22px" height="22px"/>
                <span className="px-2 pt-1 text-info">vistalomas@tavacorp.cl</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
          <a
            href=""
            target="_blank"
          >
            {' '}Shelby's
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
