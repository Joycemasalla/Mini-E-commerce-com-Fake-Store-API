// src/pages/Cart.jsx - Versão com debug para identificar o problema
import React from 'react';
import { Link } from 'react-router-dom';
import {
    CartContainer,
    CartHeader,
    BackButton,
    CartTitle,
    ItemsCount,
    EmptyCartMessage,
    ContinueShoppingButton,
    CartContent,
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
    SummaryTitle,
    SummaryItem,
    SummaryActions,
    TotalText,
    CheckoutButton,
    OrderSummaryCard
} from './Cart.styles';

function Cart({ cartItems, removeFromCart, addToCart, decrementQuantity }) {
    // Debug: Log para verificar se as funções estão sendo recebidas
    console.log('Cart Props:', {
        cartItems,
        addToCart: typeof addToCart,
        decrementQuantity: typeof decrementQuantity,
        removeFromCart: typeof removeFromCart
    });

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 20;
    const total = subtotal + shipping;
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // Funções com debug
    const handleIncrement = (item) => {
        console.log('Incrementing item:', item);
        if (addToCart) {
            addToCart(item);
        } else {
            console.error('addToCart function not provided');
        }
    };

    const handleDecrement = (itemId) => {
        console.log('Decrementing item ID:', itemId);
        if (decrementQuantity) {
            decrementQuantity(itemId);
        } else {
            console.error('decrementQuantity function not provided');
        }
    };

    const handleRemove = (itemId) => {
        console.log('Removing item ID:', itemId);
        if (removeFromCart) {
            removeFromCart(itemId);
        } else {
            console.error('removeFromCart function not provided');
        }
    };

    return (
        <CartContainer>
            <CartHeader>
                <BackButton to="/">
                    ← Continuar Comprando
                </BackButton>
                <CartTitle>Carrinho de Compras</CartTitle>
                {cartItems.length > 0 && (
                    <ItemsCount>
                        {itemCount} {itemCount === 1 ? 'item' : 'itens'}
                    </ItemsCount>
                )}
            </CartHeader>

            {cartItems.length === 0 ? (
                <EmptyCartMessage>
                    <div className="empty-icon">🛒</div>
                    <h2>Seu carrinho está vazio</h2>
                    <p>Que tal adicionar alguns produtos incríveis?</p>
                    <ContinueShoppingButton to="/">
                        Explorar Produtos
                    </ContinueShoppingButton>
                </EmptyCartMessage>
            ) : (
                <CartContent>
                    <CartItemsList>
                        {cartItems.map((item) => (
                            <CartItemCard key={item.id}>
                                <CartItemImage src={item.image} alt={item.title} />
                                <CartItemInfo>
                                    <CartItemTitle>{item.title}</CartItemTitle>
                                    <CartItemPrice>R$ {item.price.toFixed(2)} (unitário)</CartItemPrice>
                                    
                                    <div className="item-actions">
                                        <QuantityControl>
                                            <QuantityButton 
                                                onClick={() => handleDecrement(item.id)}
                                                disabled={item.quantity <= 1}
                                            >
                                                −
                                            </QuantityButton>
                                            <QuantityDisplay>{item.quantity}</QuantityDisplay>
                                            <QuantityButton onClick={() => handleIncrement(item)}>
                                                +
                                            </QuantityButton>
                                        </QuantityControl>
                                        
                                        <RemoveButton onClick={() => handleRemove(item.id)}>
                                            🗑️ Remover
                                        </RemoveButton>
                                    </div>
                                    
                                    <div className="item-subtotal">
                                        Subtotal: <strong>R$ {(item.price * item.quantity).toFixed(2)}</strong>
                                    </div>
                                </CartItemInfo>
                            </CartItemCard>
                        ))}
                    </CartItemsList>

                    <CartSummary>
                        <OrderSummaryCard>
                            <SummaryTitle>Resumo do Pedido</SummaryTitle>
                            
                            {/* Debug: Mostrar valores calculados */}
                            <div style={{fontSize: '12px', color: '#666', marginBottom: '1rem'}}>
                                Debug - Subtotal: {subtotal.toFixed(2)} | Frete: {shipping} | Total: {total.toFixed(2)}
                            </div>
                            
                            <SummaryItem>
                                <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
                                <span>R$ {subtotal.toFixed(2)}</span>
                            </SummaryItem>
                            
                            <SummaryItem>
                                <span>Frete</span>
                                <span className={shipping === 0 ? 'free-shipping' : ''}>
                                    {shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2)}`}
                                </span>
                            </SummaryItem>
                            
                            {shipping === 0 && (
                                <div className="shipping-message">
                                    🎉 Parabéns! Você ganhou frete grátis
                                </div>
                            )}
                            
                            <SummaryActions>
                                <TotalText>
                                    <span>Total</span>
                                    <span>R$ {total.toFixed(2)}</span>
                                </TotalText>
                                
                                <CheckoutButton onClick={() => alert('Funcionalidade de Checkout não implementada!')}>
                                    Finalizar Compra
                                </CheckoutButton>
                                
                                <div className="secure-checkout">
                                    🔒 Compra 100% segura
                                </div>
                            </SummaryActions>
                        </OrderSummaryCard>
                    </CartSummary>
                </CartContent>
            )}
        </CartContainer>
    );
}

export default Cart;