import React from 'react';

const InputField = ({ label, placeholder, type = 'text' }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  </div>
);

const ShippingAddressForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First Name" placeholder="First Name" />
          <InputField label="Middle Name" placeholder="Middle Name" />
          <InputField label="Surname" placeholder="Surname" />
          <InputField label="Home Address" placeholder="Home Address" />
          <InputField label="Office Address" placeholder="Office Address" />
          <InputField label="Pick Up Point" placeholder="Pick Up Point" />
          <InputField label="Country Code" placeholder="+234" />
          <InputField label="Phone Number" placeholder="Phone Number" type="tel" />
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
        >
          Proceed to Cart
        </button>
      </form>
    </div>
  );
};

export default ShippingAddressForm;