export default function About(props) {
  return (
    <>  
      <h1 className="text-center">This is About pages </h1>
      <h1 className="text-center">{props.data}</h1>
    </>
  );
}
