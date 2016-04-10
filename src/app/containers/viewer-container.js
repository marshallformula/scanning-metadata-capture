import Viewer from '../components/viewer'
import { connect } from 'react-redux'
import { rotateViewerImage } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  rotation: state.rotation,
  right: ownProps.right
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    rotateLeft(rotation) {
      dispatch(rotateViewerImage(rotation - 90))
    },
    rotateRight(rotation) {
      dispatch(rotateViewerImage(rotation + 90))
    }
  }
}

const ViewContainer = connect(mapStateToProps, mapDispatchToProps)(Viewer)

export default ViewContainer
