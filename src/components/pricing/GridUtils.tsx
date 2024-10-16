import type { ComponentType } from "react"

export function withGrid(Component): ComponentType {
    return (props) => {
        return <Component {...props} className="affiliates__features-grid" />
    }
}

export function withAutoFitColumns(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                }}
            />
        )
    }
}
