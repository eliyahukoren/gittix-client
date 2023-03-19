import buildClient from "../api/buildClient";

// Component Side Rendering
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("/api/users/currentuser");

  return <h1>Landing Page</h1>
}

// NextJS Server Side Rendering
LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;

};

export default LandingPage;
