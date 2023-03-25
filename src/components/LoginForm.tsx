import Link from 'next/link';

export type LoginProps = {
    handleSubmit: (e: React.FormEvent) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    error: string;
    loading: boolean;
};

export const LoginForm: React.FC<LoginProps> = ({
                                         handleSubmit,
                                         email,
                                         setEmail,
                                         password,
                                         setPassword,
                                         error,
                                         loading,
                                     }) => {
    return (
        <div className="max-w-md w-full rounded-lg shadow-2xl
            space-y-8 bg-white p-12">
            <div>
                <img
                    className="mx-auto h-12 w-auto"
                    src="/connect-logo.png"
                    alt="Connect"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to Cavi Connect
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <Link href="/register">
                        <span className="font-medium text-blue-600 hover:text-blue-500">
                            Register</span>
                    </Link>
                </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {error && (
                    <div className="text-red-500 text-sm font-medium mb-4">{error}</div>
                )}
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading && (
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8zm14.142-1.858a5.5 5.5 0 10-7.778 0l1.032 1.032a4.5 4.5 0 016.714 0l.032.032 1.032-1.032z"
                                ></path>
                            </svg>
                        )}
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          </span>
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}
