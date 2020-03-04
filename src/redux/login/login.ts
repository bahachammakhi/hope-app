import createRedux from '../../utils/createRedux';

interface state {
  modalOpened: boolean;
}

const INITIAL_STATE = {
  modalOpened: false,
};

const modalHandler = (state: state) => ({
  ...state,
  modalOpened: !state.modalOpened,
});

const { actions, types: loginTypes, reducer } = createRedux(INITIAL_STATE, {
  modalHandler,
});

export default actions;
export { loginTypes, reducer };
