import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";
import Timer from "./Timer";

const mapStateToProps = (state) => ({
  value: state.timer.value,
  step: state.timer.step.label,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementm: (step) => dispatch(timerActions.increment(step)),
  onDecrement: (step) => dispatch(timerActions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
