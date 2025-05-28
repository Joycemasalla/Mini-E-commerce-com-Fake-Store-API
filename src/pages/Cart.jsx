// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    CartContainer,
    CartTitle,
    EmptyCartMessage,
    ContinueShoppingButton,
    CartItemsList,
    CartItemCard,
    CartItemImage,
    CartItemInfo,
    CartItemTitle,
    CartItemPrice,
    QuantityControl,
    QuantityButton,
    QuantityDisplay,
    RemoveButton,
    CartSummary,
    TotalText,
    CheckoutButton
} from './Cart.styles';

// Recebe cartItems, removeFromCart, addToCart e decrementQuantity como props
function Cart({ cartItems, removeFromCart, addToCart, decrementQuantity }) {
    // Calcula o total dos itens no carrinho
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContainer>
            <CartTitle>Seu Carrinho de Compras</CartTitle>

            {cartItems.length === 0 ? (
                <EmptyCartMessage>
                    <p>Seu carrinho está vazio.</p>
                    <ContinueShoppingButton to="/">
                        Continuar Comprando
                    </ContinueShoppingButton>
                </EmptyCartMessage>
            ) : (
                <>
                    <CartItemsList>
                        {cartItems.map((item) => (
                            <CartItemCard key={item.id}>
                                <CartItemImage src={item.image} alt={item.title} />
                                <CartItemInfo>
                                    <CartItemTitle>{item.title}</CartItemTitle>
                                    <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                                    <QuantityControl>
                                        <QuantityButton onClick={() => decrementQuantity(item.id)}>-</QuantityButton>
                                        <QuantityDisplay>{item.quantity}</QuantityDisplay>
                                        <QuantityButton onClick={() => addToCart(item)}>+</QuantityButton>
                                    </QuantityControl>
                                    <RemoveButton
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remover
                                    </RemoveButton>
                                </CartItemInfo>
                            </CartItemCard>
                        ))}
                    </CartItemsList>

                    <CartSummary>
                        <TotalText>Total: R$ {total.toFixed(2)}</TotalText>
                        <CheckoutButton onClick={() => alert('Funcionalidade de Checkout não implementada!')}>
                            Finalizar Compra
                        </CheckoutButton>
                    </CartSummary>
                </>
            )}
        </CartContainer>
    );
}

export default Cart;