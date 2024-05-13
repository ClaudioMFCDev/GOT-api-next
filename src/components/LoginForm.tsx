'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    return (
        <main className=" bg-xhonolulublue  flex min-h-screen flex-col items-center justify-between p-10 ">

            <div className=" border-2 rounded-3xl border-xlightcyan  flex min-h-full flex-1 flex-col justify-center px-20 py-12 ">
                <div className="border rounded-2xl bg-white sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className=" mx-auto w-60"
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
                    {/* FORMULARIO */}
                    <form className="space-y-6" onSubmit={async (event) => {
                        event.preventDefault()

                        //get form data
                        const formData = new FormData(event.currentTarget)
                        const user = formData.get('email')?.toString();
                        const password = formData.get('password')?.toString();

                        const response = await fetch('/api/login', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ user, password }),
                          });
                  
                          const data = await response.json();
                  
                          if (response.ok === false) {
                            setError(data.message);
                          } else {
                            router.push('/dashboard');
                          }


                    }} 
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  color-black"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                                <div className="text-sm mt-2 text-right	">
                                    <a href="#" className="font-semibold text-xlightcyan hover:text-white">
                                        Olvidaste la contraseña?
                                    </a>
                                </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full justify-center rounded-lg bg-xlightcyan h-10 text-md font-semibold leading-6 text-black shadow-sm transition duration-300 hover:bg-xnonphotoblue  hover:border-white hover:border-4 hover:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-xhonolulublue"
                            >
                                Ingresar
                            </button>
                            {error && <p className="mt-4 text-xlightcyan">{error}</p>}
                        </div>
                    </form>

                </div>
            </div>

        </main>

    )
}
