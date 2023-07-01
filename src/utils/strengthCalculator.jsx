const strengthCalculator = (length, uppercase, lowercase, numbers, symbols) => {
  const strengthCriteria = [
    { label: "Very Weak", color: "#e43715" },
    { label: "Weak", color: "#e49b15" },
    { label: "Moderate", color: "#e4dd15" },
    { label: "Strong", color: "#007f2c" },
    { label: "Very Strong", color: "#007ce9" },
  ];

  let strengthValue = 0;
  strengthValue =
    strengthValue +
    (length >= 12 && 1) +
    (uppercase && 1) +
    (lowercase && 1) +
    (numbers && 1) +
    (symbols && 1);
  const { label, color } =
    strengthCriteria[strengthValue > 0 ? strengthValue - 1 : 0];
  return { label, color, strengthValue, strengthCriteria };
};

export default strengthCalculator;
