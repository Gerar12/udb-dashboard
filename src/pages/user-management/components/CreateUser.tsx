import React from 'react';
import { toast } from 'sonner'

type OnCloseFunction = () => void;

const CreateUser: React.FC<{ onClose: OnCloseFunction }> = ({ onClose }) => {
    const handleSubmit = (event: React.FormEvent) => {
        toast.success('User created')
        event.preventDefault();
        onClose();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="w-full">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">Create User</h3>
                                    <div className="mt-2">
                                        <div>
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete="username"
                                                required
                                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full 
                                                shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                required
                                                className="mt-1 
                                                focus:ring-primary-500 focus:border-primary-500 
                                                block w-full shadow-sm sm:text-lg font-semibold
                                                border-gray-300 
                                                rounded-md"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                required
                                                className="mt-1 focus:ring-primary-500 
                                                focus:border-primary-500 block 
                                                w-full shadow-sm sm:text-lg font-semibold 
                                                border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="userType" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                User Type
                                            </label>
                                            <select
                                                id="userType"
                                                name="userType"
                                                autoComplete="userType"
                                                required
                                                className="mt-1 block
                                                 w-full py-2 pl-3 pr-10 border 
                                                 border-gray-300 bg-white dark:bg-gray-700 
                                                 text-gray-900 dark:text-gray-200 rounded-md shadow-sm 
                                                 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                            >
                                                <option value="administrator">Administrator</option>
                                                <option value="editor">Editor</option>
                                                <option value="viewer">Viewer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Create
                            </button>
                            <button
                                onClick={onClose}
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;