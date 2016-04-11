import React, { PropTypes } from 'react'
import SettingsModal from '../components/settings-modal'
import { saveSettings } from '../actions'
import { connect } from 'react-redux'
import { save } from '../db/settings-dao'

const mapStateToProps = ({ settings }) => ({ settings })

const mapDispatchtoProps = dispatch => ({
  save(settings){
    console.log('saving ', settings)
    save(settings).subscribe(
      saved => {
        console.log('saved is ', saved)
        dispatch(saveSettings({srcDir: saved.srcDir}))
      }
    )
  }
})

const SettingsModalContainer = connect(mapStateToProps, mapDispatchtoProps)(SettingsModal)

export default SettingsModalContainer
