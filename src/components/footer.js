import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import './footer.css'
import { Link } from "gatsby";

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Footer () {
    return (
        <div>
            <footer className="footer-bs">
                    <div className="row">

                        <div className="col-md-3 footer-brand animated fadeInLeft">
                            <h2>Logo</h2>
                            <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                            <p>© 2020 BS3 UI Kit, Todos los derechos reservados</p>
                        </div>

                        <div className="col-md-3 footer-nav animated fadeInUp"> 
                            <div className = "col-md-6">
                                <ul className = "list">
                                    <li><a> <Link to ="/">Sobre nosotros</Link></a></li>
                                    <li><a> <Link to ="/">Contacto</Link></a></li>
                                    <li><a> <Link to ="/">Términos y condiciones</Link></a></li>
                                    <li><a> <Link to ="/">Política de privacidad</Link></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2 footer-social animated fadeInDown">
                            <h4>¡Síguenos!</h4>
                            <ul>
                                <li><a><Link to ="https://www.facebook.com/FuneralesRafaelPaz/">Facebook</Link></a></li>
                                <li><a><Link to = "/">Instagram</Link></a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 footer-ns animated fadeInRight">
                            <h4>Newsletter</h4>
                            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        
                            <div className="input-group">

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text>?</InputGroup.Text>
                            </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Append>
                                <InputGroup.Text>Buscar</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>


                                <span class="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </button>
                                </span>
                            </div>
                 
                        </div>

             </div>
         </footer>
         <section><p>Diseñado por Roberto J.</p></section>
     </div>
    )
}