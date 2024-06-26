import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";


const UseCart = () => {

    const { user } = UseAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]
};

export default UseCart;