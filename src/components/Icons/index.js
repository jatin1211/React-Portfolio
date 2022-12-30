import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge'

export default function RenderIcon(data) {
    const {
        name,
        variant,
        bg,
        icon,
        idx,
    } = data

    const [viewMessage, setViewMessage] = useState('');
    const handleHover = (e, remove) => {
        remove ? setViewMessage(false) : setViewMessage(`${name}`)
    }

    return (
        <div key={'div' + name}>
            <Badge
                variant={variant}
                name='name'
                defaultValue={name}
                key={variant + idx}
                onMouseOver={(e => handleHover(e))}
                onMouseLeave={e => handleHover(e, true)}
                className={`${bg ? `${bg}  p-2 my-1 mr-1 text-white  boxShadow pulseHoverOnly` : ` text-white p-2 my-1 mr-1  boxShadow pulseHoverOnly`}`}
            >
                {icon ? icon : name}
                {viewMessage && (<span className={`${bg ? `${bg !== 'white' ? `${bg} text-white textShadow` : `${bg} text-dark `} ml-1` : `bg-${`${variant !== 'light' ? `${variant} textShadow` : `${variant} text-dark`} ml-1`} ml-1`}`}>
                    {name}
                </span>
                )}
            </Badge>
        </div>
    )
}