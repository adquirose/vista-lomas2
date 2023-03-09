import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem, 
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { PinDelete } from '../components/Icons'
// core components
import NavbarApp from "../components/Navbars/NavbarApp.jsx";
import VistaLomasHeader from "../components/Headers/VistaLomasHeader";
import FooterApp from "../components/Footers/FooterApp.jsx";

function VistaLomas() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [iconPills, setIconPills] = React.useState("1");
 
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavbarApp />
      <div className="wrapper">
        <VistaLomasHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className='text-center'>
                    <PinDelete width={24} height={24} color={'red'}/>
                    LOS LITRES Nº 1800, <br/>LA DEHESA
                </h2>
                <h5 className='text-black'>
                    Vista Lomas un proyecto exclusivo inserto en un entorno natural con vistas panoramicas
                    al valle de los trapenses, cerro Manquehue, lomajes precordilleranos.
                    Solo 12 casas mediterráneas 250 m2 aproximados en terrenos de 652 m2 que combinan diseño elegancia 
                    y entorno.
                    Vista Lomas es un condominio en donde podrás disfrutar de la tranquilidad y la ausencia de ruido
                    del sector.
                    Con una distribución moderna y gran diseño arquitectónico privilegiamos la distribución 
                    interior, luminosidad y espacios.
                    Las casas estan emplazadas en terrenos con pendientes controladas que permiten extender las vistas 
                    por todo el valle.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images-vista-lomas/ext3.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Mauris tristique pulvinar sem sit amet pulvinar. 
                      Vestibulum non condimentum augue. " <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images-vista-lomas/estar.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/images-vista-lomas/ext4.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    FULL CONECTIVIDAD Y ENTORNO NATURAL
                  </h3>
                  <p>
                    El proyecto cuenta con una amplia área verde interior, sector de juegos para niños, 
                    estacionamientos para visita y seguridad 24/7.<br/><br/>
                    Su ubicación permite una rápida y expedita conectividad a todo tipo de servicios y centros 
                    comerciales, clubes de golf y espacios deportivos para práctica de pádel, tenis, 
                    mountain bike y espectaculares senderos para trote y trecking.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col>
                <h3>SECTOR CONSOLIDADO CON VIDA DE BARRIO</h3>
                  <Card>
                    <CardHeader>
                      <Nav className="justify-content-center" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className={iconPills === "1" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setIconPills("1");
                            }}
                          >
                            <i className="now-ui-icons objects_umbrella-13"></i>
                            Clinicas
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={iconPills === "2" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setIconPills("2");
                            }}
                          >
                            <i className="now-ui-icons shopping_cart-simple"></i>
                            Colegios
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={iconPills === "3" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setIconPills("3");
                            }}
                          >
                            <i className="now-ui-icons shopping_shop"></i>
                            Malls
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent
                        className="text-center"
                        activeTab={"iconPills" + iconPills}
                      >
                        <TabPane tabId="iconPills1">
                          <ul>
                            <li> Meds </li>
                            <li>Alemana</li> 
                            <li>Santa María</li> 
                        </ul>
                        </TabPane>
                        <TabPane tabId="iconPills2">
                          <ul>
                            <li>Craighouse</li>
                            <li>Monte Tabor y Nazaret</li>  
                            <li>Everest</li>
                            <li>Santiago College</li>
                            <li>Newland </li>
                            <li>Los Alerces</li>
                            <li>Huinganal</li>
                            <li>The Mayflower School</li>
                            <li>Nido de Águilas</li>
                          </ul>
                        </TabPane>
                        <TabPane tabId="iconPills3">
                          <ul>
                            <li>Paseo Los Trapenses</li>
                            <li>VIVO Los Trapenses</li>
                            <li>Puerta Los Trapenses</li>
                            <li>Espacio Urbano</li>
                            <li>Portal La Dehesa</li>
                            <li>Futuro Mall Megacentro</li>
                          </ul>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section-contact-us text-center">
          <Container>
            <h2 className="title">Contáctanos</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Escribe un mensaje..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterApp />
      </div>
    </>
  );
}

export default VistaLomas;
