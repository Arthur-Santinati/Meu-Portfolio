import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsTwitter, BsFacebook, BsInstagram, BsSkype, BsLinkedin } from 'react-icons/bs';

import './style.scss';

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="container d-lg-flex py-4">
                <div className="me-lg-auto text-center text-lg-start container-footer">
                    <div className="copyright">
                        &copy; Copyright. All Rights Reserved
                    </div>

                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/ */}
                        Designed by <b>Arthur Santinati</b> using <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}