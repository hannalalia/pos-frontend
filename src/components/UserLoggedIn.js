import React from 'react'

function UserLoggedIn({firstName,lastName,mi}) {
    return (
        <span className="w-auto text-xs text-gray-600 px-3 py-2 bg-gray-50 rounded-full m-2">Cashier: {firstName} {mi}. {lastName}</span>
    )
}

export default UserLoggedIn;
