import React, { PropTypes } from 'react'
import SettingsModal from '../components/settings-modal'
import { fetchSettings, persistSettings } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = ({ settings }) => ({ settings })

const mapDispatchToProps = dispatch => ({
  saveSettings(settings){
    console.log('saving ', settings)
    dispatch(persistSettings(settings))
  },
  
  fetchSettings() {
    dispatch(fetchSettings())
  }
})

const SettingsModalContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsModal)

export default SettingsModalContainer
