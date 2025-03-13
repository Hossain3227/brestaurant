import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const axiosSecure = UseAxiosSecure();
    const { user} = UseAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;