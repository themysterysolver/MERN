import React, { useEffect } from 'react'

const Footer = () => {
  useEffect(()=>{
    console.log("I am a footer");
  },[])
    return (
      <footer class="p-3 mb-2 bg-dark text-white text-center" style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000
      }}>
        <div><a  class=" text-light bg-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://auth0.com/resources/webinars/modern-authentication-demystified?utm_source=google&utm_campaign=apac_india_ind_all_ciam-all_dg-ao_auth0_search_google_text_kw_DSA_utm2&utm_medium=cpc&utm_id=aNK4z000000UD6HGAW&gad_source=1&gbraid=0AAAAACmv60UuNzmS3BH46OQ0HTUo-16vD&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVr_J249udR-YwE0jNg9vLmfQf_tNelVAxtPb-TA-XqxpZkFdwwLZpEaAtx-EALw_wcB">authentication system </a>| <a href="https://github.com/themysterysolver" class="text-light bg-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">themysterysolver</a></div>
      </footer>
    );
  };
  
  export default Footer;
  