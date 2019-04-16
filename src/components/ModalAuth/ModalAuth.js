import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Authentication from '../Authentication/Authentication';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import { modalActions, modalSelectors } from '../../redux/modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalAuth = props => {
  const { modalIsOpen, toggleModal } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={toggleModal}
      style={customStyles}
    >
      <Authentication items={[<SignIn />, <SignUp />]} />
    </Modal>
  );
};

const mapStateToProps = state => ({
  modalIsOpen: modalSelectors.modalIsOpen(state),
});
const mapDispatchToProps = {
  toggleModal: modalActions.toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAuth);
