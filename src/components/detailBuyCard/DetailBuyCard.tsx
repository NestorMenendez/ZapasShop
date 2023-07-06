import { useContext } from "react"
import { ButtonAction} from "../../types/types";

import CartContext from "../../context/CartContext"

import "./detailBuyCard.styles.css"
import AuthContext from "../../context/AuthContext";


const DetailBuyCard = ({counter, setCounter, idNumber}: { counter: number, setCounter: React.Dispatch<React.SetStateAction<number>>, idNumber: number }) => {

	const {cartState, handleBuy} = useContext (CartContext);
	const {userLogged} = useContext (AuthContext);
	
	const increaseValue = (): void => {
		setCounter((counter: number) => counter + 1);
	};
	const substractValue = (): void => {
		if (counter === 1) return;
		setCounter((counter: number) => counter - 1);
	};
	const resetValue = (): void => {
		setCounter((1));
	};
	const arrayButtons: ButtonAction[] = [
		{ label: "Increment", id: 1, action: increaseValue, display: "+" },
		{ label: "ResetValue", id: 3, action: resetValue, display: "R" },
		{ label: "Decrement", id: 2, action: substractValue, display: "-" },
	];
	return (
		<div className="DetailBuyCard-container">
			<div className="row">
				<div className="col d-flex-column justify-content-center align-items-center">
					<div className="DetailBuyCard-container__counter d-flex justify-content-center align-items-center">{counter}</div>
					<div className="d-flex justify-content-center align-items-center ">
						{arrayButtons.map((button) => (
							<button className="DetailBuyCard-container__basic-buttons btn btn-secondary m-1 mb-3" onClick={button.action} key={button.id} >{button.display}</button>
						))}
					</div>
				</div>
				<div className="col-8 d-flex justify-content-center align-items-center">
					<button type="button" className="DetailBuyCard-container__buy-button btn btn-success" onClick={() => handleBuy(idNumber,counter, userLogged)}>
                		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart pb-2" viewBox="0 0 16 16">
  						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
						</svg>
						{` Add to cart`}
              		</button>
				</div>
			</div>
		</div> 
	)
}

export default DetailBuyCard