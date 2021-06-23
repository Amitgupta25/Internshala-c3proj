import React , {useRef} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

function Backgroundlayer(props)  {
    const modalrefe = useRef(null);
    const setmodal = props.setmodal;
    

            function closemodal(e) {
                if(modalrefe.current === e.target) {

                    setmodal("none");
                    document.body.style.overflow = "auto";
                    

                }
            }

            const styles ={
                display: props.modalvalue

            }

            return (
                <div className="overlay" style={styles} ref={modalrefe} onClick={closemodal}>
                        <div className="modal">
                            <div className="leftmodal">
                            <i className="fas fa-space-shuttle"></i>
                            </div>
                            <div className="rightmodal">
                                <h3 className="modalheading">Excel in maths and science.</h3>
                                <div className="links">
                                  <p>  <a href="#" className="modallinkfb" > < FacebookIcon style= {{marginRight:"1rem"}}/> Join Using Facebook</a>  </p>
                                  <p>  <a href="#" className="modallinkgoogle">Join Using Google</a> </p>
                                  <p>  <a href="#" className="modallinkemail">< EmailIcon style= {{marginRight:"1rem"}} />Join Using Email</a>   </p>
                                
                                </div>
                                <p className="existing">Existing User?<a href="">Log in</a></p>
                            </div>
                        </div>

                    
                </div>
    )
}

export default Backgroundlayer
