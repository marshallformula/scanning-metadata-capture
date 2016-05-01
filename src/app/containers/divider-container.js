import React from 'react'
import { connect } from 'react-redux'
import Divider from '../components/divider'
import { moveDivider, toggleModal, toggleShowingDatafields } from '../actions'

const mapStateToProps = state => {
  return {
    right: state.divider.get('right'),
    left: state.divider.get('left'),
    showModal: state.ui.showModal,
    settings: state.settings
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal() {
    dispatch(toggleModal())
  },

  moveDivider(positions){
    dispatch(moveDivider(positions))
  },

  forceModal() {
    dispatch(toggleModal())
  },

  openDF() {
    dispatch(toggleShowingDatafields())
  }
})

const Dividerer = connect(mapStateToProps, mapDispatchToProps)(Divider)

export default Dividerer
