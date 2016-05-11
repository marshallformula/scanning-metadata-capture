import React, { PropTypes } from 'React'
import { Map } from 'immutable'
import classNames from 'classnames'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const DataFields = React.createClass({

  propTypes: {
    fields: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      data: Map({
        addFieldOverlay: false,
        fieldText: ''
      })
    }
  },

  handleInput(e) {
    let val = e.target.value
    this.setState(({ data }) => ({ data: data.set('fieldText', val )}))
  },
  
  handleSave() {
    this.props.fields.fields.push(this.state.data.get('fieldText'))
    this.props.saveFields(this.props.fields)
  },

  render() {

    const { showDataFields, close } = this.props

    const screenClass = classNames({
      showing: showDataFields
    })

    const buttonStyle = {
      margin: 12,
    };

    console.log('props', this.props)

    const data = this.state.data

    return (
      <div id="dfScreen" className={screenClass}>
        <div className="overlay">
          <Paper className="add-field" zDepth={3}>
            <TextField hintText="Enter Field" fullWidth={true} value={ data.get('fieldText') } onChange={this.handleInput} />
            <div className="buttons">
              <FlatButton label="Cancel" style={buttonStyle} />
              <RaisedButton label="Save" style={buttonStyle} primary={true} onClick={this.handleSave} />
            </div>
          </Paper>
        </div>
        <button className="btn btn-default btn-sm pull-right" onClick={close} >X</button>
        <h1 className="page-header">Data Fields</h1>
        <button className="btn btn-link"><span className="fa fa-plus"></span> add field</button>



      </div>
    )
  }
})

export default DataFields
