import { useMediaQuery } from "react-responsive";

export const useResponsivePageSize = () => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return {
      bestProductPageSize: 1,
      allProductPageSize: 4,
    };
  }
  if (isTablet) {
    return {
      bestProductPageSize: 2,
      allProductPageSize: 6,
    };
  }

  return {
    bestProductPageSize: 4,
    allProductPageSize: 10,
  };
};
