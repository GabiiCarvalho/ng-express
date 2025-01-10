import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AutoComplete from 'react-google-autocomplete';
import "../index.css";

const GestaoPedidos: React.FC = () => {
  const [orders, setOrders] = useState<{ id: number; address: string; quantity: number; price: number }[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState<
    | 'Balneário Camboriú'
    | 'Camboriú'
    | 'Itajaí'
    | 'Brusque'
    | 'Gaspar'
    | 'Ilhota'
    | 'Blumenau'
    | 'Navegantes'
    | 'Penha'
    | 'Balneário Piçarras'
    | 'São João Batista'
    | 'Barra Velha'
    | 'Canelinha'
    | 'Tijucas'
    | 'Bombas'
    | 'Bombinhas'
    | 'Porto Belo'
    | 'Itapema'
    | 'Florianópolis'
    | 'Joinville'
    | 'São José'
    | ''
  >('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  // Verifique se a variável process está definida
  const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

  // Use a variável de ambiente definida no Vite
  const someValue = import.meta.env.VITE_SOME_ENV_VARIABLE || 'default value';

  const cities = [
    'Balneário Camboriú', 'Camboriú', 'Itajaí', 'Brusque', 'Gaspar', 'Ilhota',
    'Blumenau', 'Navegantes', 'Penha', 'Balneário Piçarras', 'São João Batista',
    'Barra Velha', 'Canelinha', 'Tijucas', 'Bombas', 'Bombinhas', 'Porto Belo',
    'Itapema', 'Florianópolis', 'Joinville', 'São José'
  ] as const;

  type City = typeof cities[number];

  const handleAddressSelect = (place: google.maps.places.PlaceResult | null) => {
    if (!place) {
      alert("Endereço inválido. Por favor, tente novamente.");
      return;
    }

    setAddress(place.formatted_address || '');
    const cityComponent = place.address_components?.find((comp) =>
      comp.types.includes('administrative_area_level_2')
    );
    const selectedCity = cityComponent?.long_name || '';
    if (cities.includes(selectedCity as City)) {
      setCity(selectedCity as City);
    } else {
      setCity('');
    }
  };

  const handleCalculatePrice = () => {
    if (!city || !address || !number) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    const pricePerOrder = cityPrices[city] || 20;
    const totalPrice = quantity * pricePerOrder;
    setCalculatedPrice(totalPrice);
  };

  const handleConfirmOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      address: `${address}, ${number} - ${complement || 'Sem complemento'}`,
      quantity,
      price: calculatedPrice || 0,
    };
    setOrders([...orders, newOrder]);
    resetForm();
  };

  const resetForm = () => {
    setAddress('');
    setNumber('');
    setComplement('');
    setQuantity(1);
    setCity('');
    setCalculatedPrice(null);
  };

  const totalAmount = orders.reduce((sum, order) => sum + order.price, 0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const cityPrices = {
    'Balneário Camboriú': 15,
    'Camboriú': 20,
    'Itajaí': 30,
    'Brusque': 100,
    'Gaspar': 100,
    'Ilhota': 100,
    'Blumenau': 120,
    'Navegantes': 60,
    'Penha': 80,
    'Balneário Piçarras': 100,
    'São João Batista': 120,
    'Barra Velha': 120,
    'Canelinha': 100,
    'Tijucas': 80,
    'Bombas': 120,
    'Bombinhas': 120,
    'Porto Belo': 70,
    'Itapema': 50,
    'Florianópolis': 180,
    'Joinville': 150,
    'São José': 130,
  };

  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  return (   
      <div className="gestao-container">
        <div className="gestao-card">
          <h1 className="gestao-title">Solicitação de Entregas</h1>
    
          <div className="space-y-4 w-full max-w-md">
            <div>
              <label className="gestao-label">Selecione a Cidade:</label>
              <div className="form-container">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as City)}
                className="gestao-select"
              >
                <option value="">Selecione</option>
                {cities.map((cityName) => (
                  <option key={cityName} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
    
            <div>
              <label className="gestao-label">Endereço de Entrega:</label>
              <AutoComplete
                apiKey={GOOGLE_API_KEY}
                onPlaceSelected={handleAddressSelect}
                options={{ types: ['address'], componentRestrictions: { country: 'BR' } }}
                defaultValue={address}
                placeholder="Digite o endereço"
                className="gestao-autocomplete"
              />
            </div>
    
            <div>
              <label className="gestao-label">Número:</label>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Ex: 123"
                className="gestao-input"
              />
            </div>
    
            <div>
              <label className="gestao-label">Complemento:</label>
              <input
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                placeholder="Apto, Bloco, etc. (opcional)"
                className="gestao-input"
              />
            </div>
    
            <div>
              <label className="gestao-label">Quantidade de Pedidos:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="gestao-input"
              />
            </div>
    
            <button onClick={handleCalculatePrice} className="gestao-button">
              Calcular Valor
            </button>
            </div>
    
            {calculatedPrice !== null && (
              <div className="mt-4 text-center">
                <h3 className="gestao-total">Valor Total: R${calculatedPrice}</h3>
                <div className="space-x-4">
                  <button onClick={handleConfirmOrder} className="gestao-button-confirm">
                    Confirmar
                  </button>
                  <button onClick={resetForm} className="gestao-button-cancel">
                    Cancelar
                  </button>
                </div>
              </div>
            )}
    
            <h2 className="gestao-title text-orange-600">Pedidos</h2>
            <ul className="gestao-order-list">
              {orders.map((order) => (
                <li key={order.id}>
                  Pedido #{order.id}: {order.quantity} itens para {order.address} - R${order.price}
                </li>
              ))}
            </ul>
    
            <h3 className="gestao-total">Total a Pagar: R${totalAmount}</h3>
    
            <Link to="/" className="gestao-link">Voltar</Link>
          </div>
        </div>
      </div>
    );    
};

export default GestaoPedidos;
