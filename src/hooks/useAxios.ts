import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse} from 'axios';

interface AxiosState<T> {
    loading: boolean;
    data: T | null;
    error: AxiosError | null;
  }
  

const useAxios = <T> (url: string) => {
    const [state, setState] = useState<AxiosState<T>>({
        loading: true,
        data: null,
        error: null
    });

    const fetchData = async () => {
        try {
            const response: AxiosResponse = await axios.get(url);
            setState({
                loading: false,
                data: response.data,
                error: null
            })
        } catch (error: any) {
            setState({
                loading: false,
                data: null,
                error: error as AxiosError
            })
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { ...state };
};

export default useAxios;