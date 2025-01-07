import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AutoComplete from 'react-google-autocomplete';

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

  const cities = [
    'Balneário Camboriú', 'Camboriú', 'Itajaí', 'Brusque', 'Gaspar', 'Ilhota',
    'Blumenau', 'Navegantes', 'Penha', 'Balneário Piçarras', 'São João Batista',
    'Barra Velha', 'Canelinha', 'Tijucas', 'Bombas', 'Bombinhas', 'Porto Belo',
    'Itapema', 'Florianópolis', 'Joinville', 'São José'
  ] as const;

  type City = typeof cities[number];

  const handleAddressSelect = (place: google.maps.places.PlaceResult) => {
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
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC6Q2E7rUGTeW4_RuTK7Pdvu2SXxTmplA4&libraries=places";
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

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Solicitação de Entregas</h1>

      <div className="space-y-4 w-full max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Selecione a Cidade:</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value as City)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
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
          <label className="block text-sm font-medium text-gray-700">Endereço de Entrega:</label>
          <AutoComplete
            apiKey="AIzaSyC6Q2E7rUGTeW4_RuTK7Pdvu2SXxTmplA4"
            onPlaceSelected={handleAddressSelect}
            options={{
              types: ['address'],
              componentRestrictions: { country: 'BR' },
            }}
            defaultValue={address}
            placeholder="Digite o endereço"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Ex: 123"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Complemento:</label>
          <input
            type="text"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            placeholder="Apto, Bloco, etc. (opcional)"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quantidade de Pedidos:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-x-4">
          <button
            onClick={handleCalculatePrice}
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Calcular Valor
          </button>
        </div>

        {calculatedPrice !== null && (
          <div className="mt-4 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Valor Total: R${calculatedPrice}</h3>
            <div className="space-x-4">
              <button
                onClick={handleConfirmOrder}
                className="py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
              >
                Confirmar
              </button>
              <button
                onClick={resetForm}
                className="py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Pedidos</h2>
        <ul className="space-y-2">
          {orders.map((order) => (
            <li key={order.id} className="text-gray-700">
              Pedido #{order.id}: {order.quantity} itens para {order.address} - R${order.price}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-4">Total a Pagar: R${totalAmount}</h3>

        <Link to="/" className="mt-4 text-indigo-600 hover:text-indigo-700">Voltar</Link>
      </div>
    </div>
  );
};

export default GestaoPedidos;
