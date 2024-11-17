export const  formConfig = {
    residential: {
      title: "Residential Property Details",
      fields: [
        { label: "Number of Bedrooms", name: "bedroomCount", type: "number" },
        { label: "Number of Bathrooms", name: "bathroomCount", type: "number" },
        { label: "Square Feet", name: "squareFeet", type: "number" }
      ]
    },
    commercial: {
      title: "Commercial Property Details",
      fields: [
        { label: "Business Name", name: "businessName", type: "text" },
        { label: "Office Space (sq ft)", name: "officeSpace", type: "number" },
        { label: "Parking Spaces", name: "parkingSpaces", type: "number" }
      ]
    }
  };