export default function (container, payload) {
  if (payload === undefined) {
    container.setState({
      loading: true,
    });
  } else if (payload instanceof Error) {
    container.setState({
      loading: false,
      error: payload,
    });
  } else if (typeof payload === 'object') {
    container.setState({
      loading: false,
      error: null,
      data: {
        ...container.state.data,
        ...payload,
      },
    });
  } else throw new Error();
}