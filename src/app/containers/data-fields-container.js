import { toggleShowingDatafields, persistFields } from '../actions'
import { connect } from 'react-redux'
import DataFields from '../components/data-fields'

const mapStateToProps = ({ fields, ui }) => ({
  fields,
  showDataFields: ui.showDataFields,
  showAddField: ui.showAddField
})

const mapDispatchToProps = dispatch => ({
  close() {
    dispatch(toggleShowingDatafields())
  },

  saveFields(fieldData) {
    dispatch(persistFields(fieldData))
  }
})

const DataFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(DataFields)
export default DataFieldsContainer