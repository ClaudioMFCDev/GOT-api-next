'use client';

import { useRouter } from "next/navigation";


export default function LoginForm() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 ">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="border rounded-2xl bg-white sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className=" mx-auto w-auto"
                        src="/gotLogo.svg"
                        alt="GotLogo"
                        width={24}
                        height={24}
                    />
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Ingresa a tu cuenta
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={async (event) => {
                        event.preventDefault()

                        //get form data
                        const formData = new FormData(event.currentTarget)
                        const user = formData.get('email');
                        const password = formData.get('password');

                        const response = await fetch('/api/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ user, password })
                        });

                        const data = await response.json();
                        
                        if (data.message === "Bienvenido") {
                            router.push('/dashboard');
                        }

                    }} >

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 color-black"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="px-2 font-semibold text-indigo-600 hover:text-indigo-500">
                                        Olvidaste la contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-grey1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grey2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey3"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </main>

    )
}
