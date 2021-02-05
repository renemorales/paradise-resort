import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <dir></dir>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
