// src/App.jsx
import React, { useState, useEffect } from 'react'; // Importar useState e useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './GlobalStyles';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // 1. Estado para armazenar os itens do carrinho
  // Inicializa o carrinho com o que está no localStorage, ou um array vazio
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });

  // 2. useEffect para persistir o carrinho no localStorage sempre que cartItems mudar
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // 3. Função para adicionar um produto ao carrinho
  const addToCart = (product, quantity = 1) => {
    if (quantity <= 0) {
      toast.error('Quantidade inválida. Por favor, adicione pelo menos 1 item.');
      return;
    }
    setCartItems((prevItems) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        toast.info(`Quantidade de "${product.title}" atualizada no carrinho.`);

        // Se existir, incrementa a quantidade
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        toast.success(`"${product.title}" adicionado ao carrinho!`);

        // Se não existir, adiciona como um novo item com quantidade 1
        return [...prevItems, { ...product, quantity }]; // Usa a 'quantity' passada
      }
    });
  };

  // 4. Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      toast.warn("Item removido do carrinho.");
      return updatedItems;
    });
  };

  // 5. Função para decrementar a quantidade ou remover o item
  const decrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        toast.info(`Quantidade de "${existingItem.title}" retiradas no carrinho.`);
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Se a quantidade for 1, remove o item
        toast.warn(`"${existingItem.title}" removido do carrinho.`);
        return prevItems.filter((item) => item.id !== productId);
      }
    });
  };

  // 6: Estado para armazenar o token de autenticação
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem('authToken') || null;
  });

  // 6: Estado para armazenar as informações do usuário logado
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const userData = localStorage.getItem('loggedInUser');
    return userData ? JSON.parse(userData) : null;
  });
  // 6: Efeito para persistir o token e usuário no localStorage
  useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [authToken]);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  // NOVO: Função para lidar com o login
  const handleLogin = (token, user) => {
    setAuthToken(token);
    setLoggedInUser(user);
    toast.success(`Bem-vindo, ${user.username}!`);
  };

  // NOVO: Função para lidar com o logout
  const handleLogout = () => {
    setAuthToken(null);
    setLoggedInUser(null);
    toast.info("Você foi desconectado.");
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* Passa loggedInUser e handleLogout para o Header */}
      <Header
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />      <Routes>
        {/* Passa as funções e o estado do carrinho para os componentes de página */}
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/produto/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route
          path="/carrinho"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              addToCart={addToCart} // Passa para permitir incrementar do próprio carrinho
              decrementQuantity={decrementQuantity} // Passa para permitir decrementar
            />
          }
        />
        {/*Rota para a página de Login, passando handleLogin */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Rota para a página de Perfil, passando loggedInUser e authToken */}
        <Route
          path="/profile"
          element={
            <Profile
              loggedInUser={loggedInUser}
              authToken={authToken}
            />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 9999 }}
      />
    </BrowserRouter>
  );
}

export default App;