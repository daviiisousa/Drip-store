import "./Input.css";

const InputGroup = ({ placeholder, buttonText, onClick }) => {
  return (
    <div className="input-group">
      <input type="text" placeholder={placeholder} />
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default InputGroup;
