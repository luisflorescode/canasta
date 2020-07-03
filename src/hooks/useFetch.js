import { useState, useEffect, useRef } from 'react';

const useFetch = (link) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setState({ data: null, loading: true, error: null });
        const url = `${link}`;
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(proxyUrl + url);
        const data = await response.json();

        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error,
        });
      }
    };

    getData();
  }, [link]);

  return state;
};

export default useFetch;
