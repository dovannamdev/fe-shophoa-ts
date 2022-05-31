import { useQuery } from "react-query";
import { ShopHoaAPI } from "../services";

const useGetAllRole = () => {
  const fetchAllRole = async () => {
    const shopHoaAPI = new ShopHoaAPI();
    const getAllRole = await shopHoaAPI.getAllRole();
    return getAllRole?.responseData;
  };
  const { data, isLoading, isError } = useQuery("GetAllRole", () =>
    fetchAllRole()
  );
  return { data, isLoading, isError };
};

export default useGetAllRole;
