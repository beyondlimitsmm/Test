export const FlipText = ({ text, textStyles, secondTextStyles }) => {
  return (
    <div className="flip-text">
      <p className={`text-block ${textStyles}`}>{text}</p>
      <p className={`text-block ${textStyles} ${secondTextStyles}`}>{text}</p>
    </div>
  );
};
