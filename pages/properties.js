
import React, { useState } from 'react';
import { formConfig } from '../JSON/properties';
function PropertyForm() {
    const [propertyType, setPropertyType] = useState('residential'); // Default to 'residential'
    const [formData, setFormData] = useState({})
  
    // Handle property type change (residential/commercial)
    const handlePropertyTypeChange = (e) => {
      setPropertyType(e.target.value);
      setFormData({}); // Reset form data when switching property types
    };
  
    // Handle form input changes
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //     hello:console.log("name and Value", name
    //         ,value
    //     )
    //   }));

    //   console.log("form", formData)
    // };
  
    // Get the current form structure based on property type
    const currentFormConfig = formConfig[propertyType];

    console.log(currentFormConfig)
  
    return (
      <div>
        <h2>Select Property Type</h2>
        <select value={propertyType} onChange={handlePropertyTypeChange}>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
  
        <h3>{currentFormConfig.title}</h3>
        <form>
          {currentFormConfig.fields.map((field) => (
            <div key={field.name}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                // onChange={handleInputChange}
              />
            </div>
          ))}
        </form>
  
        <h4>Form Data (for debugging)</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    );
  }
  
  export default PropertyForm;