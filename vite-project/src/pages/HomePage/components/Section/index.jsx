const SectionHotItem = () => {
  return (
    <section className="section hot-item">
      <div>
        <img src="/images/Img_home_hotItem.png" alt="인기 상품" />
      </div>

      <div>
        <span className="category">Hot Item</span>
        <h3 className="description-area">
          <span className="description">인기 상품을</span>
          <span className="description">확인해 보세요</span>
        </h3>

        <h4 className="sub-description-area">
          <span className="sub-description">
            가장 HOT한 중고거래 물품을 <br />
            판다 마켓에서 확인해 보세요
          </span>
        </h4>
      </div>
    </section>
  );
};

const SectionSearch = () => {
  return (
    <section className="section search">
      <div className="search-left">
        <span className="category">Hot Item</span>
        <h3 className="description-area">
          <span className="description">
            구매를 원하는 <br /> 상품을 검색하세요
          </span>
        </h3>

        <h4 className="sub-description-area">
          <span className="sub-description">
            구매하고 싶은 물품은 검색해서 <br />
            쉽게 찾아보세요
          </span>
        </h4>
      </div>
      <div>
        <img src="/images/Img_home_search.png" alt="상품 검색" />
      </div>
    </section>
  );
};

const SectionRegister = () => {
  return (
    <section className="section register">
      <div>
        <img src="/images/Img_home_register.png" alt="상품 등록" />
      </div>

      <div>
        <span className="category">Register</span>
        <h3 className="description-area">
          <span className="description">판매를 원하는</span>
          <span className="description">상품을 등록하세요</span>
        </h3>

        <h4 className="sub-description-area">
          <span className="sub-description">
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            쉽게 등록하세요
          </span>
        </h4>
      </div>
    </section>
  );
};

export { SectionHotItem, SectionSearch, SectionRegister };
