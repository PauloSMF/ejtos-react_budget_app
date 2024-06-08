import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

import styles from '../styles/styles.module.css'

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState(currency);
    const [displayMenu, setDisplayMenu] = useState(false);

    const buttonText = `Currency (${currency} ${currency === '$' ? 'Dollar' : currency === '£' ? 'Pound' : currency === '€' ? 'Euro' : 'Ruppee'})`;
    const handledChangeCurrency = (newCurr) => {
        setNewCurrency(newCurr);
        setDisplayMenu(!displayMenu);
    };

    useEffect(() => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }, [newCurrency, dispatch]);


    return (
        <div className="dropdown">
            <button
                className={`btn dropdown-toggle btn-lg ${styles.styledDropdown} mb-1`}
                type="button"
                id="dropdownCurrencyButton"
                data-toggle="dropdown"
                onClick={() => setDisplayMenu(!displayMenu)}
            >
                {buttonText}
            </button>
            <div className={`dropdown-menu ${styles.styledDropdownList}`} style={{ display: displayMenu ? 'block' : 'none' }}>
                <div className={`dropdown-item ${styles.styledDropdownItem}`} onClick={() => handledChangeCurrency('$')}>$ Dollar</div>
                <div className={`dropdown-item ${styles.styledDropdownItem}`} onClick={() => handledChangeCurrency('£')}>£ Pound</div>
                <div className={`dropdown-item ${styles.styledDropdownItem}`} onClick={() => handledChangeCurrency('€')}>€ Euro</div>
                <div className={`dropdown-item ${styles.styledDropdownItem}`} onClick={() => handledChangeCurrency('₹')}>₹ Ruppee</div>
            </div>
        </div>
    );
};

export default CurrencyDropdown;
