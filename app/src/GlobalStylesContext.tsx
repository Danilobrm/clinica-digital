// import React, {createContext, useContext, useState} from 'react';
// import {StyleSheet} from 'react-native';

// // Create context for global styles
// // const GlobalStylesContext = createContext();

// // Custom hook to use global styles
// export const useGlobalStyles = () => useContext(GlobalStylesContext);

// // Provider component to wrap your app and provide global styles
// export const GlobalStylesProvider = ({children, default}) => {
//   const [colors, setColors] = useState(default);

//   const globalStyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.primaryColor,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       fontSize: 20,
//       color: secondaryColor,
//     },
//   });

//   return (
//     <GlobalStylesContext.Provider value={{globalStyles, setColors}}>
//       {children}
//     </GlobalStylesContext.Provider>
//   );
// };
