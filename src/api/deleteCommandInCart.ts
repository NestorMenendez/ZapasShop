import { getCartFromLocalStorage } from "./getCartFromLocalStorage"

const deleteCommandInCart = (commandId: string) => {

    const cartFromLocalStorage = getCartFromLocalStorage();
    const updatedCartFromLocalStorage = cartFromLocalStorage.filter ( commandLine => commandLine.commandId != commandId);

    localStorage.setItem ('products', JSON.stringify(updatedCartFromLocalStorage));

    return updatedCartFromLocalStorage
}

export default deleteCommandInCart