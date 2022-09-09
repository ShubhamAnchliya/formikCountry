// import React, { useEffect } from "react";
// import "./style.css";
// import { useFormik } from "formik";
// import Select from "react-select";
// import csc from "country-state-city";

// export default function App() {
//   const addressFromik = useFormik({
//     initialValues: {
//       country: "India",
//       state: null,
//       city: null
//     },
//     onSubmit: (values) => console.log(JSON.stringify(values))
//   });

//   const countries = csc.getAllCountries();

//   const updatedCountries = countries.map((country) => ({
//     label: country.name,
//     value: country.id,
//     ...country
//   }));
//   const updatedStates = (countryId) =>
//     csc
//       .getStatesOfCountry(countryId)
//       .map((state) => ({ label: state.name, value: state.id, ...state }));
//   const updatedCities = (stateId) =>
//     csc
//       .getCitiesOfState(stateId)
//       .map((city) => ({ label: city.name, value: city.id, ...city }));

//   const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

//   useEffect(() => {}, [values]);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <Select
//           id="country"
//           name="country"
//           label="country"
//           className="selectTag"
//           options={updatedCountries}
//           value={values.country}
//           // onChange={value => {
//           //   setFieldValue("country", value);
//           //   setFieldValue("state", null);
//           //   setFieldValue("city", null);
//           // }}
//           onChange={(value) => {
//             setValues({ country: value, state: null, city: null }, false);
//           }}
//         />
//         <Select
//           id="state"
//           name="state"
//           className="selectTag"
//           options={updatedStates(values.country ? values.country.value : null)}
//           value={values.state}
//           onChange={(value) => {
//             setValues({ state: value, city: null }, false);
//           }}
//         />
//         <Select
//           id="city"
//           name="city"
//           className="selectTag"
//           options={updatedCities(values.state ? values.state.value : null)}
//           value={values.city}
//           onChange={(value) => setFieldValue("city", value)}
//         />
//         <button className="btnS" type="submit">Submit</button>
//         <p>{JSON.stringify(csc.get)}</p>
//       </form>
//     </div>
//   );
// }


import React from 'react'
import CountryState from './CountryCity'

const App = () => {
  return (
    <>
      <CountryState />
    </>
  )
}

export default App