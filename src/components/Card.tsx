import { FC } from 'react' //Функциональный компонент

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height: string
    variant: CardVariant
    onClick: (num: number) => void //Если надо что то возращать, то вместо void написать strig/number...
    children: React.ReactNode
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
    return (
        <div
            onClick={() => onClick(0)}
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : 'none'
            }}
        >
            {children}
        </div>
    )
}

export default Card
