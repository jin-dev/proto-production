import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useFetch<T>(url:string) {
    const { data, error } = useSWR<T>(url, fetcher);
    return { data, error, isLoading: !data && !error };
}

