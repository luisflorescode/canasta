import { useState, useEffect, useRef } from 'react';

const useFetch = (query) => {
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
      setState({ data: null, loading: true, error: null });
      const url = `${process.env.REACT_APP_API}${query}`;

      try {
        const response = await fetch(url);
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
  }, [query]);

  return state;
};

export default useFetch;
