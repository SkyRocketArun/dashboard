import About from "./About";

const Dashboard = () => {
  const data = "Hello Everyone";
  return (
    <>
      <h1 className="text-center">This is Dashboard page </h1>
      <About data={data} />
    </>
  );
};
export default Dashboard;
