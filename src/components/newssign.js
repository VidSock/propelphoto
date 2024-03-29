
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

input::placeholder {
  color: #fff !important;
  filter: drop-shadow(0px 0px 6px var(--primary-color));
}







    @media (max-width: 58em) {


      .signbox input{margin-bottom:10px; margin-right:20px;}

    }


}

`


const NewsletterPage = () => (


<CustomBox style={{}}>
<form
          className="news-form"
          action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

            <div className="contact-form" style={{ padding:'0', textAlign:'center', color:'#fff', margin:'0 auto', justifySelf:'center'}}>

              <div className="blocker" style={{width:'100%', height:'100%', borderRadius:'12px'}}></div>

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <span style={{fontSize:'120%'}}><strong>Get a quote right now</strong></span><br />
              
              <span style={{fontSize:'85%'}}>Provide your email to get started</span><br /><br />

             <div className="signbox" style={{display:'flex',}}>

               <label style={{color:'#fff'}} htmlFor="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{}}/></label>
                      
            


  

            {/* <button
              className="button"
              type="submit"
      
            >
              <span style={{}}>Follow Todd</span> {" "}
              <span className="icon -right" style={{paddingLeft:'.5rem'}}>
                <RiSendPlane2Line />
              </span>
            </button> */}
&nbsp;&nbsp;
            <button
              className="button"
              
              type="submit"
              style={{marginTop:'-8px'}}
            >
              Get Quote{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{fontSize: '70%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#ccc'}}>
            <Link to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy</Link>
           
            </div>
<br />
</div>

        </form>
        
</CustomBox>
  
)

  export default NewsletterPage