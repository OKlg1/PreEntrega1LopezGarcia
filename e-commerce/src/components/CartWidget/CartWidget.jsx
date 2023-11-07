import { AiOutlineShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
    return (
        <div className="d-flex" >
            <AiOutlineShoppingCart color="red" size={30} />
            <p className='mx-2'>1</p>
        </div>
    )
}