const PARAMETERS_DATA = [
  {
    name: "uppercase",
    label: "Uppercase",
  },
  {
    name: "lowercase",
    label: "Lowercase",
  },
  {
    name: "numbers",
    label: "Numbers",
  },
  {
    name: "symbols",
    label: "Symbols",
  },
];

const Parameters = ({ parameter, setParameters }) => {
  const handleOnChange = (event, props) => {
    const auxObject = {};
    auxObject[props] = event.target.checked;
    setParameters({ ...parameter, ...auxObject });
  };
  return (
    <div className="flex flex-col">
      <ul className="sm:text-lg">
        {PARAMETERS_DATA.map((parameter) => {
          return (
            <li
              className="flex items-center w-full gap-4 mb-1 last:mb-0"
              key={parameter.name}
            >
              <input
                className="w-5 h-5 bg-transparent rounded-sm focus:ring-0 checked:border-none border-primary checked:bg-primary text-primary"
                onChange={(e) => handleOnChange(e, parameter.name)}
                type="checkbox"
                name={parameter.name}
                id={parameter.name}
                defaultChecked={true}
              />
              <label htmlFor={parameter.name}>{parameter.label}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Parameters;
