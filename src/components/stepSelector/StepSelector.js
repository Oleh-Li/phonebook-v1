import Select from "react-select";
import { connect } from "react-redux";
import * as timerActions from '../../redux/timerActions'

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
];

const StepSelector = ({value, onChange}) => (
  <Select options={options} value={value} onChange={onChange} />
);

const mapStateToProps = (state)=>({
  value: state.timer.step
})

const mapDispatchToProps = (dispatch)=>({
  onChange: (step)=>dispatch(timerActions.changeStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
