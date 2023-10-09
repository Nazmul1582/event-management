import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);


const authInfo = { name: "Md. Nazmul Hasan"}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;