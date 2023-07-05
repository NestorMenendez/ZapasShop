export type Props = {
    children : React.ReactNode; // Salva todo menos retornos de NULL o UNDEFINIED
}
export type ProductProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    img: [string];
}
export type UserProps = {
    user: string;
    password: string;
}
export type CartProps = {
    id: number;
    size: number;
    quantity: number;
    user: string;
    commandId: string;
}
export type CartContextReducerAction =
| { type: 'ADD_TO_CART', product: CartProps }
| { type: 'DELETE_FROM_CART', product: cartProps[] };


export type ButtonAction = {
	initialValue?: number;
	label: string;
	action: (event: MouseEvent<HTMLButtonElement>) => void;
	id: number;
	display: string;
};
