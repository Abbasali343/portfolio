import "../assets/styles/Main.css";

export default function ({value,string}) {
  return (
    <>
      <div className="values-container">
        <h1 className="value">{value}</h1>
        <h1 className="string">{string}</h1>
      </div>
    </>
  );
}
