const Timer = ({ value, step, onIncrementm, onDecrement }) => (
  <div>
    <button type="button" onClick={() => onIncrementm(step)}>
      +PLUS+
    </button>
    <span>{value} Minutes</span>
    <button type="button" onClick={() => onDecrement(step)}>
      -MINUS-
    </button>
  </div>
);

export default Timer;
