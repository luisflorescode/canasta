import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
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
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(proxyUrl + url);
        const data = await response.json();

        if (isMounted.current) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };

    getData();
  }, [url]);

  return state;
};

export default useFetch;
