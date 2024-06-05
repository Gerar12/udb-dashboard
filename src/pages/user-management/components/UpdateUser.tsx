import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { registerType } from "@/types";
import { UseputUpdateUser } from "@/hooks/putUpdateUser";

interface UpdateUserProps {
  onClose: () => void;
  email: string;
  name: string;
  id: number;
}

const UpdateUser = ({ onClose, email, id, name }: UpdateUserProps) => {
  const { register, handleSubmit, reset } = useForm<registerType>({
    defaultValues: {
      name: name,
      email: email,
      password: "",
    },
  });

  console.log(id);
  const handleUpdate = async (data: registerType) => {
    console.log("User updated successfully");
    console.log(data);
    try {
      await UseputUpdateUser(id as number, data);
      toast.success("User updated successfully");
      console.log(data);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user");
    } finally {
      reset();
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <>
            <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                      Update User
                    </h3>
                    <div className="mt-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register("name", { required: true })}
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="mt-1 focus:ring-primary-500 
                                                focus:border-primary-500 block w-full 
                                                shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          {...register("password")}
                          name="password"
                          id="email"
                          autoComplete="password"
                          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                        />
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
                  Update
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
          </>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
