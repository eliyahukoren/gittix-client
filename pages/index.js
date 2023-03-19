import axios from "axios";

// Component Side Rendering
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("/api/users/currentuser");

  return <h1>Landing Page</h1>
}

// NextJS Server Side Rendering
LandingPage.getInitialProps = async ( { req }) => {

  if( (typeof window === 'undefined') ){
    // we are on the server
    // request should be made to http://ingress-nginx-controller.ingress-nginx.srv
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );

    return data;
  }else{
    // we are on the browser!
    // request can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }

};

export default LandingPage;
