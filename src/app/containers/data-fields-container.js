import { toggleShowingDatafields } from '../actions'
import { connect } from 'react-redux'
import DataFields from '../components/data-fields'

const mapStateToProps = ({ dataFields }) => ({ dataFields })

const mapDispatchToProps = dispatch => ({
  close() {
    dispatch(toggleShowingDatafields())
  }
})

const DataFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(DataFields)
export default DataFieldsContainer