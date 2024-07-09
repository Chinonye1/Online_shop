import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../Component/CartContext';

const InputField = ({ label, type = 'text', placeholder, onChange, value, name }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  </div>
);

const ShippingAddressForm = () => {
  const navigate = useNavigate();
  const { form, handleChange, setView } = useCartContext(); // Use context
  console.log(form);

  const handleSubmit = (event) => {
    event.preventDefault();
    setView('checkout');
    navigate('/checkout/paymentForm'); // Navigate to checkout page
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First Name" placeholder="First Name" onChange={handleChange} value={form.firstName} name="firstName" />
          <InputField label="Middle Name" placeholder="Middle Name" onChange={handleChange} value={form.middleName} name="middleName" />
          <InputField label="Surname" placeholder="Surname" onChange={handleChange} value={form.surname} name="surname" />
          <InputField label="Home Address" placeholder="Home Address" onChange={handleChange} value={form.homeAddress} name="homeAddress" />
          <InputField label="Office Address" placeholder="Office Address" onChange={handleChange} value={form.officeAddress} name="officeAddress" />
          <InputField label="Pick Up Point" placeholder="Pick Up Point" onChange={handleChange} value={form.pickUpPoint} name="pickUpPoint" />
          <InputField label="Country Code" placeholder="+234" onChange={handleChange} value={form.countryCode} name="countryCode" />
          <InputField label="Phone Number" placeholder="Phone Number" type="tel" onChange={handleChange} value={form.phoneNumber} name="phoneNumber" />
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
        >
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
