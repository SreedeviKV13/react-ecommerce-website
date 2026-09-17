import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useContext } from 'react';

import { UserContext } from '../context/UserContext';


function LocalStorageManager() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const { user } = useContext(UserContext);
    const orders = useSelector(
        (state) => state.orders.orders
    );

    useEffect(() => {

        localStorage.setItem(
            'orders',
            JSON.stringify(orders)
        );

    }, [orders]);
    
    // Save cart
    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);


    // Save wishlist
    useEffect(() => {

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlistItems)
        );

    }, [wishlistItems]);


    // Save user
    useEffect(() => {

        if (user) {

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

        } else {

            localStorage.removeItem("user");

        }

    }, [user]);


    return null;
}

export default LocalStorageManager;