import { useMediaQuery } from "react-responsive";

export const useResponsivePageSize = () => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return [1, 4]; // [베스트상품 pageSize, 전체상품 pageSize]
  }
  if (isTablet) {
    return [2, 6];
  }

  return [4, 10];
};
