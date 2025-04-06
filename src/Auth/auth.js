import { create } from "zustand";

// Authentication Store
const useAuthStore = create((set) => ({
    isAuthenticated: "no", // Default: not logged in
    loginMessage: "",

    login: async (username, password, entrustToken) => {
        try {
            const response = await fetch("/users.json"); // Fetch mock users
            const users = await response.json();

            // Find user
            const user = users.find((u) => u.username === username);

            if (!user) {
                return set({ loginMessage: "Invalid username" });
            }

            if (user.password !== password) {
                return set({ loginMessage: "Invalid password" });
            }
//Check if entrust token is 8 digits
            if (!/^\d{8}$/.test(entrustToken)) {
                return set({ loginMessage: "Wrong token. Retry (8 digits)" });}

            // Successful login
            set({ isAuthenticated: "yes", loginMessage: "" });
        } catch (error) {
            console.error("Error loading users:", error);
            set({ loginMessage: "Login failed" });
        }
    },

    logout: () =>  localStorage.removeItem("rrc!") // Logout action
}));

export default useAuthStore;
