export const countries = [
    {
        id: 'c497228a-4b92-4ef0-83bd-a0d216a450e3',
        countryName: 'Argentina',
        countryCode: '+54'
    },
    {
        id: '80cc638f-98ad-4e58-b7bf-18bb1092e2c3',
        countryName: 'United States',
        countryCode: '+1'
    },
    {
        id: '9d4e8aa6-1620-481c-9f9f-6ad3cd7d1517',
        countryName: 'United Kingdom',
        countryCode: '+44'
    }
  ];
  
  export function getCountries() {
    return countries;
  }
  
  export function addCountry(country) {
    countries.push(country);
  }
  
  export function updateCountry(id, updatedCountry) {
    const index = countries.findIndex(c => c.id === id);
    if (index !== -1) {
        countries[index] = { ...countries[index], ...updatedCountry };
        return countries[index];
    }
    return null;
  }
  
  export function deleteCountry(id) {
    const index = countries.findIndex(c => c.id === id);
    if (index !== -1) {
        return countries.splice(index, 1)[0];
    }
    return null;
  }