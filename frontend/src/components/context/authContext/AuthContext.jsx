import {createContext, useState, useMemo, useCallback} from 'react';
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleLoginOpen = useCallback(() => {
        setIsLoginOpen(true);
    }, []);

    const handleLoginClose = useCallback(() => {
        setIsLoginOpen(false);
    }, []);

    const handleRegisterOpen = useCallback(() => {
        setIsRegisterOpen(true);
    }, []);

    const handleRegisterClose = useCallback(() => {
        setIsRegisterOpen(false);
    }, []);

    const value = useMemo(() => ({
        isLoginOpen,
        handleLoginOpen,
        handleLoginClose,
        isRegisterOpen,
        handleRegisterOpen,
        handleRegisterClose
    }), [isLoginOpen, handleLoginOpen, handleLoginClose, isRegisterOpen, handleRegisterOpen, handleRegisterClose]);

    return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
    );
};

AuthProvider.proptypes = {
    children: PropTypes.node.isRequired
};
export default AuthProvider;
