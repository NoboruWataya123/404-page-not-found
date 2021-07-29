import React, { FunctionComponent } from 'react'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

function Layout({children}:LayoutProps):JSX.Element {
    return (
        <>
            <div className={styles.wrapper}>
                {children}
            </div>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
