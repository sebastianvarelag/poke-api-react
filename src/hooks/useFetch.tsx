import { useEffect, useState } from "react"

interface Props {
  url: string;
}

const localCache = {}


export const useFetch = ({url}:Props) => {

  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    error: null,
  })

  useEffect(() => {
    getFetch()
  
  }, [url])
  
  const setLoadingState = () =>{
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  
  const getFetch = async() => {

    setLoadingState();

    const resp = await fetch(url);
  
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: null,
      })
      return;
    }

    const data = await resp.json();

    setState(
      {
        data,
        isLoading: false,
        hasError: false,
        error: null,
      }
    )

  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  }
}
