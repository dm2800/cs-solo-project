import { create } from "zustand";

const useAppStore = create((set) => ({
    isUserLoggedIn: false,
    LoggedInUserZ: {},
    setLoggedInUserZ: (userData) => set(() => ({LoggedInUserZ: userData}))
    
}))

export default useAppStore; 