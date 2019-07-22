import React from 'react'

export default function DashboardAdmin({user}) {
    return (
        user && user.role === "admin" && <>
        <hr />
        <div>
            ADMIN PANEL
        </div>
        </>
    )
}
