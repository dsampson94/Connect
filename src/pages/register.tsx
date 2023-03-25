import { useState } from 'react';
import { useRouter } from 'next/router';
import { RegisterForm } from '~/components/RegisterForm';

const Register = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    };

    return (
            <RegisterForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                error={error}
                loading={loading}
            />
    );
};

export default Register;
