import React, { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
    children: ReactNode; // Define que o componente aceita `children` como propriedade
};

type ErrorBoundaryState = {
    hasError: boolean; // Estado para rastrear se houve erro
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }; // Estado Inicial
    }

    static getDerivedStateFromError() {
        return { hasError: true }; // Atualiza o estado quando ocorre um erro
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error Boundary caught an error', error, errorInfo); // Log do erro
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo deu errado. Tente novamente mais tarde.</h1>
        }

        return this.props.children; // Renderiza os filhos se não houver erro
    }
}

export default ErrorBoundary